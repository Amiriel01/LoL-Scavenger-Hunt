const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterCoordinatesSchema = new Schema({
    characterName: { type: String, required: true },
    minX: { type: Number, maxLength: 4 },
    maxX: { type: Number, maxLength: 4 },
    minY: { type: Number, maxLength: 4 },
    maxY: { type: Number, maxLength: 4 },
    x: { type: Number, maxLength: 4 },
    y: { type: Number, maxLength: 4 },
})

module.exports = mongoose.model("CharacterCoordinates", CharacterCoordinatesSchema);