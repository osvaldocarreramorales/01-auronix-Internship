import { useState } from "react";
import { useEffect } from "react";

export const useCharacters = () => {
  const [nextPage, setNextPage] = useState(null);
  const [characters, setCharacters] = useState({ results: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL = "http://localhost:3000/api/characters";

  const fecthData = async (defaultUrl = API_BASE_URL) => {
    setLoading(true);

    try {
      const response = await fetch(defaultUrl);

      if (!response.ok) {
        throw new Error(`Error al realizar la peticion: ${response.status}`);
      }

      const data = await response.json();

      // los datos ya vienen limpios desde el backend
      // por lo tanto se elimina esa logica

      setCharacters((prevData) => {
        if (defaultUrl === API_BASE_URL) {
          return { results: data.results };
        } else {
          return {
            results: [...prevData.results, ...data.result],
          };
        }
      });

      setNextPage(data.nextPage);
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
