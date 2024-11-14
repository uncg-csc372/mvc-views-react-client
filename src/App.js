import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import GamesListComponent from './components/GamesListComponent';
import GameDetailsComponent from './components/GameDetailsComponent';
import AddGameComponent from './components/AddGameComponent';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
    <div className="container">
        <Routes>
            <Route path="/" element={<GamesListComponent />} />
            <Route path="/games" element={<GamesListComponent />} />
            <Route path="/:id" element={<GameDetailsComponent />} />
            <Route path="/add-game" element={<AddGameComponent />} />
        </Routes>
    </div>
</Router>
);
}

export default App;
