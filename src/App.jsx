import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
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

        // \s = espacio en blanco, + = toma en cuenta todos los espacios
        // /g = variable global para afectar a toda la cadena
        const modifiedCharacters = filteredCharacters.map((char) => ({
          ...char,
          name: char.name.replaceAll(/\s+/g, "_"),
        }));

        setCharacters(modifiedCharacters);
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
      <ul>
        {characters.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
