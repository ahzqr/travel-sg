import { Link } from "react-router-dom";

export default function Transportation() {
  return (
    <div className="has-text-centered">
      <br/>
      <h1 className="title is-1">Transportation</h1>
      <h5 className="subtitle is-4">Getting around Singapore has never been easier!</h5>
      <br />
      <h3 className="subtitle is-5 is-underlined">Mode of Transport</h3>
      <div className="buttons has-addons is-centered">
        <button className="button is-danger is-rounded">
          <Link className="links" to="/transport/train">Train</Link>
        </button>
        <button className="button is-danger is-rounded">
          <Link className="links" to="/transport/bus">Bus</Link>
        </button>
        <button className="button is-danger is-rounded">
          <Link className="links" to="/transport/car">Car</Link>
        </button>
      </div>
    </div>
  );
}
 