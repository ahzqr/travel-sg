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
        name: data[stopNumber][2],
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

  const sortByArrivalTime = () => {
    const sortedDetails = [...details].sort(function (a, b) {
      return a.next.duration_ms - b.next.duration_ms;
    });
    setDetails(sortedDetails);
  };

  const sortByBusNumber = () => {
    const sortedDetails = [...details].sort(function (a, b) {
      return a.no - b.no;
    });
    setDetails(sortedDetails);
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
      <button onClick={sortByArrivalTime}>Sort Arrival</button>
      <button onClick={sortByBusNumber}>Sort Bus Number</button>
      <BusArrival details={details} />
    </>
  );
}
