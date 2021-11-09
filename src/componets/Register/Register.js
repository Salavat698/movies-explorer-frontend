import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo.svg'
function  Register() {
  return (
    <div className='register'>
      <div className='form__container'>
      <img className="header__logo" src={headerLogo} alt="Логотип сайта путешествие" />
        <h1 className='form__greeting'>Добро пожаловать!</h1>
        <form className='form'>
          <span className='form__name-span'>Имя</span>
          <input className='form__input' required type='text'></input>
          <span className='form__error-span'></span>
          <span className='form__name-span'>E-mail</span>
          <input className='form__input' required type='email'></input>
          <span className='form__error-span'></span>
          <span className='form__name-span'>Пароль</span>
          <input className='form__input' required type='password'></input>
          <span className='form__error-span'></span>
        </form>
        <button className='form__button form__button_place_register'>Зарегистрироваться</button>
        <p className='from__status-ask'>Уже зарегистрированы?
        {<Link to='/signin' className='form__link-in'>Войти</Link>}
        </p>
      </div>
    </div>
  )
}

export default Register;
