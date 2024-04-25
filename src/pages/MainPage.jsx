import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>Travel SG</h1>
      <h5>Plan your getaway in Singapore!</h5>
      <button><Link to="/transport">Transport</Link></button>
      <button><Link to="/community">Community</Link></button>
      <button>Attractions</button>
    </>
  );
}
