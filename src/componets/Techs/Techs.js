import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect ,withRouter} from 'react-router-dom';

function Techs(){

    return(
        <section className='techs'>
            <h2 className='techs__title'>Технологии</h2>
            <div className='techs__wrapper'>
                <h2 className='techs__title-main'>7 технологий</h2>
                <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <ul className='techs__lists'>
                <li className='techs__list'>HTML</li>
                <li className='techs__list'>CSS</li>
                <li className='techs__list'>JS</li>
                <li className='techs__list'>React</li>
                <li className='techs__list'>Git</li>
                <li className='techs__list'>Express.js</li>
                <li className='techs__list'>mongoDB</li>
            </ul>
        </section>
    )
}
export default withRouter (Techs);