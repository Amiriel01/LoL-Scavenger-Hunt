import './App.css'
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Game from './Game';
import HiddenForm from "./HiddenForm";
import Leaderboard from "./Leaderboard";
import StartPage from "./StartPage";
import StartPage2 from "./StartPage2";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './Timer';
import { useState, useEffect } from "react";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  return (
    <>
      <Container fluid id="start-page-text-container">
        <Routes>
          {/* <Route path="*" element={<StartPage />} /> */}
          <Route path="*" element={<StartPage2 />} />
          <Route path="/Game" element={<Game 
          seconds={seconds}
          // setSeconds={setSeconds}
          // timerActive={timerActive}
          // setTimerActive={setTimerActive}
          />} />
          <Route path="/HiddenForm" element={<HiddenForm />} />
          <Route path="/Leaderboard" element={<Leaderboard
          />} />
        </Routes>
      </Container>
    </>
  )
}
