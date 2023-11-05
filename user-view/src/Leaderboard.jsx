import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import Col from "react-bootstrap/esm/Col";
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Leaderboard() {

    const { pathname } = useLocation();
    const [allLeaderboardEntries, setAllLeaderboardEntries] = useState([]);

    async function getLeaderboard() {
        await axios.get("http://localhost:3000/routers/leaderboard").then((response) => {
            // console.log(response)
            setAllLeaderboardEntries(response.data);
            // console.log(allLeaderboardEntries)
        })
    }

    useEffect(() => {
        getLeaderboard()
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <Row id="leaderboard-background-image">
                <Row id="leaderboard-page-container">
                    <Row id="leaderboard-header">
                        <Row>
                            <Col>
                                <h1 id="leaderboard-title">
                                    LoL Scavenger Hunt
                                </h1>
                            </Col>
                        </Row>
                        <Row id="leaderboard-button-row">
                            <Col id="leaderboard-button-container">
                                <Link to="/StartPage2">
                                    <Button id="start-page-button" >Return Home</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Row>

                    <div className="all-leaderboard-entries-container">
                        {allLeaderboardEntries.map((entry) => {
                            return <div id="leaderboard-entry-card"
                                key={entry._id} >
                                <Row id="name-time-container">
                                    <Col>
                                        <p>{entry.name}: {entry.time}s</p>
                                    </Col>
                                </Row>
                            </div>
                        })}
                    </div>
                </Row >
            </Row>
        </>
    )
}