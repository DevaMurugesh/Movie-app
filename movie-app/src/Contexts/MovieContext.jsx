import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext(undefined);

export const useMovieContext = () => {
  const ctx = useContext(MovieContext);
  if (ctx === undefined) {
    throw new Error("useMovieContext must be used within a <MovieProvider>.");
  }
  return ctx;
};

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => setFavorites(prev => [...prev, movie]);
  const removeFromFavorites = (movieId) => setFavorites(prev => prev.filter(m => m.id !== movieId));
  const isFavorite = (movieId) => favorites.some(m => m.id === movieId);

  return (
    <MovieContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </MovieContext.Provider>
  );
};
