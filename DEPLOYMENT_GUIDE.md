# 📚 GitHub & Deployment Guide

## ✅ Project Ready for Upload

Your portfolio project is now properly structured with:
- ✅ `.gitignore` - Excludes node_modules and build files
- ✅ `LICENSE` - MIT License for open source
- ✅ Comprehensive `README.md` - Professional documentation
- ✅ Clean project structure - Organized components and data

## 🚀 Step-by-Step: Upload to GitHub

### Step 1: Initialize Git Repository
Open PowerShell in your portfolio folder and run:
```powershell
cd C:\Users\hp\Desktop\IAI\Portfolio
git init
git add .
git commit -m "Initial commit: Portfolio project"
```

### Step 2: Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `portfolio`
3. Description: `AI/ML Developer Portfolio - Muhammad Uzair Warraich`
4. Choose **Public** (recommended for portfolios)
5. Click **Create repository**

### Step 3: Push to GitHub
After creating the repo, GitHub will show you commands. Run these in PowerShell:
```powershell
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

---

## 🌐 Hosting Options

### ✅ Option 1: GitHub Pages (FREE & EASIEST)

1. **Build the project:**
   ```powershell
   npm install
   npm run build
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Under "Build and deployment"
   - Select Branch: `main`
   - Select Folder: `/dist`
   - Click Save

3. **Your site will be live at:**
   ```
   https://YOUR-USERNAME.github.io/portfolio
   ```

### Option 2: Vercel (RECOMMENDED - AUTO-DEPLOYS)

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Import from GitHub
4. Select your `portfolio` repository
5. Click "Deploy"
6. Your site is live instantly!

**Bonus:** Every `git push` auto-deploys your changes

### Option 3: Netlify (ALSO GOOD)

1. Go to [netlify.com](https://netlify.com)
2. Click "Deploy" button
3. Select "Deploy with GitHub"
4. Choose your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy"

---

## 📋 Quick Checklist

- [ ] Created GitHub account (if you don't have one)
- [ ] Ran `git init` and `git add .`
- [ ] Created repository on GitHub
- [ ] Ran `git push -u origin main`
- [ ] Enabled GitHub Pages in Settings → Pages
- [ ] Selected `main` branch and `/dist` folder
- [ ] Waited 1-2 minutes for deployment
- [ ] Visited `https://YOUR-USERNAME.github.io/portfolio`

---

## 🔑 Environment Variables (If Needed)

If your portfolio uses environment variables, create `.env` file:
```
VITE_YOUR_VARIABLE=value
```

Don't worry - it's already in `.gitignore`!

---

## 📱 Testing Before Upload

Run locally first:
```powershell
npm install
npm run dev
```

Build and preview production:
```powershell
npm run build
npm run preview
```

Then upload when everything looks good!

---

## ✨ After Upload

Update links:
- LinkedIn: Add portfolio URL to profile
- GitHub: Update bio with portfolio link
- Resume: Include portfolio URL

---

**Need help?** Check these resources:
- [Git Tutorial](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

Good luck! 🚀
