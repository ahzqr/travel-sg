export default function Carpark({ carparkInfo }) {
  return (
    <>
      <ul>
        {carparkInfo.map((carpark) => (
          <li key={carpark.carpark_number}>
            <strong>Carpark Number: </strong>{" "}
            <a
              href={`https://maps.google.com/maps?q=${carpark.carpark_number}`}
              target="_blank"
            >
              {carpark.carpark_number}
            </a>
            <br />
            <strong>Last Updated: </strong> {carpark.update_datetime} <br />
            <strong>Lots Available: </strong>{" "}
            {carpark.carpark_info[0].lots_available} <br />
          </li>
        ))}
      </ul>
    </>
  );
}
