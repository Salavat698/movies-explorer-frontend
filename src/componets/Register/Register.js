import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo.svg'

function  Register(props) {
   
    // хук для  компанента регистраций
  const [userRegistrData,setUserRegistrData] = React.useState({name:'',email:'',password:''})

  // привязываю инпуты
  function handleChange(e){
    setUserRegistrData({...userRegistrData,[e.target.name]:e.target.value})
    }
// отправка формы регистраций
 function handleSumbit(e){

        e.preventDefault();
        props.onRegister(userRegistrData)
    }

  return (
    <div className='register'>
      <div className='form__container'>
      <img className="header__logo" src={headerLogo} alt="Логотип сайта путешествие" />
        <h1 className='form__greeting'>Добро пожаловать!</h1>
        <form className='form'  onSubmit={handleSumbit}>
          <span className='form__name-span'>Имя</span>
          <input 
          className='form__input' 
          required type='text'
          name="name"
          value={userRegistrData.name}
          onChange={handleChange}
          ></input>
          <span className='form__error-span'></span>

          <span className='form__name-span'>E-mail</span>
          <input 
          className='form__input'
           required 
           type='email'
           name="email"
           value={userRegistrData.email}
           onChange={handleChange}
           ></input>
          <span className='form__error-span'></span>

          <span className='form__name-span'>Пароль</span>
          <input 
          className='form__input' 
          required 
          // type='password'
          value={userRegistrData.password}
          name="password"
          onChange={handleChange}
          ></input>
          <span className='form__error-span'></span>
          <button className='form__button form__button_place_register' type="submit">Зарегистрироваться</button>
        </form>
      
        <p className='from__status-ask'>Уже зарегистрированы?
        {<Link to='/signin' className='form__link-in'>Войти</Link>}
        </p>
      </div>
     
    </div>
 
  )
}

export default Register;
