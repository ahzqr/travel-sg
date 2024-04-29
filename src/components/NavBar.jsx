import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar is-danger is-spaced">
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="/transport">
              Getting Around
            </Link>
            <div className="navbar-dropdown is-boxed">
              <Link className="navbar-item" to="/transport/train">
                Train
              </Link>
              <Link className="navbar-item" to="/transport/bus">
                Bus
              </Link>
              <Link className="navbar-item" to="/transport/car">
                Car
              </Link>
            </div>
          </div>
          <Link className="navbar-item" to="/community">
              Community
            </Link>
        </div>
      </div>
    </nav>
  );
}
