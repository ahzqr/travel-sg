import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

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
      <h1>Share your Singapore Experience!</h1>
      <form onSubmit={handleClick}>
        <label>
          Name:
          <input
            type="text"
            name="Name"
            value={comment.Name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Trip Highlights:
          <input
            type="text"
            name="Highlights"
            value={comment.Highlights}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Itinerary:
          <textarea
            type="text"
            name="Itinerary"
            value={comment.Itinerary}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Highlight Photo:
          <input type="file" />
        </label>
        <br />
        <input type="submit" value="Share!" />
      </form>
      <hr />
      {table.map((detail, index) => (
        <Card key={index} style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Title>{detail.fields.Name} ({detail.fields.Created})</Card.Title>
            <Card.Subtitle>
              <strong>{detail.fields.Highlights}</strong>
            </Card.Subtitle>
            <Card.Text>{detail.fields.Itinerary}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
