import MovieCard from '../MovieCard/MovieCard';
import  Footer from '../Footer/Footer';
import React from 'react';


function MoviesCardList(props) {
  const [ currentCardArrayLength, setCurrentArrayLength ] = React.useState(3);

  const [ stateMore, setStateMore ] = React.useState(false);

  // для кнопки еще буду отрисовывать от количество фильмов
React.useEffect(() => {
      if(props.currentMovies.length < 3){
        setStateMore(false)
      }else{
        setStateMore(true)
      }

  }, [props.currentMovies]);


  function addMoreMovies() {
    setCurrentArrayLength(currentCardArrayLength + 3)

  };
  return (
    <div className='movies-card-list'>
      <ul className='movie-card-list__catalog'>
        {
       props.currentMovies.slice(0,currentCardArrayLength).map(item =>  
                                <MovieCard 
                                      card = {item} 
                                       key = {item.id}
                                       duration={item.duration}
                                       nameRU={item.nameRU}
                                       trailerLink={item.trailerLink}
                                       image={item.image.url}
                                       stateBtnDelet={props.stateBtnDelet}
                                       handleCardLike={props.handleCardLike}
                                />
        )
      }
       {props.nonFoundResult  &&  <div className='movie-card-list__result'>Ничего не найдено</div>}
      </ul>
       {stateMore && <button className='movies-card-list__more' onClick={addMoreMovies}>Еще</button>}
       <Footer/>
    </div>
    
  )
}

export default MoviesCardList;