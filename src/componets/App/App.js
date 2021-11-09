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
function App(){

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
                <Register/>}
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
       
        </div>
    )
}
export default withRouter (App);