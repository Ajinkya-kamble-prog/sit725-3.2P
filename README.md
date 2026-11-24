# SIT725 Task 3.2P – Getting Graphical (Plant Care Guide)

A small Express web app with a Materialize UI. The page calls a GET REST endpoint (`/api/plants`) and shows each plant as a card.

## Structure
```
sit725-3.2P/
├── server.js            # Express server + GET /api/plants
├── package.json
└── public/
    ├── index.html       # Materialize layout (navbar, cards, modal, footer)
    ├── css/styles.css
    ├── js/scripts.js    # Fetches /api/plants and builds the cards
    └── images/          # Plant images
```

## Run
```bash
npm install
npm start
```
Open http://localhost:3000. The API is at http://localhost:3000/api/plants.
