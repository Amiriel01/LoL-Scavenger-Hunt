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

async function characterCoordinatesCreate(characterName, x, y) {
  const characterCoordinates = new CharacterCoordinates({ characterName, x, y });
  await characterCoordinates.save();
  console.log(`Added character coordinates: ${characterName, x, y}`);
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
    characterCoordinatesCreate("Amumu", 231, 659),
    characterCoordinatesCreate("Lulu", 1404, 641),
    characterCoordinatesCreate("Fizz", 1385, 574),
    characterCoordinatesCreate("Rammus", 684, 530),
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

