import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/community">Community</Link>
      <Link to="/transport">Getting Around</Link>
    </nav>
  );
}
