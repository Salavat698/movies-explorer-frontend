import MovieCard from '../MovieCard/MovieCard';
import photos from '../../utils/constants';

import { useLocation } from 'react-router-dom';
import  Footer from '../Footer/Footer';
function MoviesCardList() {

  
  return (
    <div className='movies-card-list'>
      <ul className='movie-card-list__catalog'>{
        photos.map(item =>  <MovieCard card = {item} 
                                       key = {item}
        />)
      }</ul>
       <div className='movies-card-list__more'>Еще</div>
       <Footer/>
    </div>
    
  )
}

export default MoviesCardList;