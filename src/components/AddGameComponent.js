import React, { useState } from 'react';
import GamesService from '../GamesService';
import { useNavigate } from 'react-router-dom';

const AddGameComponent = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [platform, setPlatform] = useState('');
    const [publisher, setPublisher] = useState('');
    const [genre, setGenre] = useState('');
    const [release_year, setReleaseYear] = useState('');
    const [rating, setRating] = useState('');
    const [developer, setDeveloper] = useState('');
    const navigate = useNavigate();

    const saveGame = (e) => {
        e.preventDefault();
        const game = { id, name, platform, publisher, genre,  release_year, rating, developer};
        GamesService.createGame(game).then(() => {
            navigate('/games');
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Game</h3>
                        <div className="card-body">
                            <form>
                            <div className="form-group">
                                    <label> Game ID: </label>
                                    <input  type="number" placeholder="ID" name="id" className="form-control"
                                        value={id} onChange={(e) => setId(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Game Name: </label>
                                    <input placeholder="Name" name="name" className="form-control"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Platform: </label>
                                    <input placeholder="Platform" name="platform" className="form-control"
                                        value={platform} onChange={(e) => setPlatform(e.target.value)} />
                                </div>
                                <div className="form-group">
                                     <label> Publisher: </label>
                                     <input placeholder="Publisher" name="publisher" className="form-control"
                                     value={publisher} onChange={(e) => setPublisher(e.target.value)} />
                                </div>
                                <div className="form-group">
                                     <label> Genre: </label>
                                     <input placeholder="Genre" name="genre" className="form-control"
                                     value={genre} onChange={(e) => setGenre(e.target.value)} />
                                </div>
                                <div className="form-group">
                                     <label> Release Year: </label>
                                     <input  type="number" placeholder="Release Year" name="release_year" className="form-control"
                                     value={release_year} onChange={(e) => setReleaseYear(e.target.value)} />
                                </div>
                                <div className="form-group">
                                     <label> Developer: </label>
                                     <input placeholder="Developer" name="developer" className="form-control"
                                     value={developer} onChange={(e) => setDeveloper(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Rating: </label>
                                    <input placeholder="Rating" name="rating" className="form-control"
                                        value={rating} onChange={(e) => setRating(e.target.value)} />
                                </div>
                                <button className="btn btn-success" onClick={saveGame}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddGameComponent;