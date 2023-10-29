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

export default function Game({ seconds, setSeconds, timerActive, setTimerActive }) {

    const [dropdownShow, setDropdownShow] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 })

    const handleCharacterClick = (event) => {
        //pageX returns x coord in pixels
        let clickXCoord = event.pageX;
        //pageY returns the y coord in pixels
        let clickYCoord = event.pageY;
        setDropdownPosition({ x: clickXCoord, y: clickYCoord });
        setDropdownShow(!dropdownShow);
        console.log(clickXCoord);
        console.log(clickYCoord);
        console.log(dropdownPosition);
    }

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
                    <img id="character-image" className="img-fluid" src={amumu} alt="Amumu"></img>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} xl={3} xxl={1} id="game-image" className="p-3">
                    <img id="character-image" className="img-fluid" src={lulu} alt="Lulu"></img>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} xl={3} xxl={1} id="game-image" className="p-3">
                    <img id="character-image" className="img-fluid" src={fizz} alt="Fizz"></img>
                </Col>
                <Col xs={12} sm={6} md={3} lg={3} xl={3} xxl={1} id="game-image" className="p-3">
                    <img id="character-image" className="img-fluid" src={rammus} alt="Rammus"></img>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={5} id="home-button-container">
                    <Link to="/StartPage2">
                        <Button onClick={toggle}id="start-page-button" variant="success">Return Home</Button>{' '}
                    </Link>
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
        </Row>
    )
}