import { useState } from 'react';
import saveBtn from '../../images/saved.svg';
import closeIcon from '../../images/close-icon.svg';


function MovieCard(props) {
  
  return (
    <li className='movie-card'>
      <div className='movie-card__container'>
          <div className='movie-card__wrapper'>
            <p className='movie-card__name'>33 слова о дизайне</p>
            <p className='movie-card__time'>1ч 42м</p>
            
            <button class="movie-card__btn" type="button" >
              <img className='movie-card__save' src={props.stateBtnDelet ? closeIcon : saveBtn} alt='сохранение'></img>
            </button>
            
            
          </div>
          <img className='movie-card__image' alt='описание картинки' src={props.card}/>
      </div>
      
    </li>
  )
}

export default MovieCard;
