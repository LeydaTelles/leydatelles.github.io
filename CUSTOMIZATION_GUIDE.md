# Quick Customization Guide

This guide covers the **most common** files you'll need to edit to personalize your portfolio. For complete documentation, see `CUSTOMIZE.md`.

## 🚀 Essential Files to Edit

### 1. **`_config.yml`** - Main Configuration (START HERE!)
This is the most important file. Edit it with any text editor:

- **Lines 5-8**: Your name (title, first_name, last_name)
- **Line 10**: Your description/bio
- **Line 17**: Your website URL (change from `profio1997.github.io` to your own)
- **Line 72**: Google Analytics ID (if you want analytics)
- **Line 85**: Blog name
- **Line 86**: Blog description

**Important**: After editing `_config.yml`, you need to restart the Jekyll server (if running locally) or push changes to GitHub for them to appear.

### 2. **`_data/socials.yml`** - Social Media Links
Add/remove your social media accounts. Uncomment lines and add your usernames:

```yaml
email: your.email@example.com
github_username: yourusername
linkedin_username: yourusername
twitter_username: yourhandle
```

### 3. **`_pages/about.md`** - Your About Page
Edit this file to customize your "About" page content. This is where visitors learn about you.

### 4. **`_data/cv.yml`** or **`assets/json/resume.json`** - Your Resume/CV
- **Option 1**: Edit `_data/cv.yml` (easier, YAML format)
- **Option 2**: Edit `assets/json/resume.json` (JSON Resume format)
- If `resume.json` exists, it will be used; otherwise `cv.yml` is used

### 5. **`_projects/`** - Your Projects
- Each project is a separate `.md` file in this folder
- Copy an existing project file and modify it
- Edit frontmatter (metadata at the top) and content

### 6. **`_posts/`** - Blog Posts
- Create new posts with format: `YYYY-MM-DD-title.md`
- Copy an existing post to use as a template

### 7. **`_news/`** - News/Updates
- Add news items that appear on your About page
- Each news item is a `.md` file

## 📁 File Structure Overview

```
profio1997.github.io/
├── _config.yml          ← START HERE: Main settings
├── _data/               ← Your data files
│   ├── socials.yml      ← Social media links
│   ├── cv.yml           ← Resume data
│   └── repositories.yml ← GitHub repos to showcase
├── _pages/              ← Individual pages
│   └── about.md         ← About page content
├── _projects/           ← Your projects
├── _posts/              ← Blog posts
├── _news/               ← News items
├── _bibliography/       ← Publications (if applicable)
│   └── papers.bib       ← BibTeX format
└── assets/              ← Images, PDFs, etc.
    └── img/             ← Your images go here
```

## 🎨 Changing Colors

Edit `_sass/_themes.scss`:
- Find `--global-theme-color` variable
- Change to your preferred color

Available color names are in `_sass/_variables.scss`.

## 📝 Common Tasks

### Add a New Project
1. Go to `_projects/` folder
2. Copy an existing project `.md` file
3. Rename it (e.g., `my-new-project.md`)
4. Edit the frontmatter and content

### Add a New Blog Post
1. Go to `_posts/` folder
2. Create file: `2024-12-25-my-post-title.md`
3. Copy frontmatter from existing post
4. Write your content

### Change Your Photo
1. Add your photo to `assets/img/`
2. Update the image path in `_pages/about.md` or relevant file

### Remove Sections You Don't Need
Rather than deleting files (which can cause merge conflicts), add them to the `exclude` section in `_config.yml`:

```yaml
exclude:
  - _posts/              # Remove blog
  - _pages/blog.md       # Remove blog page
  - _bibliography/       # Remove publications
```

## 🛠️ How to Test Changes Locally

1. Install dependencies (if not already):
   ```bash
   bundle install
   ```

2. Run Jekyll server:
   ```bash
   bundle exec jekyll serve
   ```

3. Open browser to: `http://localhost:4000`

4. **Important**: Changes to `_config.yml` require restarting the server. All other changes appear when you refresh the page.

## 📚 More Help

- **Full documentation**: See `CUSTOMIZE.md` for detailed instructions
- **FAQ**: See `FAQ.md` for common questions
- **Installation**: See `INSTALL.md` for setup instructions

## 💡 Tips

1. **Always edit on the `main` branch** - The `gh-pages` branch is auto-generated
2. **Use a code editor** - VS Code, Sublime Text, or any text editor works
3. **Commit often** - Make small changes and commit frequently
4. **Test locally first** - Run `bundle exec jekyll serve` to preview changes
5. **Use YAML syntax** - Be careful with indentation in YAML files (use spaces, not tabs)

