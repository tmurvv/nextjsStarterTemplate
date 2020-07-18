import React from 'react';
import BannerCss from '../styles/Banner.css';
 
function Banner() {
    return (
        <>
        <div className="mainContainer">
            <img className="banner" src="./img/yourBrandHere.png" alt="Your Brand Here Banner"/>
        </div>
        <BannerCss />
        </>
    )
}

export default Banner;