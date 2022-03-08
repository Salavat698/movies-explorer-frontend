import React from 'react';
import { withRouter} from 'react-router-dom';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Banner from '../Banner/Banner';

function Main(){

    return(
        <>
            <Banner/>
            <Promo/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
            
        </>
    )
}
export default withRouter (Main);