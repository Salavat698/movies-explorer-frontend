import React from 'react';
import { Link ,withRouter} from 'react-router-dom'; 
function Header(){

    return(
        <>
            <div className='header'>
                <Link className="header__logo" to="/" alt="Логотип сайта путешествие" ></Link>
                <div className='header__wrapper'>
                        <Link className='header__registration' to="/signup">Регистрация</Link>
                        <Link className='header__exit'  to="/signin">Войти</Link>
                </div>
            </div>
        </>
    )
}
export default withRouter (Header);