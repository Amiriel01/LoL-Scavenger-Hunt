#! /usr/bin/env node

console.log(
  'This script populates the character coordinates and leaderboard examples'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const CharacterCoordinates = require("./models/characterCoordinates");
const Leaderboard = require("./models/leaderboard");

const characterCoordinates = [];
const leaderboard = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await getCharacterCoordinates();
  await getLeaderboard();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

// Pass the index to the ...Create functions so that, for example,
// category[0] will always be the same category, regardless of the order
// in which the elements of promise.all's argument complete.
async function characterCoordinatesCreate(index, x, y) {
  const characterCoordinates = new CharacterCoordinates({ x: x, y: y });
  await characterCoordinates.save();
  characterCoordinates[index] = characterCoordinates;
  console.log(`Added character coordinates: ${x, y}`);
}

async function leaderboardCreate(name, time) {
  const leaderboardDetail = { 
    name: name, 
    time: time
  };

  const item = new Leaderboard(leaderboardDetail);

  await leaderboard.save();
  leaderboard[index] = leaderboard;
  console.log(`Added leaderboard item: ${leaderboard}`);
}

async function getCharacterCoordinates() {
  console.log("Adding character coordinates");
  await Promise.all([
    characterCoordinatesCreate(0, 234, 682),
    characterCoordinatesCreate(1, 1418, 670),
    characterCoordinatesCreate(2, 1400, 606),
    characterCoordinatesCreate(3, 698, 553),
  ]);
}

async function getLeaderboard() {
  console.log("Adding Leaderboard Examples");
  await Promise.all([
    leaderboardCreate(
      "Player1",
      48
    ),
    leaderboardCreate(
      "Player2",
      187
    ),
    leaderboardCreate(
      "Player3",
      2450
    ),
    leaderboardCreate(
      "Player4",
      48000
    ),
  ]);
}

