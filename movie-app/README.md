# Movie App

A React-based movie search and favorites application built with Vite. Browse popular movies, search for your favorites, and save them to your personal favorites list.

## Features

- 🎬 Browse popular movies
- 🔍 Search for movies
- ❤️ Add/remove movies from favorites
- 💾 Favorites saved in localStorage
- 📱 Responsive design

## Tech Stack

- React 19
- Vite
- React Router DOM
- TMDB API (The Movie Database)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- TMDB API key (get one at [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api))

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd movie-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_TMDB_API_KEY=your-api-key-here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. Add environment variable:
   - Name: `VITE_TMDB_API_KEY`
   - Value: Your TMDB API key
5. Click "Deploy"

Vercel will automatically detect Vite and configure the build settings.

### Deploying to GitHub Pages

1. Install `gh-pages` as a dev dependency:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/movie-app",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## Environment Variables

- `VITE_TMDB_API_KEY` - Your TMDB API key (required)

## Project Structure

```
movie-app/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── Contexts/       # React Context providers
│   ├── Services/       # API services
│   └── css/           # Stylesheets
├── public/            # Static assets
└── dist/              # Production build (generated)
```

## License

MIT
