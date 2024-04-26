import { useEffect, useState } from "react";

export default function Carpark() {
  const [carparkInfo, setCarparkInfo] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   const apiKey =
  //     "6XaA1rbGSJG8SMB1s98eZA==";

  //   const url = "http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2";

  //   try {
  //     const response = await fetch(url, {
  //       headers: {
  //         "AccountKey": apiKey,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await response.json();
  //     setCarparkInfo(data.records);
  //     console.log(data.records);

  //     if (response.ok) {
  //       console.log("All data received");
  //     } else {
  //       console.error("Failed to receive", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Error retrieving:", error);
  //   }
  // };

  useEffect(() => {
    const fetchCarparkInfo = async () => {
      const response = await fetch(
        "https://api.data.gov.sg/v1/transport/carpark-availability"
      );
      const data = await response.json();
      setCarparkInfo(data.items[0].carpark_data);
    };
    fetchCarparkInfo();
  }, []);

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
