const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LeaderboardSchema = new Schema({
    name: { type: String, require: true, maxLength: 20 },
    time: { type: Number, require: true },
})

LeaderboardSchema.virtual("url").get(function() {
    return `/routers/leaderboard`;
})

module.exports = mongoose.model("Leaderboard", LeaderboardSchema);