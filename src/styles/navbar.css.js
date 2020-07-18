import React from "react";
import { cssVariables } from '../constants/cssVariables';

// const primaryColour = '#0C968F';
function NavBarCss() {
    return (
        <style jsx="true">{`
            .navBarOuter {
                background-image: linear-gradient(340deg, ${cssVariables.secondaryColourLight} 20%, ${cssVariables.tertiaryColourLight} 58%, ${cssVariables.primaryColourWhite} 74%, ${cssVariables.tertiaryColourLight} 87%);
                height: 40px;
                border-bottom: 1px solid grey;
            }
            @media only screen and (max-width: 550px) {
                .navBarOuter {
                    padding-right: 10px;
                    height: 40px;
                    display: flex;
                    justify-content: flex-end;
                }
            }
            .navLinks {
                height: 100%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                position: relative;
            }
            @media only screen and (max-width: 550px) {
                .navLinks {
                    flex-direction: column;
                    height: 140px;
                    padding: 30px 10px 0px;
                    border-radius: 3px;
                    background-image: linear-gradient(340deg, ${cssVariables.secondaryColourLight} 20%, ${cssVariables.tertiaryColourLight} 58%, ${cssVariables.primaryColourWhite} 74%, ${cssVariables.tertiaryColourLight} 87%);
                    z-index: 6000;
                }
                .navLinks a {
                    font-size: 16px;
                }
            }
            a {
                font-family: 'avenir';
                font-size: 16px;
                text-decoration: none;
                color: #000000;
                opacity: .8;
                flex: 2;
                text-align: center;
            }
            a:hover {
                opacity: 1;
            }
            @media only screen and (max-width: 950px) {
                a {
                    font-size: 14px;
                }
            }
            @media only screen and (max-width: 700px) {
                a {
                    font-size: 12px;
                }
            }
            .hamburgerMenu img {
                height: 35px;
            }
            .closeIcon img {
                height: 25px;
                position: absolute;
                top: 0;
                left: 0;
            }
      `}</style>
    )
}

export default NavBarCss;
