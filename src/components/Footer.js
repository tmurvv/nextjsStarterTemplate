import React from 'react';
import { branding } from '../constants/branding';
import { cssVariables } from '../constants/cssVariables';
import FooterCss from '../styles/Footer.css';

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='flexSB'>
                    <div className="logo">
                        <img width = '100px' src= {branding.mainLogoImage} alt={branding.mainLogoImageAlt} />
                    </div>    
                </div> 
                {/* with designer
                <p className='copy'style={{marginBlockEnd:'0'}}>design by <a href='http://diomed.ca' style={{color: `${cssVariables.primaryColourLight}`, fontSize: '12px'}} target='_blank'>diomed.ca</a>/website by <a href='https://www.take2tech.ca' style={{color: cssVariables.primaryColorLight, fontSize: '12px'}} target='_blank'>take2tech.ca</a></p> */}
                {/* without designer */}
                <p className='copy'style={{marginBlockEnd:'0'}}>website by <a href='https://www.take2tech.ca' style={{color: `${cssVariables.primaryColourLight}`, fontSize: '14px'}} target='_blank'>take2tech.ca</a></p>
                <p className='copy' style={{marginBlockStart:'0'}}>&copy; Copyright 2020 take2tech.ca</p>
            </div>
            <FooterCss />
        </>
    )
}

export default Footer;
