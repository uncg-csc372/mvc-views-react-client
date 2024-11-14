import axios from 'axios';

const GAMES_API_BASE_URL = "http://localhost:3000/games";

class GamesService {
  getGames() {
    return axios.get(GAMES_API_BASE_URL + "/all");
  }

  createGame(game) {
    console.log(game);
    return axios.post(GAMES_API_BASE_URL + "/new", game);
  }

  getGameById(id) {
    return axios.get(`${GAMES_API_BASE_URL}/${id}`);
  }

  getPlatformGames(gamePlatform) {
    const params = {
      attribute: 'platform',
      value: gamePlatform
    };
    console.log(params);
    return axios.get(GAMES_API_BASE_URL, params);
  }

  deleteGame(id) {
    return axios.delete(`${GAMES_API_BASE_URL}/delete/${id}`);
  }
}

export default new GamesService();