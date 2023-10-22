import './App.css'
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Game from './Game';
import HiddenForm from "./HiddenForm";
import Leaderboard from "./Leaderboard";
import StartPage from "./StartPage";


export default function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="*" element={<StartPage />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/HiddenForm" element={<HiddenForm />} />
          <Route path="/Leaderboard" element={<Leaderboard
          />} />
        </Routes>
      </div>
    </>
  )
}
