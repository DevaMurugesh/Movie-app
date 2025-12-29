# Setup Instructions

## Quick Fix for "Failed to load movies" Error

The error occurs because the TMDB API key is not configured. Follow these steps:

### Step 1: Get a TMDB API Key

1. Go to [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. Create a free account (if you don't have one)
3. Go to [Settings → API](https://www.themoviedb.org/settings/api)
4. Request an API key (it's free)
5. Copy your API key

### Step 2: Create .env File

1. In the `movie-app` folder, create a new file named `.env` (note the dot at the beginning)
2. Add this line to the file:
   ```
   VITE_TMDB_API_KEY=your-actual-api-key-here
   ```
3. Replace `your-actual-api-key-here` with your actual API key from Step 1

### Step 3: Restart the Development Server

1. Stop your current dev server (Ctrl+C)
2. Start it again:
   ```bash
   npm run dev
   ```

The app should now load movies successfully!

## Example .env file content:
```
VITE_TMDB_API_KEY=1234567890abcdef1234567890abcdef
```

**Important:** 
- Never commit your `.env` file to GitHub (it's already in `.gitignore`)
- For Vercel deployment, add the environment variable in Vercel dashboard

