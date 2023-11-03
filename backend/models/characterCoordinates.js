const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterCoordinatesSchema = new Schema({
    characterName: { type: String, required: true },
    x: { type: Number, maxLength: 4 },
    y: { type: Number, maxLength: 4 },
})

module.exports = mongoose.model("CharacterCoordinates", CharacterCoordinatesSchema);