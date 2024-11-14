import React, { useState, useEffect } from 'react';
import GamesService from '../GamesService';
import { Link, useSearchParams } from 'react-router-dom';

const GamesListComponent = () => {
  const [games, setGames] = useState([]);

  const [searchParams] = useSearchParams();

  // const attribute = searchParams.get('attribute');
  // const value = searchParams.get('value');

  useEffect(() => {

    GamesService.getGames().then((res) => {
      setGames(res.data);
      document.title = 'Games List';
    });



  }, []);

  return (
    <div>
      <h2 className="text-center">Games List</h2>
      <div className="row">
        <Link to="/add-game" className="btn btn-outline-primary">Add Game</Link>
      </div>
      <main className="items-container">
        {games.map(game => (
          <article className="item" key={game.id}>
            <div className="text">
              <h3>
                {game.id}
              </h3>
              <p>{game.name}</p>
              <p>{game.platform}</p>
              <p>{game.release_year}</p>
              <p>{game.genre}</p>
              <p><Link className="btn btn-outline-info" to={`/${game.id}`}>View</Link></p>
              <button className="btn btn-danger" onClick={() => GamesService.deleteGame(game.id)
                .then(() => setGames(games.filter(g => g.id !== game.id)))}>Delete</button>

            </div>
          </article>
        ))}
      </main>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Game ID</th>
              <th>Name</th>
              <th>Platform</th>
              <th>Release Year</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {games.map(game => (
              <tr key={game.id}>
                <td><Link to={`/${game.id}`}>{game.id}</Link></td>
                <td>{game.name}</td>
                <td>{game.platform}</td>
                <td>{game.release_year}</td>
                <td>{game.rating}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => GamesService.deleteGame(game.id)
                    .then(() => setGames(games.filter(g => g.id !== game.id)))}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GamesListComponent;