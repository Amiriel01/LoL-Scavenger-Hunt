const express = require("express");
const router = express.Router();

//require controller modules//
const character_coordinates_controller = require("../controllers/characterCoordinatesController");
const leaderboard_controller = require("../controllers/leaderboardController");

router.post("/characterCoordinates", character_coordinates_controller, character_coordinates)