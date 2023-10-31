const CharacterCoordinates = require("../models/characterCoordinates");
const asyncHandler = require("express-async-handler");
const Leaderboard = require("../models/leaderboard");
const { body, validationResult } = require("express-validator");

exports.leaderboard_details = asyncHandler(async (req, res, next) => {
    const leaderboardDetail = await Leaderboard.find().exec()

    res.json(leaderboardDetail)
});

exports.leaderboard_item_create = [
    body("name", "Name cannot be blank")
        .trim()
        .isLength({ min: 1 })
        .isLength({ max: 20 })
        .escape(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const leaderboard_item = new Leaderboard({
            name: req.body.name,
        });
        
        if (!errors.isEmpty()) {
            errors.array()
            res.json(leaderboard_item)
            return;
        } else {
            res.json(await leaderboard_item.save())
        }
    })
]