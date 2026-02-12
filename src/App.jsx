import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState({ results: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fecthData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character",
        );

        if (!response.ok) {
          throw new Error(`Error al realizar la peticion: ${response.status}`);
        }

        const data = await response.json();

        const filteredCharacters = data.results.filter((character) =>
          character.status.toLowerCase().includes("alive"),
        );

        const finalArrayCharacters = filteredCharacters.map((character) => ({
          id: character.id,
          name: character.name.replace(/\s+/g, "_"),
          status: character.status,
          gender: character.gender,
        }));

        setCharacters({ results: finalArrayCharacters });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fecthData();
  }, []);

  return (
    <div>
      {loading && <span>Cragando...</span>}
      {characters.results.length > 0 && !loading && (
        <ul>
          {characters.results?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      {error && <span>{error}</span>}
    </div>
  );
}

export default App;
