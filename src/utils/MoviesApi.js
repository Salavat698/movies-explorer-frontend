
class MovieApi {
  constructor({ address, headers}) {
    this._address = address;
    this._headers = headers;
  }

  _checkServerResponse(item) {
    if(item.ok) {
      return item.json();
    } else {
      return Promise.reject(item.status);
    }
  }

  getMovies() {
    return fetch(`${this._address}`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(res => this._checkServerResponse(res))
  }
}

const movieApi = new MovieApi({
  address: ' https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default movieApi;