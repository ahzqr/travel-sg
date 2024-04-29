export default function CarparkAvailibility({ selected, carparkInfo }) {
  const selectedCarparkInfo = carparkInfo.filter(
    (carpark) => carpark.carpark_number === selected.value
  );
  return (
    <>
      {selectedCarparkInfo.map((carpark) => (
        <div key={carpark.carpark_number}>
            <br/>
          <p>
            <strong>Last Updated: </strong> {carpark.update_datetime}
          </p>
          <hr />
          {carpark.carpark_info.map((info, index) => {
            const percentageAvail =
              (info.lots_available / info.total_lots) * 100;
            let color = "";
            if (percentageAvail >= 50) {
              color = "green";
            } else if (percentageAvail >= 25) {
              color = "orange";
            } else {
              color = "red";
            }
            return (
              <div key={index}>
                <p>
                  <strong>Lot Type: </strong> {info.lot_type}
                </p>
                <p>
                  <strong>Total Lots: </strong> {info.total_lots}
                </p>
                <p style={{ color: color }}>
                  <strong>Lots Available: </strong> {info.lots_available}
                </p>
                {index < carpark.carpark_info.length - 1 && <hr />}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}
