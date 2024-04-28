import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import CarparkAvailibility from "./CarparkAvailability";
import CarparkButtons from "../components/CarparkButtons";

export default function Carpark() {
  const [carparkInfo, setCarparkInfo] = useState([]);
  const [selected, setSelected] = useState("");
  const [filteredCarpark, setFilteredCarpark] = useState([]);

  const fetchCarparkInfo = async () => {
    const response = await fetch(
      "https://api.data.gov.sg/v1/transport/carpark-availability"
    );
    const data = await response.json();
    setCarparkInfo(data.items[0].carpark_data);
  };
  useEffect(() => {
    fetchCarparkInfo();
  }, []);

  const handleChange = (selected) => {
    setSelected(selected);
  };

  return (
    <>
      <CarparkButtons
        carparkInfo={carparkInfo}
        setFilteredCarpark={setFilteredCarpark}
        fetchCarparkInfo={fetchCarparkInfo}
      />
      <ReactSelect
        value={selected}
        isSearchable
        placeholder="Search for carparks.."
        onChange={handleChange}
        options={
          filteredCarpark.length > 0
            ? filteredCarpark
            : carparkInfo.map((carpark) => ({
                value: `${carpark.carpark_number}`,
                label: `${carpark.carpark_number}`,
              }))
        }
      />
      <CarparkAvailibility selected={selected} carparkInfo={carparkInfo} />
    </>
  );
}
