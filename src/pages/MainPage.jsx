import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <div className="has-text-centered">
        <br />
        <h1 className="title is-1">Travel SG</h1>
        <h5 className="subtitle is-3">Plan your getaway in Singapore!</h5>
      </div>
      <br />
      <div className="buttons has-addons is-centered">
        <button className="button is-danger is-rounded">
          <Link className="links" to="/transport">
            Transport
          </Link>
        </button>
        <button className="button is-danger is-rounded">
          <Link className="links" to="/community">
            Community
          </Link>
        </button>
      </div>
    </>
  );
}
