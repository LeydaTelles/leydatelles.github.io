# How to Run Your Portfolio Locally

## First Time Setup

1. **Install dependencies** (if you haven't already):
   ```bash
   cd /Users/leydatelles/profio1997.github.io
   bundle install
   ```

2. **Start the Jekyll server**:
   ```bash
   bundle exec jekyll serve
   ```

3. **Open your browser** and go to:
   ```
   http://localhost:4000
   ```

You'll see your website! Keep this terminal window open while you work.

---

## Making Changes

### Changes to MOST files (about.md, projects, etc.):
- Just **save the file**
- **Refresh your browser** (press F5 or Cmd+R)
- Changes appear immediately! ✨

### Changes to `_config.yml`:
- **Save the file**
- **Stop the server** (see below)
- **Start it again** (see below)
- **Refresh your browser**

---

## Stopping the Server

**In the terminal window where Jekyll is running:**

1. Press: **`Ctrl + C`** (hold Control, press C)
   - This stops the server

---

## Starting/Restarting the Server

**In your terminal, run:**
```bash
cd /Users/leydatelles/profio1997.github.io
bundle exec jekyll serve
```

Then open: `http://localhost:4000`

---

## Quick Reference

| What You Changed | What To Do |
|-----------------|------------|
| Any file EXCEPT `_config.yml` | Just refresh browser |
| `_config.yml` | Stop server (Ctrl+C) → Start server → Refresh browser |

---

## Troubleshooting

**If you see an error:**
- Make sure you're in the right folder: `/Users/leydatelles/profio1997.github.io`
- Try running `bundle install` again
- Check the error message - it usually tells you what's wrong

**If port 4000 is already in use:**
- Jekyll might already be running in another terminal
- Or run: `bundle exec jekyll serve --port 4001` to use a different port


