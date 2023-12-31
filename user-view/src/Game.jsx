import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import amumu from "./images/amumu.png";
import lulu from "./images/lulu.png";
import fizz from "./images/fizz.png";
import rammus from "./images/rammus.png";
import lolbackground from "./images/lolbackground.png"
import { Link } from "react-router-dom";
import App from "./App";
import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import LeaderboardForm from "./LeaderboardForm";
import axios from "axios";

export default function Game({ seconds, setSeconds, timerActive, setTimerActive }) {

    const [dropdownShow, setDropdownShow] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
    // const [leaderboardShow, setLeaderboardShow] = useState(false);
    const [amumuFound, setAmumuFound] = useState(false);
    const [luluFound, setLuluFound] = useState(false);
    const [fizzFound, setFizzFound] = useState(false);
    const [rammusFound, setRammusFound] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const handleCharacterClick = (event, characterName) => {

        let clickXCoord = event.pageX;
        let clickYCoord = event.pageY;
        let allCoordinates = document.getElementById("gameboard-image").getBoundingClientRect()
        let imageWidth = allCoordinates.width;
        let imageHeight = allCoordinates.height;

        console.log(document.getElementById("gameboard-image").getBoundingClientRect())
        console.log(imageWidth)
        console.log(imageHeight)
        console.log(dropdownPosition.x - allCoordinates.width);
        console.log(dropdownPosition.y - allCoordinates.height)
        setDropdownPosition({ x: clickXCoord, y: clickYCoord });
        setDropdownShow(!dropdownShow);

        const characterCoordinateData = {
            characterName: characterName,
            x: dropdownPosition.x - allCoordinates.x,
            y: dropdownPosition.y - allCoordinates.y,
            imageWidth: allCoordinates.width,
            imageHeight: allCoordinates.height,
        }


        if (!characterName) return

        axios.post("http://localhost:3000/routers/characterCoordinates", characterCoordinateData).then((response) => {
            console.log(response.status, response.data)
            console.log(characterName)
            if (characterName === "Amumu" && response.data === true) {
                setAmumuFound(true);
            } else if (characterName === "Lulu" && response.data === true) {
                setLuluFound(true);
            } else if (characterName === "Fizz" && response.data === true) {
                setFizzFound(true);
            } else if (characterName === "Rammus" && response.data === true) {
                setRammusFound(true);
            } else {
                return
            }
        })
    }

    function isGameOver() {
        if ((amumuFound === true) && (luluFound === true) && (fizzFound === true) && (rammusFound === true)) {
            setGameOver(true);
            setTimerActive(false);
            setDropdownShow(false);
            console.log("Game is Over")
        } else {
            return
        }
    }

    useEffect(() => {
        isGameOver();
    }, [amumuFound, fizzFound, luluFound, rammusFound])

    useEffect(() => {
        let interval = null;
        if (timerActive) {
            //setInterval repeatedly executes the function on a set time delay//
            interval = setInterval(() => {
                setSeconds(seconds + 1);
                clearInterval(interval);
            }, 1000)
        } else if (!timerActive && seconds !== 0) {
            //clearInterval cancels the repeated setInterval call//
            clearInterval(interval);
        }
    }, [timerActive, seconds]);

    function toggle() {
        setTimerActive(!timerActive);
    }

    return (
        <Row>
            <Row id="game-header">
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={1} id="game-find">
                    Find:
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} xl={3} xxl={1} id="game-image" className="p-3">
                    <div id="character-name-container">
                        <img id="character-image" className="img-fluid" src={amumu} alt="Amumu"></img>
                        <p id="character-name">
                            Amumu
                        </p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} xl={3} xxl={1} id="game-image" className="p-3">
                    <div id="character-name-container">
                        <img id="character-image" className="img-fluid" src={lulu} alt="Lulu"></img>
                        <p id="character-name">
                            Lulu
                        </p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} xl={3} xxl={1} id="game-image" className="p-3">
                    <div id="character-name-container">
                        <img id="character-image" className="img-fluid" src={fizz} alt="Fizz"></img>
                        <p id="character-name">
                            Fizz
                        </p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} xl={3} xxl={1} id="game-image" className="p-3">
                    <div id="character-name-container">
                        <img id="character-image" className="img-fluid" src={rammus} alt="Rammus"></img>
                        <p id="character-name">
                            Rammus
                        </p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={5} id="home-button-container">
                    <div hidden={gameOver === true}>
                        <Link to="/StartPage2">
                            <Button onClick={toggle} id="start-page-button" variant="success">Return Home</Button>{' '}
                        </Link>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={2} id="game-timer">
                    {`Timer: ${seconds}s`}
                </Col>
            </Row>
            <div hidden={!dropdownShow} id="show" style={{
                left: `${dropdownPosition.x - 25}px`,
                top: `${dropdownPosition.y - 25}px`,
            }}>
                <div hidden={!dropdownShow}>
                    {dropdownShow && (
                        <Dropdown onSelect={handleCharacterClick} />
                    )}
                </div>
            </div>
            <Row id="gameboard-image-row">
                <Col>
                    <img onClick={handleCharacterClick} id="gameboard-image" className="img-fluid" src={lolbackground} alt="Gameboard Image" />
                </Col>
            </Row>
            <div hidden={!gameOver} id="leaderboard-show">
                <LeaderboardForm
                    seconds={seconds}
                />
            </div>
        </Row>
    )
}