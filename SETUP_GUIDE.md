# Levantar Consults - GitHub & Netlify Setup Guide

## Your GitHub Username
**levantarconsults-256**

---

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon (top right) → **New repository**
3. Fill in the details:
   - **Repository name**: `levantar-consults-website`
   - **Description**: `Official website for Levantar Consults`
   - **Visibility**: Public
   - **Add README**: ❌ Uncheck (we already have one)
   - **Add .gitignore**: ❌ Uncheck
   - **Choose license**: None
4. Click **Create repository**

---

## Step 2: Upload Website Files

### Option A: Web Upload (Easiest - No Command Line)

1. In your new repository, click **"Add file"** → **"Upload files"**
2. Download the website ZIP file from: [Download Link - I'll provide this]
3. Extract the ZIP file on your computer
4. Drag and drop ALL files into the GitHub upload area
5. Click **"Commit changes"**

### Option B: Git Command Line

```bash
# Clone the repository
git clone https://github.com/levantarconsults-256/levantar-consults-website.git
cd levantar-consults-website

# Copy all website files here
# Then commit and push
git add .
git commit -m "Initial website upload"
git push origin main
```

---

## Step 3: Connect to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up with your GitHub account
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **GitHub** as your Git provider
4. Authorize Netlify to access your GitHub account
5. Find and select your repository: **levantar-consults-website**
6. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click **Deploy site**

Netlify will automatically:
- Build your website
- Deploy it to a temporary URL (e.g., `levantar-consults-123.netlify.app`)
- Set up continuous deployment (auto-update when you push to GitHub)

---

## Step 4: Add Custom Domain

### In Netlify:

1. Go to your site's dashboard
2. Click **Domain settings**
3. Click **Add custom domain**
4. Enter: `levantarconsults.com`
5. Click **Verify**

### In Namecheap (DNS Settings):

Go to your Namecheap dashboard → Domain List → Manage → Advanced DNS

Delete any existing records and add:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 75.2.60.5 | Automatic |
| A Record | @ | 99.83.231.61 | Automatic |
| CNAME | www | [your-netlify-site].netlify.app | Automatic |

**Note**: Replace `[your-netlify-site]` with your actual Netlify subdomain

Click **Save All Changes**

---

## Step 5: Enable HTTPS (SSL)

Netlify automatically provides free SSL certificates:

1. In Netlify, go to **Domain settings**
2. Under HTTPS, click **Verify DNS configuration**
3. Once verified, Netlify will automatically issue an SSL certificate
4. Enable **"Force HTTPS"** (redirects HTTP to HTTPS)

---

## Verification Checklist

| Check | How to Verify |
|-------|---------------|
| ✅ Site loads | Visit https://levantarconsults.com |
| ✅ HTTPS works | Check for lock icon in browser |
| ✅ www works | Visit https://www.levantarconsults.com |
| ✅ Contact form works | Submit a test message |

---

## Troubleshooting

### DNS Not Propagating?
- Wait 15 minutes to 24 hours
- Check at [whatsmydns.net](https://whatsmydns.net)

### Build Fails on Netlify?
- Check the build logs in Netlify dashboard
- Ensure Node.js version is set to 18+ in site settings

### Domain Not Working?
- Verify DNS records are correct
- Check Netlify domain settings for errors
- Clear browser cache

---

## Support Contacts

- **Netlify Support**: [netlify.com/support](https://netlify.com/support)
- **Namecheap Support**: [namecheap.com/support](https://namecheap.com/support)
- **GitHub Docs**: [docs.github.com](https://docs.github.com)

---

## Estimated Costs

| Service | Cost |
|---------|------|
| Domain (Namecheap) | ~$12/year |
| Netlify (Free tier) | $0 |
| GitHub (Free) | $0 |
| **Total** | **~$12/year** |

---

## Next Steps After Setup

1. ✅ Test all links and forms
2. ✅ Set up Google Analytics (optional)
3. ✅ Create a business email (e.g., info@levantarconsults.com)
4. ✅ Add site to Google Search Console
5. ✅ Share your new website!

---

**Questions?** Reply with any issues and I'll help you troubleshoot!
