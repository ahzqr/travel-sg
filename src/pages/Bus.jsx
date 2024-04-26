import { useEffect, useState } from "react";
import BusArrival from "../components/BusArrival";
import ReactSelect from "react-select";

export default function Bus() {
  const [busStops, setBusStops] = useState([]);
  const [selected, setSelected] = useState("");
  const [details, setDetails] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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

  const fetchDetails = async () => {
    if (selected) {
      const selectedNo = selected.value.split("-")[1].trim();
      const response = await fetch(
        `https://arrivelah2.busrouter.sg/?id=${selectedNo}`
      );
      const data = await response.json();
      setDetails(data.services);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [selected]);

  const handleChange = (selected) => {
    setSelected(selected);
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

  const handleRefresh = () => {
    fetchDetails();
  };

  const handleInputChange = (inputValue) => {
    setSearchValue(inputValue);
  };

  return (
    <>
      <h1>Bus Arrival</h1>
      <ReactSelect
        value={selected}
        menuIsOpen={!!searchValue} //* ChatGPT to open menu only after typing
        isSearchable
        placeholder="Search for bus stop.."
        onChange={handleChange}
        onInputChange={handleInputChange}
        options={busStops.map((stop) => ({
          value: `${stop.name} - ${stop.stopNumber}`,
          label: `${stop.name} - ${stop.stopNumber}`,
        }))}
      />
      <button onClick={sortByArrivalTime}>Sort Arrival</button>
      <button onClick={sortByBusNumber}>Sort Bus Number</button>
      <button onClick={handleRefresh}>Refresh List</button>
      <BusArrival details={details} />
    </>
  );
}
