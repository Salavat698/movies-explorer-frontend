import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo.svg'
function Login(props) {

  const [userLoginData,setUserLoginData] = React.useState({email:'',password:''})

  function handleChange(e){
    setUserLoginData({...userLoginData,[e.target.name]:e.target.value})
      }
  
   function   handleSumbit(e){
          e.preventDefault();
          props.onLoginSumbit(userLoginData)
      }
  return (
    <div className='login'>
      <div className='form__container'>
      <img className="header__logo" src={headerLogo} alt="Логотип сайта путешествие" />
        <h1 className='form__greeting'>Рады видеть!</h1>
        <form className='form'  onSubmit={handleSumbit}>
          <span className='form__name-span'>E-mail</span>
          <input 
          className='form__input' 
          required 
          type='email' 
          name="email"
          onChange={handleChange}
          value={userLoginData.email}
          ></input>
          <span className='form__error-span'></span>
          <span className='form__name-span'>Пароль</span>
          <input 
          className='form__input' 
          required 
          type='password' 
          name="password"
          onChange={handleChange}
          value={userLoginData.password}
          ></input>
          <span className='form__error-span'></span>
          <button className='form__button from__button_place_login' type='submit'>Войти</button>
        </form>
        
        <p className='from__status-ask'>Еще не зарегистрированы?{<Link to='/signup' className='link link_place_form link_place_form-login'> Регистрация</Link>}</p>
      </div>
    </div>
  )
}

export default Login;
