import { useState } from "react";
import { useEffect } from "react";

export const useCharacters = () => {
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
        image: character.image,
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

  return {
    characters,
    loading,
    error,
    nextPage,
    fecthData,
  };
};
