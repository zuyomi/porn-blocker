# 🔒 Zaius - The Site Blocker Extension

Zaius is a lightweight Chrome extension that blocks access to adult and unwanted websites using a built-in keyword/domain filter.

## 🚀 Features

- ✅ Blocks access to explicit sites
- 🔁 Redirects to a custom block screen
- 📁 Easy to customize with your own list
- 🧠 Works 100% offline, no data tracking

## ⚙️ How to Use

1. Clone or download the repo
2. Open Chrome and go to `chrome://extensions/`
   > or if you have a chorium based browser (example: brave, opera, edge), you use **browser**://extenstions
4. Enable **Developer Mode**
5. Click **Load Unpacked**
6. Select the `Zaius/` folder

Now try visiting a blocked domain like `example.com` — you'll see your block page.

## ✏️ Customizing the Block List

Edit `rules.json` to add or remove domains:
```json
"urlFilter": "suspiciousdomain.com"


