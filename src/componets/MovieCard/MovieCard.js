import saveBtn from '../../images/saved.svg';
import closeIcon from '../../images/close-icon.svg';


function MovieCard(props) {
   const beatfilmApiURL = 'https://api.nomoreparties.co'

   function handleCardLike(){
    props.handleCardLike (props.card);
  }

  // function handleDeleteClick (){
  //   props.onCardDelete (props.dataCards);
  // }

  return (
    <li className='movie-card '>
      <div className='movie-card__container'>
          <div className='movie-card__wrapper'>
            <p className='movie-card__name'>{props.nameRU}</p>
            <p className='movie-card__time'>{`${Math.floor(props.duration / 60)}ч ${props.duration % 60}м`}</p>
            
            <button className="movie-card__btn" type="button" >
              <img 
              className='movie-card__save' 
              src={props.stateBtnDelet ? closeIcon : saveBtn} 
              alt='сохранение'
              onClick={handleCardLike}
              ></img>
            </button>
            
            
          </div>
          
          <a href={props.trailerLink}>
            <img className='movie-card__image' alt='описание картинки' src={beatfilmApiURL +props.image}></img>
          </a>
         
      </div>
      
    </li>
  )
}

export default MovieCard;
