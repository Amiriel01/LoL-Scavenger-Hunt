import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import lolbackground from "./images/lolbackground.png";
import amumu from "./images/amumu.png";
import lulu from "./images/lulu.png";
import fizz from "./images/fizz.png";
import rammus from "./images/rammus.png";
import { Link } from "react-router-dom";

export default function StartPage() {

    return (
        <div id="start-page-background-image">
            <Container id="start-page-text-container">
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
                    <Col id="start-page-directions">
                        Find the following characters in the image to complete the scavenger hunt.
                        <Row>
                            <Col xs={12} sm={6} m={3}>
                                <img id="character-image" className="img-fluid" src={amumu} alt="Amumu"></img>
                            </Col>
                            <Col xs={12} sm={6} m={3}>
                                <img id="character-image" className="img-fluid" src={lulu} alt="Lulu"></img>
                            </Col>
                            <Col xs={12} sm={6} m={3}>
                                <img id="character-image" className="img-fluid" src={fizz} alt="Fizz"></img>
                            </Col>
                            <Col xs={12} sm={6} m={3}>
                                <img id="character-image" className="img-fluid" src={rammus} alt="Rammus"></img>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row id="start-page-buttons-container">
                    <Col>
                        <Link to="/Game">
                            <Button id="start-page-button" variant="success">Play Game</Button>{' '}
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/Leaderboard">
                            <Button id="start-page-button" variant="success">Leaderboard</Button>{' '}
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
{/* <figure className="position-relative" id="start-page-image">
                <img id="start-page-image" className="img-fluid" src={lolbackground} alt="decorative image" />
                <figcaption id="start-page-title1">
                    LEAGUE OF LEGENDS
                </figcaption>
                <figcaption id="start-page-title2">
                    Scavenger Hunt
                </figcaption>
                <figcaption id="start-page-directions">
                    Find the following characters in the image to complete the scavenger hunt.
                    <div className="character-images">
                        <img id="character-image" className="img-fluid" src={amumu} alt="Amumu"></img>
                        <img id="character-image" className="img-fluid" src={lulu} alt="Lulu"></img>
                        <img id="character-image" className="img-fluid" src={fizz} alt="Fizz"></img>
                        <img id="character-image" className="img-fluid" src={rammus} alt="Rammus"></img>
                    </div>
                </figcaption>
            </figure> */}




