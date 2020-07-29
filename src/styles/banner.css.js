import React from "react";

function BannerCss() {
    return (
        <style jsx="true">{`
            .mainContainer {
                background-color: #0C968F;
                height: 150px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            @media only screen and (max-width: 950px) {
                
            }
            @media only screen and (max-width: 750px) {
                
            }
            @media only screen and (max-width:550px) {
                
            }
            .banner {
                height: 100%;
                width: unset;
                margin: 0;
            }
            @media only screen and (max-width: 550px) {
                .textLogo {
                    height: 45%;
                    flex-direction: column-reverse;
                    align-items: center;
                }
            }
            .productGraphic {
                height: 100%;
            }
            @media only screen and (max-width: 550px) {
                .productGraphic {
                    height: 40%;
                }
            }
        `}
    </style>
    )
}

export default BannerCss;
