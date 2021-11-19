import MoviesCardList from '../MoviesCardList/MoviesCardList';

import SearchForm from '../SearchForm/SearchForm';
import HeaderSearch from '../HeaderSearch/HeaderSearch';


function SavedMovies(props) {
  return (
    <div className='saved-movies'>
        <HeaderSearch/>
        <SearchForm/>
        <MoviesCardList
          stateBtnDelet={props.stateBtnDelet}
        />
    </div>
  )
}

export default SavedMovies;