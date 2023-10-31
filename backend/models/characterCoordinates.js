const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterCoordinatesSchema = new Schema({
    characterName: { type: String, required: true },
    x: { type: Number, require: true, maxLength: 4 },
    y: { type: Number, require: true, maxLength: 4 },
})

// CharacterCoordinatesSchema.virtual("url").get(function() {
//     return `/routers/characterCoordinates/${this.id}`;
// })

module.exports = mongoose.model("CharacterCoordinates", CharacterCoordinatesSchema);