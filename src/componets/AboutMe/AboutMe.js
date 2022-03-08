import React from 'react';
import { withRouter} from 'react-router-dom';
import imgMe from '../../images/imgme.jpg';

function AboutMe(){

    return(
        <section className='aboutme'>
            <h2 className='aboutme__main-title'>Студент</h2>
            <div className='aboutme__wrapper'>
                <h2 className='aboutme__name'>Салават</h2>
                <h3 className='aboutme__job'>Фронтенд-разработчик, 28 лет</h3>
                <p className='aboutme__description'>Я родился и живу в Набережны Челны. У меня есть жена 
и сын. Я люблю слушать музыку, а ещё увлекаюсь плаванем,велоспорт. Недавно начал кодить. С 2015 года работаю на себя. После того, как прошёл курс по веб-разработке в "Яндекс Практикум" , начал заниматься фриланс-заказами.</p>
                <img className='aboutme__imgme' src={imgMe}  alt = "фото мое"/>
                <div className='aboutme__links'>
                    <a className='aboutme__link'  href='https://ru-ru.facebook.com/'>Facebook</a>
                    <a className='aboutme__link'  href='https://github.com/Salavat698'>Github</a>
                </div>
            </div>

        </section>
    )
}
export default withRouter (AboutMe);