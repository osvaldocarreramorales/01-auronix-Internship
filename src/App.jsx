import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [nextPage, setNextPage] = useState(null);
  const [characters, setCharacters] = useState({ results: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fecthData = async (
    defaultUrl = "https://rickandmortyapi.com/api/character",
  ) => {
    setLoading(true);

    try {
      const response = await fetch(defaultUrl);

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

      setCharacters((prevData) => {
        if (defaultUrl === "https://rickandmortyapi.com/api/character") {
          return { results: finalArrayCharacters };
        } else {
          return {
            results: [...prevData.results, ...finalArrayCharacters],
          };
        }
      });

      setNextPage(data.info.next);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <div className="app-container">
       <h1>Lista de personajes Rick and Morty</h1>
      {loading && <span>Cragando...</span>}
      {characters.results.length > 0 && !loading && (
        <>
        <div className="app-card-container">
          {characters.results?.map((item) => (
            <article className="app-card" key={item.id}>
              <span><strong>Id: </strong>{item.id}</span>
              <span><strong>Nombre: </strong>{item.name}</span>
              <span><strong>Estado: </strong>{item.status}</span>
              <span><strong>Genero: </strong>{item.gender}</span>
            </article>
          ))}

         
        </div>
         <button onClick={() => fecthData(nextPage)}>
            Cargar mas registros
          </button>
        </>
        
      )}
      {error && <span>{error}</span>}
    </div>
  );
}

export default App;
