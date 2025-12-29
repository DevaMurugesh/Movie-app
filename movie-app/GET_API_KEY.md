# How to Get Your TMDB API Key (Step-by-Step)

## Quick Steps:

1. **Go to TMDB Website**
   - Visit: https://www.themoviedb.org/
   - Click "Sign Up" (top right) if you don't have an account
   - Or click "Login" if you already have an account

2. **Request API Access**
   - After logging in, go to: https://www.themoviedb.org/settings/api
   - Click the "Request an API Key" button

3. **Fill Out the Form**
   - **Type**: Select "Developer"
   - **Application Name**: Enter "Movie App" (or any name)
   - **Application URL**: Enter "http://localhost:5173" (for development)
   - **Application Summary**: Enter "Personal movie search app"
   - Click "Submit"

4. **Copy Your API Key**
   - You'll see your API key (it's a long string like: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`)
   - **Copy this key** - you'll need it in the next step

5. **Update Your .env File**
   - Open the `.env` file in the `movie-app` folder
   - Replace `your-api-key-here` with your actual API key
   - Save the file

6. **Restart Your Dev Server**
   - Stop the server (Ctrl+C)
   - Run: `npm run dev`
   - The app should now work!

---

## Example .env file (after updating):
```
VITE_TMDB_API_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```
*(Use YOUR actual key, not this example)*

---

**Note**: The API key is FREE and takes just a few minutes to get!

