import React from 'react';
import BannerCss from '../styles/banner.css';
 
function Banner() {
    return (
        <>
        <div className="mainContainer">
            <img className="banner" src="../static/img/yourBrandHere.png" alt="Your Brand Here Banner"/>
        </div>
        <BannerCss />
        </>
    )
}

export default Banner;
