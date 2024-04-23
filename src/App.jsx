import { useEffect, useState } from "react";
export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.data.gov.sg/v1/transport/carpark-availability"
      );
      const data = await response.json();
      setPosts(data.items);
      console.log(data.items);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>{posts.carpark_info}</h2>
    </div>
  );
}
