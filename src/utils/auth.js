
// const BASE_URL = 'https://slt116.nomoredomains.club';
const BASE_URL = 'http://localhost:3001';

class Auth {
  constructor({password,email}) {
    this.password = password;
    this.email = email;
    console.log(this.email)
    
  }
  _checkStatus(result){
    if (result.ok) {
      return result.json()
  } else {
      return Promise.reject(`Ошибка: ${result.status}`)
  }
  }

  register({name,email,password}){
    return fetch(`${BASE_URL}/signup`, {
      method:'POST',
      credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,email,password})
      })
      .then(result => {
        
       return this._checkStatus(result)
    })
  
  }


  login({email,password}){
    return fetch(`${BASE_URL}/signin`, {
      method:'POST',
      credentials: 'include', // теперь куки посылаются вместе с запросом
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email,password})
      })

      .then(result => {
        return this._checkStatus(result)
     })
    
   }

   getToken(token) {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(result => {
      return this._checkStatus(result)
    })
  }
}
const auth= new Auth({password:'',email:''})
export default auth;