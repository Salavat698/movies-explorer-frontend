import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className='profile'>
      <div className='profile__container'>
        <h1 className='profile__greeting'>Привет, {'Салават'}!</h1>
        <div className='profile__data-container'>
          <div className='profile__name-container'>
            <p className='profile__name-title'>Имя</p>
            <p className='profile__name'>{'Салават'}</p>
          </div>
          <div className='profile__underline' />
          <div className='profile__email-container'>
            <p className='profile__email-title'>E-mail</p>
            <p className='profile__email'>{'salavat@mail.ru'}</p>
          </div>
        </div>
        <div className='profile__links'>
          <Link to='/edit-profile' hef='#' className='profile__link-edit'>Редактировать</Link>
          <Link to='/signin' hef='#' className='profile__link-exit'>Выйти из аккаунта</Link>
        </div>
      </div>
    </div>
  )
}

export default Profile;