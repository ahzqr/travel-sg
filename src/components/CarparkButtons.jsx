export default function CarparkButtons({
  carparkInfo,
  setFilteredCarpark,
  fetchCarparkInfo,
}) {
  const handleFilterCar = () => {
    const filteredCarpark = carparkInfo
      .filter((carpark) =>
        carpark.carpark_info.some((info) => info.lot_type === "C")
      )
      .map((carpark) => ({
        value: carpark.carpark_number,
        label: carpark.carpark_number,
      }));
    setFilteredCarpark(filteredCarpark);
  };

  const handleFilterMotor = () => {
    const filteredCarpark = carparkInfo
      .filter((carpark) =>
        carpark.carpark_info.some((info) => info.lot_type === "Y")
      )
      .map((carpark) => ({
        value: carpark.carpark_number,
        label: carpark.carpark_number,
      }));
    setFilteredCarpark(filteredCarpark);
  };

  const handleFilterHeavyVehicle = () => {
    const filteredCarpark = carparkInfo
      .filter((carpark) =>
        carpark.carpark_info.some((info) => info.lot_type === "H")
      )
      .map((carpark) => ({
        value: carpark.carpark_number,
        label: carpark.carpark_number,
      }));
    setFilteredCarpark(filteredCarpark);
  };

  const handleReset = () => {
    const unfilteredCarpark = carparkInfo.map((carpark) => ({
      value: carpark.carpark_number,
      label: carpark.carpark_number,
    }));
    setFilteredCarpark(unfilteredCarpark);
  };

  const handleRefresh = () => {
    fetchCarparkInfo();
  };
  return (
    <>
      <button onClick={handleFilterCar}>Cars</button>
      <button onClick={handleFilterMotor}>Motorcycles</button>
      <button onClick={handleFilterHeavyVehicle}>Heavy Vehicles</button>
      <button onClick={handleReset}>Reset Filter</button>
      <button onClick={handleRefresh}>Refresh</button>
    </>
  );
}
