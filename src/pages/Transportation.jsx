import { Link } from "react-router-dom";

export default function Transportation() {
  return (
    <>
      <h1>Transportation</h1>
      <h5>Getting around Singapore has never been easier!</h5>
      <br />
      <h3>Mode of Transport</h3>
      <button><Link to="/transport/train">Train</Link></button>
      <button><Link to="/transport/bus">Bus</Link></button>
      <button>Taxi</button>
      <button><Link to="/transport/car">Car</Link></button>
    </>
  );
}
