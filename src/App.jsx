import { useEffect, useState } from "react";

export default function App() {
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
        const response = await fetch(
          `https://arrivelah2.busrouter.sg/?id=${selected}`
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
    <div>
      <h1>Travel SG</h1>
      <h5>Plan your getaway in Singapore!</h5>
      <button>Transport</button>
      <button>Communal Itinerary</button>
      <button>Attractions</button>
      <hr />
      <h1>Transportation</h1>
      <h5>Getting around Singapore has never been easier!</h5>
      <br />
      <h3>Mode of Transport</h3>
      <button>Train</button>
      <button>Bus</button>
      <button>Taxi</button>
      <button>Car</button>
      <hr />
      <h1>SMRT - Train Line in Singapore</h1>
      <img
        src="https://www.lta.gov.sg/content/dam/ltagov/getting_around/public_transport/rail_network/pdf/tel3_sm-en.png"
        height="500px"
      />
      <iframe
        src="https://trainarrivalweb.smrt.com.sg/"
        height="300px"
      ></iframe>
      <p>
        You can calculate your fare by clicking{" "}
        <a href="https://www.lta.gov.sg/content/ltagov/en/map/fare-calculator.html">
          here
        </a>
      </p>
      <hr />
      <h1>Bus Arrival</h1>
      <select onChange={handleChange}>
        <option value="">Select a Bus Stop!</option>
        {busStops.map((stop) => (
          <option>{`${stop.name} - ${stop.stopNumber}`}</option>
        ))}
      </select>
      {details.map((detail) => (
        <div>
          <p>Bus Number: <strong>{detail.no}</strong>, Arriving: <strong>{Math.floor(detail.next.duration_ms / 60000)} min</strong></p>
          <p></p>
        </div>
      ))}
    </div>
  );
}
