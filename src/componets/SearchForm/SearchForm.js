function SearchForm() {
  
  return (
    <div className='search-form__container'>
      <form className='search-form'>
        <input className='search-form__input' required placeholder='Фильм' />
        <button className='search-form__button' type='submit' />
        <div className='search-form__border' />
        <div className='search-form__checkbox-container'>
          <input className='search-form__checkbox' type='checkbox' />
          <p className='search-form__checkbox-caption'>Короткометражки</p>
        </div>
      </form>
    </div>
  )
}

export default SearchForm;