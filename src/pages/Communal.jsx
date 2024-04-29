import { useEffect, useState } from "react";

export default function Communal() {
  const [table, setTable] = useState([]);
  const [comment, setComment] = useState({
    Name: "",
    Highlights: "",
    Itinerary: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const apiKey =
      "pat8vnVKH5jW0BvGg.9f57d79df180f62f6db6b837cf80e3d535fea77d787ee776ee6d39218290c63e";
    const baseId = "appYNnIkZCrIKCbAK";
    const dataTable = "tblX76YZStwPkrtz2";

    const url = `https://api.airtable.com/v0/${baseId}/${dataTable}`;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setTable(data.records);
      console.log(data.records);

      if (response.ok) {
        console.log("All data received");
      } else {
        console.error("Failed to receive", response.statusText);
      }
    } catch (error) {
      console.error("Error retrieving:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment((prevComment) => ({ ...prevComment, [name]: value }));
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const apiKey =
      "pat8vnVKH5jW0BvGg.9f57d79df180f62f6db6b837cf80e3d535fea77d787ee776ee6d39218290c63e";
    const baseId = "appYNnIkZCrIKCbAK";
    const dataTable = "tblX76YZStwPkrtz2";

    const url = `https://api.airtable.com/v0/${baseId}/${dataTable}`;

    try {
      console.log(comment);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Name: comment.Name,
            Highlights: comment.Highlights,
            Itinerary: comment.Itinerary,
          },
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        console.log(data.description);
        return;
      }
      getData();
      setComment({
        Name: "",
        Highlights: "",
        Itinerary: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="has-text-centered">
        <br />
        <h1 className="title is-1">Share your Singapore Experience!</h1>
        <hr />
        <form className="field control" onSubmit={handleClick}>
          <label className="label">
            Name:
            <input
              className="input"
              type="text"
              name="Name"
              value={comment.Name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label className="label">
            Trip Highlights:
            <input
              className="input"
              type="text"
              name="Highlights"
              value={comment.Highlights}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label className="label">
            Itinerary:
            <textarea
              className="textarea is-info"
              type="text"
              name="Itinerary"
              value={comment.Itinerary}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <input className="form-submit" type="submit" value="Share!" />
        </form>
        <hr />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {table.map((detail, index) => (
            <div className="card" key={index} style={{ width: "30%", marginBottom: "20px" }}>
              <div className="card-image">
                {/* <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/assets/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure> */}
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{detail.fields.Name}</p>
                    <p className="subtitle is-6">{detail.fields.Highlights}</p>
                  </div>
                </div>

                <div className="content" style={{ height: "100%", overflow: "hidden" }}>
                {detail.fields.Itinerary}
                  <br />
                  <time dateTime="2016-1-1">{detail.fields.Created}</time>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
