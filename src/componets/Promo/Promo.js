import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect ,withRouter} from 'react-router-dom';


function Promo(){

    return(
        <section className='promo'>
            <h2 className='promo__main-title'>О проекте</h2>
            <div className='promo__wrapper'>
                <div className='promo__container'>
                    <h2 className='promo__title'>Дипломный проект включал 5 этапов</h2>
                    <p className='promo__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='promo__container'>
                    <h2 className='promo__title'>На выполнение диплома ушло 5 недель</h2>
                    <p className='promo__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            
            <div className='promo__scale'>
                <div className='promo__scale-wrapper'>
                    <div className='promo__week-one'>1 неделя</div>
                    <p className='promo__week-one-description'>Back-end</p>
                </div>
                <div className='promo__scale-wrapper-four'>
                    <div className='promo__week-four'>4 неделя</div>
                    <p className='promo__week-one-description-four'>Front-end</p>
                </div>
               
            </div>
        </section>
    )
}
export default withRouter (Promo);