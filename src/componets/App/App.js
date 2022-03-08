import React from 'react';
// import ReactDOM from 'react-dom';
import { Route, Switch, Redirect ,withRouter,useHistory } from 'react-router-dom';

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
// import Preloader from '../Preloader/Preloader';
import auth from '../../utils/auth';
import ResponseError from '../ResponseError/rersponseError';
import api from '../../utils/api';
import mainApi from '../../utils/MainApi';
import movieApi from '../../utils/MoviesApi';

import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext} from '../contexts/CurrentUserContext';
import { CurrentMoviesContext} from '../contexts/CurrentMoviesContext';




function App(props){

    //  стейит переменная для автризаций или залогирование
    const [loggedIn,setloggedIn] = React.useState(false)
    //стейит переменная фильма крестик или лайк
    const [stateBtnDelet,setStateBtnDelet] = React.useState(false)
    // movies
    const [currentMovies,setCurrentMovies] = React.useState([])
      // movies save
    const [currentSaveMovies,setCurrentSaveMovies] = React.useState([])
    //users
    const [currentUser,setCurrentUser] = React.useState({})
     // хук для InfoTooltip показать попап успешно
     const [isSuccess,setisSuccess] = React.useState()
    //  попап для показа ошибки от сервера для текста
     const [responseError,setResponseError] = React.useState('')
     //  попап для показа ошибки от сервера открыть.звурыть попап
     const [responseOpen,setResponseOpen] = React.useState(false)

  // попап показать при успешном или не очень
     const [stateOpenPopup,setStateOpenPopup] = React.useState()
    //  Прелоудер
    // const [stateOpenPreloader,setOpenPreloader] = React.useState(false)


     //  обновим мониторование приложение данные о пользователе
  React.useEffect(()=>{
    api.getUserInfo()
    .then(res =>{
      setCurrentUser(res.data)
    })
    .catch(res=>{
      setResponseError(`Возможно вы не авторизованны ${res}`)
      setResponseOpen(true)
    })
  },[loggedIn])

  // закрытие попапов
  function closeAllPopups(){
        setStateOpenPopup(false)
        setResponseOpen(false)
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
 


  const [ nonFoundResult, setТonFoundResult ] = React.useState(false);

  // поиск фильма
  function handleSumbit(nameFilm){
      setТonFoundResult(false)
      setCurrentMovies([])
      movieApi.getMovies()
        .then(res =>{
          localStorage.setItem('films',JSON.stringify(res))
        })
        .catch(res=>{
          console.log('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        })
         // надо обработать res чтоб отображался нужный фильм
          const films =   JSON.parse(localStorage.getItem('films'))
      // если есть фильм введенный в инпут сравним его с локал(где все фильмы)
      // если есть то отрисуем иначе выведем не найденно
          const movieSearchResult = films.filter((item) => {
            return item.nameRU.toLowerCase().includes(nameFilm);
          });
          if(movieSearchResult.length === 0){
            setТonFoundResult(true)
          }else{
            setCurrentMovies(movieSearchResult)
          }
     
  }

// установка лайков поставить или удалить
function handleCardLike(card) {
  const owner = currentUser._id
  // Снова проверяем, есть ли уже лайк на этой карточке
  // const isLiked = card.likes.some(i =>  {return (i === currentUser._id)});
  // console.log(isLiked)
  // // Отправляем запрос в API и получаем обновлённые данные карточки
// console.log(card)
  mainApi.saveMovie(card,owner)
  .then((newCard) => {
    console.log(newCard)
    // Идея я могу сохранить сначало в локал и там их вытащить как savefilm
    setCurrentSaveMovies((currentCards) => currentCards.map((c) => c._id === card._id ? newCard : c));
  }).catch(res=>{
    console.log(`Error:${res}`)
  });
}

//  удаление карточки
// function handleCardDelete (card) {
//   // Снова проверяем, есть ли уже лайк на этой карточке
//   const isOwn = card.owner === currentUser._id;

//   // Отправляем запрос в API и получаем обновлённые данные карточки
//   api.changeCardStatus(card._id, isOwn)
//   .then((newCard) => {
//     setCurrentCards((currentCards) => [...currentCards].filter((c) => c._id === card._id ? console.log(newCard) : c));
//   }).catch(res=>{
//     console.log(`Error:${res}`)
//   });

//  }

    // регистрация
  function onRegister (e){
    const {name,email,password}= e;
    auth.register({name,email,password})

    .then((res) => {
        if(res){
            setStateOpenPopup(true)
            setisSuccess(true)
            setTimeout(()=>{props.history.push('/signin')}, 3000)
          }else{
            setResponseError(`Возможно вы уже зарегистрированы ${res}`)
            setResponseOpen(true)
          }
          
        }).catch((err) => console.log(err));
}


// // перерисовую если функия выполнена по loggedIn(который тру или фалс)
const history = useHistory();
  React.useEffect(()=>{
      tokenCheck();
    },[loggedIn])

  function tokenCheck () {
      auth.getToken()
      .then(() => {
        setloggedIn(true);
        history.push("/movies")
      })
      .catch((err) => {
        if (err.status === 401) {
          setloggedIn(false);
          localStorage.removeItem();
        };
      })
    }

    // 
// Логин
    function onLoginSumbit (e){

        const {email}= e;
        const {password}= e;

        auth.login({email,password})
        .then((res) => {
                localStorage.setItem('token', res.token)
                setloggedIn(true)
                props.history.push('/movies');
     
            }).catch((err) => {
              setResponseError(`Не удалось автризоваться ${err}`)
              setResponseOpen(true)
            });
          
    }
 
    function handleSignOut() {
      auth.signOut()
        .then(() => {
          setloggedIn(false);
          localStorage.clear();
          props.history.push("/");
        })
        .catch((err) => {
          setResponseError(`Ошибка при выходе из приложения. ${err}`)
          setResponseOpen(true)
        });
    }
     


    return(
        
        <div className='page'>
            
        <CurrentMoviesContext.Provider value={currentMovies}>
        <CurrentUserContext.Provider value={currentUser}>
      
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
                            
               <ProtectedRoute 
                 exact path="/movies"
                 loggedIn={loggedIn}
                 component={() => 
                  <Movies
                  nonFoundResult={nonFoundResult}
                  handleSumbit={handleSumbit}
                  currentMovies={currentMovies}
                  setCurrentMovies={setCurrentMovies}
                  stateBtnDelet={stateBtnDelet}
                  handleCardLike={handleCardLike}
                  />}
                />

                <ProtectedRoute 
                  exact path="/saved-movies"
                  loggedIn={loggedIn}
                  component={() => 
                      <SavedMovies
                      currentSaveMovies={currentSaveMovies}
                      currentMovies={currentMovies}
                      // setCurrentMovies={setCurrentMovies}
                      stateBtnDelet={stateBtnDelet}
                    />}
                  />

                <ProtectedRoute
                    loggedIn={loggedIn}
                    exact path="/profile" 
                      component={() => 
                        <Profile 
                          handleSignOut={handleSignOut}
                          currentUser={currentUser}
                        />}
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
                    <Login 
                    onLoginSumbit={onLoginSumbit}
                    />}
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
            <ResponseError
              responseError={responseError}
              responseOpen={responseOpen}
              onClose={closeAllPopups}
            />
        </CurrentUserContext.Provider>
        </CurrentMoviesContext.Provider>
          
          
        </div>
    )
}
export default withRouter (App);