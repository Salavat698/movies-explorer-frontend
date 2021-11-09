import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect ,withRouter} from 'react-router-dom';


import SearchForm from '../SearchForm/SearchForm';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(){

    return(
    <>
  
            <HeaderSearch/>
            <SearchForm/>
            <MoviesCardList/>
    </>
    )
}
export default withRouter (Movies);