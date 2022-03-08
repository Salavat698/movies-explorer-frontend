import React from 'react';
import { withRouter} from 'react-router-dom';


import SearchForm from '../SearchForm/SearchForm';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props){

    return(
    <>
  
            <HeaderSearch/>
            <SearchForm
                handleSumbit={props.handleSumbit}
                setCurrentMovies={props.setCurrentMovies}
            />
            <MoviesCardList
                handleCardLike={props.handleCardLike}
                stateBtnDelet={props.stateBtnDelet}
                nonFoundResult={props.nonFoundResult}
                currentMovies={props.currentMovies}
            />
    </>
    )
}
export default withRouter (Movies);