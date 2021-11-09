import { useState } from 'react';
import saveBtn from '../../images/saved.svg';
import photos from '../../images/middleofnowhere.jpg';
function MovieCard(props) {


  return (
    <li className='movie-card'>
      <div className='movie-card__container'>
          <div className='movie-card__wrapper'>
            <p className='movie-card__name'>33 слова о дизайне</p>
            <p className='movie-card__time'>1ч 42м</p>
            <img className='movie-card__save' src={saveBtn} alt='сохранение'></img>
          </div>
          <img className='movie-card__image' alt='описание картинки' src={props.card}/>
      </div>
      
    </li>
  )
}

export default MovieCard;
