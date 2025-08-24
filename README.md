📱 Social Hub

A simple social media hub built with React + Tailwind CSS, where users can switch between platforms (X, Facebook, Instagram, LinkedIn), create posts, and interact with them.

This setup uses Tailwind CLI for a production-ready build (instead of CDN).

🚀 Features

🌐 Switch between multiple social platforms.

📝 Create and share posts per platform.

💬 Like, Comment, and Share buttons for interaction.

🎨 Modern UI with glassmorphism sidebar, sticky header, and animated post cards.

📱 Fully responsive (sidebar at bottom on mobile, side on desktop).

📂 Project Structure
social-hub/
│── index.html
│── tailwind.config.js
│── postcss.config.js
│── package.json
│── src/
│   ├── index.css   # Tailwind styles + custom animations
│   └── app.js      # React app
│── dist/
│   └── output.css  # Generated Tailwind CSS (built)

⚡ Installation & Setup
1. Install dependencies
npm install

2. Build CSS (watch mode)
npm run watch


This generates dist/output.css automatically whenever you save changes.

3. Open the app

Just open index.html in your browser:

open index.html


(or double-click it)

🛠 Development Notes

The app uses React (via CDN) with Babel for JSX.

For production, you may want to migrate to Vite or Create React App for better dev experience.

Tailwind purges unused classes during build → lightweight CSS.

📸 Preview

Sidebar changes layout based on screen size.

Posts are saved per platform.

Clean, modern feed layout with animations.

🔮 Next Steps (Ideas)

Add avatars & timestamps to posts.

Save posts to localStorage.

Implement dark mode toggle.

Switch to Vite for hot-reloading JSX without Babel CDN.
