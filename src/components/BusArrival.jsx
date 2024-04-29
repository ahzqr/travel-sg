export default function BusArrival({ details }) {
  return (
    <>
      {details.map((detail) => (
        <div key={detail.no}>
          <p>
            Bus Number: <strong>{detail.no}</strong>, Arriving:{" "}
            <strong>
              {(detail.next.duration_ms / 60000) <= 1
                ? "Arriving"
                : (detail.next.duration_ms / 60000) < 0
                ? Math.floor(detail.subsequent.duration_ms / 60000) + " min"
                : Math.floor(detail.next.duration_ms / 60000) + " min"}
            </strong>
          </p>
        </div>
      ))}
    </>
  );
}
