import { useEffect, useState } from "react";
import BusArrival from "../components/BusArrival";

export default function Bus() {
  const [busStops, setBusStops] = useState([]);
  const [selected, setSelected] = useState("");
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchBusStop = async () => {
      const response = await fetch(
        "https://data.busrouter.sg/v1/stops.min.json"
      );
      const data = await response.json();
      const extractedBusStops = Object.keys(data).map((stopNumber) => ({
        stopNumber,
        name: data[stopNumber][2], // Assuming the name is at index 2 of the details array
      }));
      setBusStops(extractedBusStops);
    };
    fetchBusStop();
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      if (selected) {
        const selectedNo = selected.split("-")[1].trim();
        const response = await fetch(
          `https://arrivelah2.busrouter.sg/?id=${selectedNo}`
        );
        const data = await response.json();
        setDetails(data.services);
      }
    };
    fetchDetails();
  }, [selected]);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <>
      <h1>Bus Arrival</h1>
      <select onChange={handleChange}>
        <option value="">Select a Bus Stop!</option>
        {busStops.map((stop) => (
          <option>{`${stop.name} - ${stop.stopNumber}`}</option>
        ))}
      </select>
      <BusArrival details={details} />
    </>
  );
}
