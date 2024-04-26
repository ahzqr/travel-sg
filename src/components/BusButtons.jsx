export default function BusButtons({ details, setDetails, fetchDetails }) {
  const sortByArrivalTime = () => {
    const sortedDetails = [...details].sort(function (a, b) {
      return a.next.duration_ms - b.next.duration_ms;
    });
    setDetails(sortedDetails);
  };

  const sortByBusNumber = () => {
    const sortedDetails = [...details].sort(function (a, b) {
      return a.no - b.no;
    });
    setDetails(sortedDetails);
  };

  const handleRefresh = () => {
    fetchDetails();
  };
  return (
    <>
      <button onClick={sortByArrivalTime}>Sort Arrival</button>
      <button onClick={sortByBusNumber}>Sort Bus Number</button>
      <button onClick={handleRefresh}>Refresh List</button>
    </>
  );
}
