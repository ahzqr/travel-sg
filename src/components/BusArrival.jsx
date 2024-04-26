export default function BusArrival({ details }) {
  return (
    <>
      {details.map((detail) => (
        <div key={detail.no}>
          <p>
            Bus Number: <strong>{detail.no}</strong>, Arriving:{" "}
            <strong>{Math.floor(detail.next.duration_ms / 60000)} min</strong>
          </p>
        </div>
      ))}
    </>
  );
}
