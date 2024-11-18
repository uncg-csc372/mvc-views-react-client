import React, { useState, useEffect } from 'react';
import GamesService from '../GamesService';
import { Link, useNavigate, useParams } from 'react-router-dom';


const GameDetailsComponent = () => {
  const { id } = useParams();
  const [game, setGame] = useState([]);

  useEffect(() => {
    document.title = 'Game Details';
    GamesService.getGameById(id).then((res) => {
      setGame(res.data);
    });
  }, [id]);

  return (
    <div>
      <h2 className="text-center">Game Details</h2>
      <Link to="/add-game" className="btn btn-outline-primary">Add Game</Link>
      <div className="card text-center">
        <div className="card-header">{game.id}  </div>
        <div className="card-body">
          <h5 className="card-title">{game.name}</h5>
          <p className="card-text" >{game.platform}</p>
          <p className="card-text" >{game.genre}</p>
          <p className="card-text" >{game.publisher}</p>
          <p className="card-text" >{game.developer}</p>
          <p className="card-text" >{game.release_year}</p>
          <p className="card-text" >{game.rating}</p>
        </div>
        <div className="card-footer text-body-secondary">
          <Link to="/games" className="card-link">Games List</Link>
        </div>
      </div>
    </div>
  );
};



export default GameDetailsComponent;
