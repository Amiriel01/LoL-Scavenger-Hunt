import React from "react";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/esm/Row";

export default function Timer() {
    // const [seconds, setSectonds] = useState(0);
    // const [timerActive, setTimerActive] = useState(false);

    function toggle() {
        setTimerActive(!timerActive);
    }

    function reset() {
        setSectonds(0);
        setTimerActive(!timerActive);
    }

    useEffect(() => {
        let interval = null;
        if (timerActive) {
            //setInterval repeatedly executes the function on a set time delay//
            interval = setInterval(() => {
                setSectonds(seconds => seconds + 1);
            }, 1000)
        } else if (!timerActive && seconds !== 0) {
            //clearInterval cancels the repeated setInterval call//
            clearInterval(interval);
        }
    }, [timerActive, seconds]);

    return (
        <Row>
            <Row>
                <Col>
                    Find Amumu, Lulu, Fizz, and Rammus as quickly as possible! Click on the picture to activate the dropdown menu and select the character you have found. Find all four characters to complete the challenge.
                </Col>
                <Col>
                    <Button id="start-page-button" variant="success" onClick={toggle} >Start Game</Button>{' '}
                </Col>
            </Row>
        </Row>
    )
}