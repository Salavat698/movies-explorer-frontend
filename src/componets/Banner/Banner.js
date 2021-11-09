import React from 'react';
import headerLogo from '../../images/logo.svg'
import mainLogo from '../../images/text__COLOR_landing-logo.svg'
import { Link ,withRouter} from 'react-router-dom'; 
function Banner(){

    return(
        <>
            <section className='banner'>
                <h1  className='banner__title'>Учебный проект студента факультета Веб-разработки.</h1>
                <p  className='banner__paragraph'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <Link className='banner__learn-more'  to="/sign-in">Узнать больше</Link>
                <img className='banner__logo-main' src={mainLogo}  alt = "баннер логотип"/>
            </section>
        </>
    )
}
export default withRouter (Banner);