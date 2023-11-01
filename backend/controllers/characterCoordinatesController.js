const CharacterCoordinates = require("../models/characterCoordinates");
const asyncHandler = require("express-async-handler");
const Leaderboard = require("../models/leaderboard");
const { body, validationResult } = require("express-validator");
const characterCoordinates = require("../models/characterCoordinates");

exports.character_coordinates = asyncHandler(async (req, res, next) => {
    console.log(req.body)
    const characterCoordinates = await CharacterCoordinates.find({characterName: req.body.characterName}).exec();

    let characterName = req.body.characterName;
    let x = req.body.x;
    let y = req.body.y;

    console.log(req.body.characterName);
    console.log(req.body.x);
    console.log(req.body.y);

    if ((characterName === "Amumu") && (x > 184 && x < 284) && (632 < y < 732)) {
        console.log(true)
        res.json(true)
    } else if ((characterName === "Lulu") && (x > 1368 && x < 1468) && (y > 620 && y < 720)) {
        console.log(true)
        res.json(true)
    } else if ((characterName === "Fizz") && (x > 1350 && x < 1450) && (y > 556 && y < 656)) {
        console.log(true)
        res.json(true)
    } else if ((characterName === "Rammus") && (x > 648 && x < 748) && (y > 503 && y < 603)) {
        console.log(true)
        res.json(true)
    } else {
        console.log(false)
        res.json(false)
    }
    // let minX = characterCoordinates.minX;
    // let maxX = characterCoordinates.x+50;
    // let minY = characterCoordinates.y-50;
    // let maxY = characterCoordinates.y+50;
    // let x = req.body.x;
    // let y = req.body.y;

    // console.log(characterCoordinates)
    // console.log(req.body.characterName)
    // console.log(minX)
    // console.log(maxX)
    // console.log(minY)
    // console.log(maxY)
    // console.log(req.body.x)
    // console.log(req.body.y)

    // if ((x > minX && x < maxX) && (y > minY && y < maxY)) {
    //     res.json(true)
    // } else {
    //     res.json(false)
    // }
})