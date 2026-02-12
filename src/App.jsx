import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fecthData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character",
        );

        const data = await response.json();

        setData(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fecthData();
  }, []);

  return <></>;
}

export default App;
