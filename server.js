// SIT725 Task 3.2P - Plant Care Guide
// Express server + simple GET REST endpoint consumed by the Materialize client

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, images) from /public
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Plant data (our own domain data instead of the kitten demo)
const plantList = [
  {
    name: "Snake Plant",
    image: "images/snake-plant.svg",
    light: "Low to bright indirect",
    water: "Every 2-3 weeks",
    description: "Very hardy and great for beginners. Tolerates low light and irregular watering."
  },
  {
    name: "Monstera",
    image: "images/monstera.svg",
    light: "Bright indirect",
    water: "Weekly",
    description: "Famous for its split leaves. Loves humidity and a moss pole to climb."
  },
  {
    name: "Aloe Vera",
    image: "images/aloe-vera.svg",
    light: "Bright direct",
    water: "Every 3 weeks",
    description: "A succulent with soothing gel inside its leaves. Let soil dry out fully between watering."
  },
  {
    name: "Peace Lily",
    image: "images/peace-lily.svg",
    light: "Medium indirect",
    water: "Weekly",
    description: "Produces white blooms and droops to tell you when it is thirsty."
  }
];

// GET endpoint - returns all plants
app.get("/api/plants", (req, res) => {
  res.json({ statusCode: 200, data: plantList, message: "Success" });
});

app.listen(port, () => {
  console.log("Plant Care Guide running at http://localhost:" + port);
});
