import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect ,withRouter} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error from '../Error/Error';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import auth from '../../utils/auth';
// import api from '../utils/api';


function App(props){


     // хук для InfoTooltip показать попап успешно
     const [isSuccess,setisSuccess] = React.useState(false)
     const [stateOpenPopup,setStateOpenPopup] = React.useState(false)
    // регистрация
  function onRegister (e){
    const {name,email,password}= e;

    auth.register({name,email,password})
    .then((res) => {
        
        if(res.status === 200){
            setStateOpenPopup(true)
            setisSuccess(true)
            setTimeout(()=>{props.history.push('/signin')}, 3000)
          } else if(res.status === 409 ||res.status === 403) {
            setisSuccess(false)
            setStateOpenPopup(true)
            console.log('Что то пошло не так')
          }
          
        }).catch((err) => console.log(err));
}

    return(
        <div className='page'>
            <Switch>
                <Route 
                    exact
                    path="/" 
                    component={() => 
                    <>
                        <Header/>
                        <Main/>
                        <Footer/>
                    </>
                }
                />
          
            <Route 
                exact
                path="/movies" 
                component={() => 
                <Movies/>}
            />
            <Route 
                exact
                path="/saved-movies" 
                component={() => 
                <SavedMovies/>}
            />
            <Route 
                exact
                path="/profile" 
                component={() => 
                <Profile/>}
            />
            <Route 
                exact
                path="/signup" 
                component={() => 
                <Register
                onRegister={onRegister}
                />}
            />

            <Route 
                exact
                path="/signin"
                component={() => 
                <Login />}
              />

            <Route 
                exact
                path="/error"
                component={() => 
                <Error />}
              />
            </Switch>
            <InfoTooltip
                isSuccess={isSuccess} 
                stateOpenPopup={stateOpenPopup}
            />
        </div>
    )
}
export default withRouter (App);