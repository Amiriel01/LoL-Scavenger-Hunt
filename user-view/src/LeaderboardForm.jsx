import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function LeaderboardForm({ seconds }) {
    const leaderboardEntryInitialValues = {
        nameEntry: "",
        timeEntry: 0,
    };

    const [leaderboardEntry, setLeaderboardEntry] = useState(leaderboardEntryInitialValues);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setLeaderboardEntry({
            ...leaderboardEntry,
            [name]: value,
        });

    }

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const leaderboardEntryData = {
            name: leaderboardEntry.name,
            time: seconds,
        }
        setLeaderboardEntry(leaderboardEntryInitialValues)

        axios.post("http://localhost:3000/routers/leaderboard", leaderboardEntryData)

        navigate("/Leaderboard");
    }

    return (
        <>
            <div id="leaderboard-form-container">
                <h1 id="leaderboard-congrats">
                    CONGRATULATIONS 
                </h1>
                <h2 id="leaderboard-time">
                    You completed the challenge in {seconds} seconds!
                </h2>
                <h3 id="leaderboard-instructions">
                    Add your name to the leaderboard.
                </h3>
                <form
                    id="leaderboard-form"
                    onSubmit={handleSubmit}>
                    <input id="leaderboard-form-input"
                        type="text"
                        name="name"
                        placeholder="Enter Player Name"
                        value={leaderboardEntry.name}
                        onChange={handleChange}
                    />
                    <button id="leaderboard-button" type="submit">Add to Leaderboard</button>
                </form>
            </div>
        </>
    )
}