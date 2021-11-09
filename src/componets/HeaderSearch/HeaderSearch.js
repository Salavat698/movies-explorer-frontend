import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect ,withRouter,Link} from 'react-router-dom';
import headerLogo from '../../images/logo.svg'
import profileBtn from '../../images/icon__COLOR_icon-main.svg'

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
function HeaderSearch(){

    return(
    <>

             <div className='headerSearch'>
                <Link className="header__logo"  to="/" src={headerLogo} alt="Логотип сайта путешествие"></Link>
                
             
                
                <div className='headerSearch__navigator'>
                    <Link className='headerSearch__film' to="/movies">Фильмы</Link>
                    <Link className='headerSearch__filv-save' to="/saved-movies">Сохранённые фильмы</Link>
                </div>
              
                <div className='headerSearch__btn'>
                        <Link className='header__profile' to="/profile">Аккаунт</Link>
                        <img className="headerSearch__profile-icon" src={profileBtn} alt="иконка аккаунта" />
                </div>


            </div>

            <div class="burger-menu">
                <input id="menu-toggle" type="checkbox" />
                
                <label class="menu-btn" for="menu-toggle">
                <span></span>
                </label>
            
                <ul class="menubox">
                    <p class="menubox__title">Главное</p>
                    
                    <div className='menubox__wrapper'>
                        <Link className='headerSearch__film menubox__film' to="/movies">Фильмы</Link>
                        <Link className='headerSearch__filv-save menubox__film-save' to="/saved-movies">Сохранённые фильмы</Link>
                        <div className='headerSearch__btn  menubox__profile active'>
                            <Link className='header__profile' to="/profile">Аккаунт</Link>
                            <img className="headerSearch__profile-icon" src={profileBtn} alt="иконка аккаунта" />
                        </div>
                    </div>
                      
                   
                </ul>
            </div>

     

            

    </>
    )
}
export default withRouter (HeaderSearch);