# KathaLok

**Stories to read, feelings to explore, and a little encouragement along the way.**

KathaLok is a storytelling web app for children. It brings stories, a personal reading library, and small activities around emotions together in one place. Alongside browsing and reading stories, the project explores a more personal kind of storytelling: creating a story around a child's chosen theme, emotion, characters, and age group.

I built KathaLok around a simple idea: a story can be entertaining and still leave someone with something to think about. The goal is to make reading feel welcoming, while giving children room to reflect on kindness, empathy, and how they feel.

## What you can do

- **Explore stories:** browse the story collection and open a story to read.
- **Keep a library:** save favorite stories to a personal collection after signing in.
- **Track completion:** mark stories as completed; the API records reading progress and activity.
- **Create a story:** choose a theme, emotion, age group, character, and length to request an AI-generated story. *At present, this endpoint is restricted to admin accounts.*
- **Reflect after reading:** generated stories can include an emotional-learning takeaway and questions to think about.
- **Pick a Motivation Candy:** reveal a randomly selected positive message.
- **Make it comfortable:** switch between light and dark themes.

Story illustrations are retrieved through Pixabay, with a fallback image if a match cannot be found.

## Built with

| Part | Technologies |
| --- | --- |
| Frontend | React, Vite, React Router, React Bootstrap, CSS |
| API | Node.js, Express |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcryptjs |
| Story generation | OpenRouter API |
| Story illustrations | Pixabay API |
| HTTP requests | Axios |

## Project layout

```text
KathaLok/
├── public/          # Logos, illustrations and other static assets
├── src/             # React pages, components, styles and API client
├── server/          # Main Express API, database models and routes
├── backend/         # Separate lightweight JSON-backed stories API
├── package.json
└── vite.config.js
```

The `server/` directory is the main backend for accounts, favorites, reading progress, story generation, and image lookup. The `backend/` directory contains a simpler stories API; both servers use port 5000 by default, so **do not run them at the same time**.

## Run locally

You'll need Node.js and npm, a MongoDB connection, and API keys for the external services used by the app.

**1. Clone and install the frontend dependencies**

```bash
git clone https://github.com/AdityaPaneru/KathaLok.git
cd KathaLok
npm install
```

**2. Configure the main backend**

Create `server/.env` with your own credentials:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
OPENROUTER_API_KEY=your_openrouter_api_key
AI_MODEL=openrouter/free
PIXABAY_API_KEY=your_pixabay_api_key
```

Keep this file private and make sure it is excluded by `.gitignore`. The AI model is configurable; availability and usage terms depend on OpenRouter.

**3. Start the API**

```bash
cd server
npm install
npm run dev
```

The main API should start at `http://localhost:5000` once MongoDB connects.

**4. Start the frontend in a second terminal**

From the project root:

```bash
npm run dev
```

Open the local address printed by Vite (usually `http://localhost:5173`). The frontend currently expects the API at `http://localhost:5000/api` in `src/api.js`.

## A note on story generation

The story generator asks for age-appropriate writing focused on empathy and emotional understanding. Its requested response also includes a short emotional-learning lesson and reflection questions. Generated content still depends on the external model and should be reviewed before being used with children.

The current generation route requires an authenticated **admin** account. New accounts register as regular users, so signing up alone does not grant story-generation access.

## Where I'd like to take it

There is room to improve the reading experience further: clearer chapter-by-chapter progress, a more polished story-creation flow, and better controls around reviewing generated stories. KathaLok is an evolving project, and these are directions for future work rather than finished features.

## Author

**Aditya Paneru**  
[GitHub](https://github.com/AdityaPaneru)
