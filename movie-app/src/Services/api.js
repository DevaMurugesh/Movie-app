const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

if (!API_KEY || API_KEY === 'your-api-key-here') {
  console.warn('⚠️ TMDB API key is not configured. Please set VITE_TMDB_API_KEY in your .env file');
}

export const getPopularMovies = async () => {
  try {
    if (!API_KEY || API_KEY === 'your-api-key-here') {
      throw new Error('API key is not configured. Please set VITE_TMDB_API_KEY in your .env file');
    }

    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    
    const data = await response.json();
    
    if (!response.ok || data.status_code) {
      const errorMessage = data.status_message || `HTTP ${response.status}: ${response.statusText}`;
      throw new Error(errorMessage);
    }
    
    return data.results || [];
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    if (!API_KEY || API_KEY === 'your-api-key-here') {
      throw new Error('API key is not configured. Please set VITE_TMDB_API_KEY in your .env file');
    }

    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`
    );
    
    const data = await response.json();
    
    if (!response.ok || data.status_code) {
      const errorMessage = data.status_message || `HTTP ${response.status}: ${response.statusText}`;
      throw new Error(errorMessage);
    }
    
    return data.results || [];
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};
