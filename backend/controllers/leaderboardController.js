const CharacterCoordinates = require("../models/characterCoordinates");
const asyncHandler = require ("express-async-handler");
const Leaderboard = require("../models/leaderboard");
const { body, validationResult } = require("express-validator");