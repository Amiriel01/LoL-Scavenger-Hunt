import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import amumu from "./images/amumu.png";
import lulu from "./images/lulu.png";
import fizz from "./images/fizz.png";
import rammus from "./images/rammus.png";
import { Link } from "react-router-dom";


export default function StartPage({ seconds, setSeconds, setTimerActive, timerActive }) {

    function toggle() {
        setTimerActive(!timerActive);
    }

    return (
        <Row id="start-page-background-image">
            <Row>
                <Col id="start-page-title1">
                    LEAGUE OF LEGENDS
                </Col>
            </Row>
            <Row>
                <Col id="start-page-title2">
                    Scavenger Hunt
                </Col>
            </Row>
            <Row>
                <Col >
                    <div id="start-page-directions">
                        <Row>
                            <Col>
                                Find the following characters in the image to complete the scavenger hunt. 
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={6} md={3}>
                                <img id="character-image" className="img-fluid" src={amumu} alt="Amumu"></img>
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <img id="character-image" className="img-fluid" src={lulu} alt="Lulu"></img>
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <img id="character-image" className="img-fluid" src={fizz} alt="Fizz"></img>
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <img id="character-image" className="img-fluid" src={rammus} alt="Rammus"></img>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div id="start-page-buttons-container">
                        <Row>
                            <Col>
                                <Link to="/Game">
                                    <Button onClick={toggle}id="start-page-button" variant="success">Play Game</Button>{' '}
                                </Link>
                            </Col>
                            <Col>
                                <Link to="/Leaderboard">
                                    <Button id="start-page-button" variant="success">Leaderboard</Button>{' '}
                                </Link>
                            </Col>
                        </Row >
                    </div>
                </Col>
            </Row>
        </Row>

    );
}




