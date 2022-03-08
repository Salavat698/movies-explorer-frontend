import MoviesCardListSave from '../MoviesCardListSave/MoviesCardListSave';

import SearchForm from '../SearchForm/SearchForm';
import HeaderSearch from '../HeaderSearch/HeaderSearch';


function SavedMovies(props) {
  return (
    <div className='saved-movies'>
        <HeaderSearch/>
        <SearchForm/>
        <MoviesCardListSave
          currentSaveMovies={props.currentSaveMovies}
          currentMovies={props.currentMovies}
          stateBtnDelet={props.stateBtnDelet}
        />
    </div>
  )
}

export default SavedMovies;