import { Link } from 'react-router-dom';

function Profile(props) {
  return (
    <div className='profile'>
      <div className='profile__container'>
        <h1 className='profile__greeting'>Привет, {props.currentUser.name}!</h1>
        <div className='profile__data-container'>
          <div className='profile__name-container'>
            <p className='profile__name-title'>Имя</p>
            <p className='profile__name'>{props.currentUser.name}</p>
          </div>
          <div className='profile__underline' />
          <div className='profile__email-container'>
            <p className='profile__email-title'>E-mail</p>
            <p className='profile__email'>{props.currentUser.email}</p>
          </div>
        </div>
        <div className='profile__links'>
          <Link to='/edit-profile' hef='#' className='profile__link-edit'>Редактировать</Link>
          <Link to='/signin' hef='#' className='profile__link-exit' onClick={props.handleSignOut}>Выйти из аккаунта</Link>
        </div>
      </div>
    </div>
  )
}

export default Profile;