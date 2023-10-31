const CharacterCoordinates = require("../models/characterCoordinates");
const asyncHandler = require ("express-async-handler");
const Leaderboard = require("../models/leaderboard");
const { body, validationResult } = require("express-validator");

exports.character_coordinates = asyncHandler(async (req, res, next) => {
    const characterCoordinates = CharacterCoordinates.find({characterName: req.body.characterName}).exec();

    if (x < x + 50 || x > x - 50 && y < y + 50 || y > y - 50) {
        res.json(true)
    } else {
        res.json(false)
    }
})