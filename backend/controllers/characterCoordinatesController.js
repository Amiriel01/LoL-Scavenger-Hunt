const CharacterCoordinates = require("../models/characterCoordinates");
const asyncHandler = require("express-async-handler");
const Leaderboard = require("../models/leaderboard");
const { body, validationResult } = require("express-validator");
const characterCoordinates = require("../models/characterCoordinates");

exports.character_coordinates = asyncHandler(async (req, res, next) => {
    console.log(req.body)
    const characterCoordinates = await CharacterCoordinates.findOne({characterName: req.body.characterName}).exec();
    console.log(characterCoordinates)

    const masterWidth = 1501;
    const masterHeight = 834;
    let characterName = req.body.characterName;
    let x = ((req.body.x/req.body.imageWidth) * masterWidth);
    let y = ((req.body.y/req.body.imageHeight) * masterHeight);

    console.log(x)
    console.log(y)
    console.log(req.body.imageWidth)
    console.log(req.body.imageHeight)

    let boundingBox = 50;
    let minX = characterCoordinates.x-boundingBox;
    let maxX = characterCoordinates.x+boundingBox;
    let minY = characterCoordinates.y-boundingBox;
    let maxY = characterCoordinates.y+boundingBox;

    if ((x > minX && x < maxX) && (y > minY && y < maxY)) {
        res.json(true)
    } else {
        res.json(false)
    }
})