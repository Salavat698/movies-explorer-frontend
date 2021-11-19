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

import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext} from '../contexts/CurrentUserContext';
import { CurrentMoviesContext} from '../contexts/CurrentMoviesContext';
function App(props){


    const [stateBtnDelet,setStateBtnDelet] = React.useState(true)
    // movies
    const [currentMovies,setCurrentMovies] = React.useState([])
    //users
    const [currentUser,setCurrentUser] = React.useState({})
     // хук для InfoTooltip показать попап успешно
     const [isSuccess,setisSuccess] = React.useState()
     const [stateOpenPopup,setStateOpenPopup] = React.useState()
      //  стейит переменная для автризаций или залогирование
    const [loggedIn,setloggedIn] = React.useState(false)

     function closeAllPopups(){
        // setIsEditAvatarPopupOpen(false)
        // setIsEditProfilePopupOpen (false)
        // setIsAddPlacePopupOpen(false)
        // setDeletQuestionPopup(false)
        // setSelectedCard({})
        setStateOpenPopup(false)
      }

    //закрытие попап по ESC
  React.useEffect(() => {
    const handleEsc = (event) => {
      const btnEscape = 27;
       if (event.keyCode === btnEscape) {
        closeAllPopups()
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

    // регистрация
  function onRegister (e){
    const {name,email,password}= e;

    auth.register({name,email,password})
    .then((res) => {
        console.log(res)
        if(res){
            setStateOpenPopup(true)
            setisSuccess(true)
            setTimeout(()=>{props.history.push('/signin')}, 3000)
          }else{
            console.log('Что то пошло не так')
          }
          
        }).catch((err) => console.log(err));
}

// проверка токена при входе если уже залогинен клиент
const [emailData,setEmailData] = React.useState({})
// перерисовую если функия выполнена по loggedIn(который тру или фалс)
//   React.useEffect(()=>{
//       tokenCheck();
//     },[loggedIn])

  //  function tokenCheck () {
  //     // если у пользователя есть токен в localStorage, 
  //     // эта функция проверит, действующий он или нет
  //     const jwt = localStorage.getItem('token');
  //     if (jwt){
  //       auth.getToken(jwt)
  //       .then((res)=>{
  //       const userData = (
  //         res.data.email
  //       )
  //         if (res){
  //           setEmailData({userData})
  //           setloggedIn(true)
  //           props.history.push("/main")
  //         }
          
  //       })
  //       .catch((err) => console.log(err))
  //     }
  //   }

    // 
// Логин
    // function onLoginSumbit (e){

    //     const {email}= e;
    //     const {password}= e;

    //     auth.login({email,password})
    //     .then((res) => {
    //             localStorage.setItem('token', res.token)
    //             onLogin();
    //             props.history.push('/main');
     
    //         }).catch((err) => console.log(err));
            
    // }

    return(
        <div className='page'>
        <CurrentMoviesContext.Provider value={currentMovies}>
        <CurrentUserContext.Provider value={currentUser}>
            <Switch>

            {/* <Route exact path="/">
                  {loggedIn ? <Redirect to="/auth"/> : <Redirect to="/page"/>}
            </Route> */}

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
                                <SavedMovies
                                stateBtnDelet={stateBtnDelet}
                                />}
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
                    path="*"
                    component={() => 
                    <Error />}
                    />
            </Switch>

                <InfoTooltip
                    onClose={closeAllPopups}
                    isSuccess={isSuccess} 
                    stateOpenPopup={stateOpenPopup}
                />

        </CurrentUserContext.Provider>
        </CurrentMoviesContext.Provider>
          
          
        </div>
    )
}
export default withRouter (App);