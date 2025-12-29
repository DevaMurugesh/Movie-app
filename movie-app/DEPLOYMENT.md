# Deployment Guide

## ✅ Build Test: SUCCESS
Your project builds successfully! The `dist` folder is ready for deployment.

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Step 1: Push to GitHub
```bash
# If you haven't created a GitHub repo yet:
# 1. Go to https://github.com/new
# 2. Create a new repository (don't initialize with README)
# 3. Copy the repository URL

# Then run these commands:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [https://vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. **IMPORTANT**: Add Environment Variable:
   - Name: `VITE_TMDB_API_KEY`
   - Value: Your TMDB API key
6. Click "Deploy"
7. Done! Your app will be live in ~2 minutes

---

## Option 2: Deploy to Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy on Netlify
1. Go to [https://netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **IMPORTANT**: Add Environment Variable:
   - Go to Site settings → Environment variables
   - Add: `VITE_TMDB_API_KEY` = Your API key
7. Click "Deploy site"

---

## Option 3: Deploy to GitHub Pages

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json
Add these to your `package.json`:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/movie-app",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Deploy
```bash
npm run deploy
```

### Step 4: Configure GitHub Pages
1. Go to your GitHub repo → Settings → Pages
2. Source: Select "gh-pages" branch
3. Save

**Note**: For GitHub Pages, you'll need to update `vite.config.js` to add `base: '/movie-app/'` if your repo name is `movie-app`.

---

## Option 4: Manual Hosting (Any Static Host)

### Step 1: Build the project
```bash
npm run build
```

### Step 2: Upload dist folder
Upload the contents of the `dist` folder to your hosting provider:
- Upload all files from `dist/` folder
- Make sure `index.html` is in the root

### Step 3: Set Environment Variables
Most hosts allow you to set environment variables. Set:
- `VITE_TMDB_API_KEY` = Your API key

**Note**: For static hosts that don't support environment variables, you'll need to hardcode the API key (not recommended for security).

---

## Quick Commands Reference

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main
```

---

## Environment Variables

**Required for all hosting platforms:**
- `VITE_TMDB_API_KEY` - Your TMDB API key

**How to get API key:**
1. Go to https://www.themoviedb.org/settings/api
2. Create account and request API key
3. Copy your API key

---

## Troubleshooting

### Build fails
- Make sure all dependencies are installed: `npm install`
- Check for syntax errors: `npm run lint`

### API not working after deployment
- Verify environment variable is set correctly
- Make sure variable name is exactly: `VITE_TMDB_API_KEY`
- Redeploy after adding environment variable

### 404 errors on routes
- Make sure `vercel.json` is included (for Vercel)
- For other hosts, configure redirects to `index.html`

