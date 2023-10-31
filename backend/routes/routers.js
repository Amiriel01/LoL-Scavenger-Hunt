const express = require("express");
const router = express.Router();

//require controller modules//
const character_coordinates_controller = require("../controllers/characterCoordinatesController");
const leaderboard_controller = require("../controllers/leaderboardController");
const leaderboard = require("../models/leaderboard");
const { leaderboard_details } = require("../controllers/leaderboardController");

router.post("/characterCoordinates", character_coordinates_controller. character_coordinates);

router.get("/leaderboard", leaderboard_controller. leaderboard_details);

router. post("/leaderboard", leaderboard_controller. leaderboard_item_create);

module.exports = router;