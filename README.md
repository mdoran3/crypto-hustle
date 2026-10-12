# Crypto Hustle ₿🪙

A React app that lists the top 30 cryptocurrencies by market cap, with live prices from the [CoinGecko API](https://www.coingecko.com/en/api). Search the list by coin name or symbol.

## Features

- Fetches the top 30 coins by market cap (USD) from CoinGecko
- Shows each coin's icon, name and current price
- Search box that filters by coin name or symbol

## Tech Stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/)
- [CoinGecko API](https://www.coingecko.com/en/api)

## Screenshots

<!-- Add screenshots to a screenshots/ folder and reference them below. -->

| Coin list | Search |
| --- | --- |
| ![Coin list](screenshots/coin-list.png) | ![Search results](screenshots/search.png) |

## Video Demo

<!-- Replace the link below with your video (YouTube, Loom, or a GIF in the repo). -->

[Watch the demo](https://your-video-link-here)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm
- A free CoinGecko Demo API key ([get one here](https://www.coingecko.com/en/api))

### Installation

```bash
git clone https://github.com/mdoran3/crypto-hustle.git
cd crypto-hustle
npm install
```

### Environment variables

Create a `.env.local` file in the project root (it is git-ignored):

```
VITE_APP_API_KEY=your_coingecko_demo_api_key
```

Restart the dev server after changing it. Vite only reads env files at startup.

### Run

```bash
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Note on the API key

Vite inlines `VITE_*` variables into the built JavaScript, so the key is visible in the browser once deployed. This is fine for a CoinGecko demo key, but don't use this pattern for sensitive keys.
