import React from 'react';


function SearchForm(props) {

  const [ formValid, setformValid] = React.useState('');

    const [errorMessage, setErrorMessage] = React.useState(false);
    const [stateInput, setStateInput] = React.useState(false);

  function handleChange(e){
    setformValid({...formValid,[e.target.name]:e.target.value})

    }

    function   handleSumbit(e){
      e.preventDefault();
            // показываю ошибку если не чего не веденно
      if(formValid.length === 0 || formValid.name.length === 0){
        setErrorMessage('Нужно ввести ключевое слово')
        setStateInput(false)
      }else{
        setStateInput(true)
        setErrorMessage('')
        props.handleSumbit(formValid.name)
      }
  }


  return (
    <div className='search-form__container'>
      
      <form className='search-form' noValidate onSubmit={handleSumbit}>
       
        <input className='search-form__input' 
          value={formValid.name || ''}
          onChange={handleChange}
          name="name"
          required 
          placeholder='Фильм'
          autoComplete="off"
         />
     
        <button className='search-form__button' type='submit'>Найти</button>
        
        <div className='search-form__border' />
        <div className='search-form__checkbox-container'>
          <input className='search-form__checkbox' type='checkbox' />
          <p className='search-form__checkbox-caption'>Короткометражки</p>
          
        </div>
       
      </form>
      
      {<div className='search-form__input-error'>{errorMessage}</div>}
    </div>
  )
}

export default SearchForm;