# The Guard Guy — Deployment Guide

## What's in this folder
```
TheGuardGuy/
  src/
    TheGuardGuy.jsx   ← your entire website
    main.jsx          ← entry point
  public/
    favicon.svg       ← browser tab icon
  index.html          ← HTML wrapper
  package.json        ← project config
  vite.config.js      ← build tool config
  vercel.json         ← hosting config
  .gitignore          ← files to exclude
```

---

## STEP 1 — Install Node.js on your Mac (one time only)
1. Go to **https://nodejs.org**
2. Click the big green **"LTS"** download button
3. Open the downloaded file and follow the installer
4. When done, open **Terminal** (press Cmd+Space, type Terminal, press Enter)
5. Type this and press Enter to confirm it worked:
   ```
   node --version
   ```
   You should see something like `v20.0.0`

---

## STEP 2 — Create a GitHub account (one time only)
1. Go to **https://github.com**
2. Click **Sign Up**
3. Use your email and create a password
4. Verify your email
5. You're in — keep this tab open

---

## STEP 3 — Install GitHub Desktop (easiest way to use GitHub on Mac)
1. Go to **https://desktop.github.com**
2. Download and install GitHub Desktop
3. Open it and sign in with your GitHub account

---

## STEP 4 — Create a new GitHub repository
1. In GitHub Desktop click **File → New Repository**
2. Name it: `the-guard-guy`
3. Make sure **Initialize with README** is checked
4. Click **Create Repository**
5. Click **Publish Repository** (top right)
6. Make sure **Keep this code private** is checked
7. Click **Publish Repository**

---

## STEP 5 — Add your files to the repository
1. In GitHub Desktop click **Repository → Show in Finder**
2. A folder opens — this is your repository folder
3. Copy ALL the files from the TheGuardGuy folder you downloaded into this folder
   (Replace the existing README.md if asked)
4. Go back to GitHub Desktop
5. You'll see all the files listed on the left
6. At the bottom left type a message: `Initial website upload`
7. Click **Commit to main**
8. Click **Push origin** (top right)
9. Your code is now on GitHub ✅

---

## STEP 6 — Deploy to Vercel (free hosting)
1. Go to **https://vercel.com**
2. Click **Sign Up** → choose **Continue with GitHub**
3. Authorize Vercel to access your GitHub
4. Click **Add New Project**
5. Find `the-guard-guy` in the list and click **Import**
6. Vercel auto-detects it as a Vite project
7. Leave all settings as default
8. Click **Deploy**
9. Wait 1-2 minutes ⏳
10. You'll see **"Congratulations!"** with a live URL like:
    `https://the-guard-guy.vercel.app`
11. Click the URL — your site is LIVE ✅

---

## STEP 7 — Connect your domain name
1. In Vercel, go to your project → **Settings → Domains**
2. Type your domain name (e.g. `theguardguy.com`) and click **Add**
3. Vercel shows you two DNS records to add
4. Log into wherever you bought your domain (GoDaddy, Namecheap, Google Domains, etc.)
5. Go to **DNS Settings** for your domain
6. Add the two records Vercel gave you:
   - **A Record:** `@` → `76.76.21.21`
   - **CNAME Record:** `www` → `cns.vercel-dns.com`
7. Save and wait 10-30 minutes for it to propagate
8. Your site is now live at your domain ✅

---

## STEP 8 — How to update your site in the future
Whenever you want to make changes:
1. Come back to Claude and ask for changes
2. Download the new `TheGuardGuy.jsx` file
3. Replace the old file in your repository folder
4. Open GitHub Desktop
5. Type a commit message describing the change
6. Click **Commit to main**
7. Click **Push origin**
8. Vercel automatically redeploys in ~60 seconds ✅

---

## Costs
| Service | Cost |
|---|---|
| Vercel hosting | FREE |
| GitHub | FREE |
| Your domain (already purchased) | Already paid |
| Stripe payments (when you add it) | 2.9% per transaction |
| Jotform HIPAA Gold | $99/mo (already in your model) |

**Total monthly cost to run this site: $0 (plus Jotform)**

---

## Need help?
- Vercel docs: https://vercel.com/docs
- GitHub Desktop docs: https://docs.github.com/desktop
- Or come back to Claude and ask!
