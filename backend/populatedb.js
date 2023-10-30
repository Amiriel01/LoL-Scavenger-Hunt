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

async function characterCoordinatesCreate(charName, x, y) {
  const characterCoordinates = new CharacterCoordinates({ charName, x: x, y: y });
  await characterCoordinates.save();
  console.log(`Added character coordinates: ${x, y}`);
}

async function leaderboardCreate(name, time) {
  const leaderboardDetail = { 
    name: name, 
    time: time
  };

  const leaderboard = new Leaderboard(leaderboardDetail);

  await leaderboard.save();
  console.log(`Added leaderboard item: ${leaderboard}`);
}

async function getCharacterCoordinates() {
  console.log("Adding character coordinates");
  await Promise.all([
    characterCoordinatesCreate("Amumu", 234, 682),
    characterCoordinatesCreate("Lulu", 1418, 670),
    characterCoordinatesCreate("Fizz", 1400, 606),
    characterCoordinatesCreate("Rammus", 698, 553),
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

