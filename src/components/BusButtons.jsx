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
      <br />
      <div className="buttons has-addons is-centered">
        <button className="button is-danger" onClick={sortByArrivalTime}>
          Sort Arrival
        </button>
        <button className="button is-danger" onClick={sortByBusNumber}>
          Sort Bus Number
        </button>
        <button className="button is-danger" onClick={handleRefresh}>
          Refresh List
        </button>
      </div>
    </>
  );
}
