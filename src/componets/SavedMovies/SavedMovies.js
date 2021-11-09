import MoviesCardList from '../MoviesCardList/MoviesCardList';

import SearchForm from '../SearchForm/SearchForm';
import HeaderSearch from '../HeaderSearch/HeaderSearch';


function SavedMovies() {
  return (
    <div className='saved-movies'>
        <HeaderSearch/>
        <SearchForm/>
        <MoviesCardList/>
    </div>
  )
}

export default SavedMovies;