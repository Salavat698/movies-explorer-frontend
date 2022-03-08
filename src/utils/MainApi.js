//ебанный костыль я хз почему в бд не записываеться без пустого знаение  nameEN
function returnWordName (str,data){
  if(str.split('').length === 0){
    return data['nameEN']='Название фильма';
  }else{
    return data.nameEN;
  }
}
class MainApi {
  constructor({ address, headers}) {
    this._address = address;
    this._headers = headers;
  };

  _checkServerResponse(item) {
    return item.ok ? item.json() : Promise.reject(item.status);
  };

  getProfileData() {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then((res) => this._checkServerResponse(res))
  };

  setNewProfileData(data) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    })
    .then((res) => this._checkServerResponse(res))
  };

  getMovies() {
    return fetch(`${this._address}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then((res) => this._checkServerResponse(res))
  };


  saveMovie(data,owner) {
 
    return fetch(`${this._address}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image.url,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        // nameEN: data.nameEN,
        nameEN: returnWordName( data.nameEN,data),
        id: data.id,
        owner:owner,
      })
    })
    .then((res) => this._checkServerResponse(res))
  };

  deleteMovie(movieId) {
    return fetch(`${this._address}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
    .then((res) => this._checkServerResponse(res))
  };
};

const mainApi = new MainApi({
  address: 'http://localhost:3003',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default mainApi;