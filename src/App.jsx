import { useEffect, useState } from "react";
import CarparkList from "./pages/CarparkList";
export default function App() {
  const [carparkInfo, setCarparkInfo] = useState([]);

  useEffect(() => {
    const fetchCarparkInfo = async () => {
      const response = await fetch(
        "https://api.data.gov.sg/v1/transport/carpark-availability"
      );
      const data = await response.json();
      setCarparkInfo(data.items[0].carpark_data);
    };
    fetchCarparkInfo();
  }, []);

  return (
    <div>
      <h1>Carpark SG</h1>
      <CarparkList carparkInfo={carparkInfo} />
    </div>
  );
}
