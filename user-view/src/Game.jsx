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

export default function Game({seconds}) {
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
                        <Button id="start-page-button" variant="success">Return Home</Button>{' '}
                    </Link>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={2} id="game-timer">
                   {`Timer: ${seconds}`}
                </Col>
            </Row>
            <Row id="gameboard-image-row">
                <Col >
                    <img id="gameboard-image" className="img-fluid" src={lolbackground} alt="Gameboard Image" />
                </Col>
            </Row>
        </Row>
    )
}