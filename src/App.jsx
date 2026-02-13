import "./App.css";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import { useCharacters } from "./hooks/useCharacters";

function App() {
  const { characters, loading, error, nextPage, fecthData } = useCharacters();

  return (
    <main className="app-container">
      <h1>Lista de personajes Rick and Morty</h1>

      {loading && <span>Cragando...</span>}

      {characters.results.length > 0 && !loading && (
        <div className="app-card-grid">
          {characters.results?.map((item) => (
            <CharacterCard key={item.id} character={item} />
          ))}
        </div>
      )}

      {characters.results.length > 0 && (
        <button onClick={() => fecthData(nextPage)}>
          Cargar mas registros
        </button>
      )}

      {error && <span>{error}</span>}
    </main>
  );
}

export default App;
