import React from 'react';
import { cssVariables } from '../constants/cssVariables';

function AppCss() {
    return (
        <style jsx="true">{`
            .bg-primary {
                background-color: #0C968F;
            }
            .bg-primary-dark {
                background-color: #5D5B5B;
            }
            .bg-secondary {
                background-color: #F7AA14;
            }
            .bg-tertiary {
                background-color: #F5141A;
            }
            .fg-primary {
                color: #0C968F;
            }
            .fg-primary-dark {
                color: #5D5B5B;
            }
            .fg-secondary {
                color: #F7AA14;
            }
            .fg-tertiary {
                color: #F5141A;
            }
            @font-face {
                font-family: avenir;
                src: url(/fonts/avenir_ff/AvenirLTStd-Roman.otf);
            }
            @font-face {
                font-family: 'Avenir Next Bold';
                font-weight: bold;
                font-style: normal;
                font-variant:normal;
                src: url('./fonts/Avenir_ff/Avenir_Next_Condensed_Bold.otf') format('opentype');
            }
            @font-face {
                font-family: 'Metropolis Extra Bold';
                font-weight: bold;
                font-style: normal;
                font-variant:normal;
                src: url('./fonts/metropolis_ff/Metropolis-ExtraBold.otf') format('opentype');
            }
            body {
                overflow-x: hidden;
                margin: 0;
                margin-block-end: 0 !important;
                margin-block-start: 0 !important;
                font-family: avenir;
                color: #5c5b5b;
                background-color: ${cssVariables.primaryColourWhite};
            }
            h2 {
                margin-block-end:0;
                margin-block-start:0;
            }
            .mainTitle {
                text-align: center;
                margin: auto;
                letter-spacing: 1.5px;
                font-size: 24px
            }
            .subTitle {
                width: 60%;
                margin: auto;
                text-align: center;
                font-size: 16px;
                font-style: italic;
                font-weight: 500;
                color: #868686;
                letter-spacing: 1px;
                margin-bottom: 45px;
                font-family: avenir;    
            }
            .menuButton {
                background-color: transparent;
                font-size: 14px;
                padding-top: 12px;
                position: relative;
                cursor: pointer;
                color: #fafbfc;
                border: none;
                outline: none;
            }
            @media only screen and (max-width: 550px) {
                .menuButton {
                    padding: 0
                }
            }
            .plainTextSelectLine1 {
                margin-block-end: 0;
                margin-block-start: 0;
                color: #fafbfc;
                background-color: #000000;
                font-size: 14px;
                padding-top: 9px;
                position: absolute;
                cursor: pointer;
                z-index: 2000;
                list-style: none;
                margin-top: -2px;
                padding-inline-start: 0;
                width: 75%;
                transform: translateX(16.5%);
            }
            @media only screen and (max-width: 550px) {
                .plainTextSelectLine1 {
                    width: 190%;
                }
            }
            .plainTextSelectLine1 p {
                margin-block-start: 0;
                margin-block-end: 0;
            }
            .plainTextSelectLine2 {
                margin-block-start: -.2em;
                color: #333333;
                font-size: 14px;
                padding: 6px 0;
                position: absolute;
                cursor: pointer;
                background-color: #fcd961;
                list-style: none;
                z-index: 2000;
                padding-inline-start: 0;
                width: 75%;
                transform: translateX(16.5%);
                text-align: center;
            }
            .plainTextSelectLine2 p {
                margin-block-start: 0;
                margin-block-end: 0;
            }
            @media only screen and (max-width: 550px) {
                .plainTextSelectLine1 {
                    /*margin-block-start: -.5em;*/
                    width: 190%;
                    position: absolute;
                }
                .plainTextSelectLine2 {
                    /*margin-block-start: -.5em;*/
                    width: 190%;
                    position: absolute;
                }
            }  
            .divider {
                width: 90%;
                height: 7px;
                margin: auto;
            }
            .flex {
                display: flex;
                justify-content: flex-start;
            }
            .flex-sa {
                display: flex;
                justify-content: space-around;
            }
            .flex-sb {
                display: flex;
                justify-content: space-around;
            }
            .relative {
                position: relative;
            }
            .marginLeft {
                margin-left: 15px;
            }
            .marginRight {
                margin-right: 15px;
            }
            .redFontButton {
                background-color: white;
                outline: none;
                color: tomato;
                text-decoration: none; 
                border: none; 
                font-size: 14px;
                font-style: italic;
            }
            .primaryButton {
                background-color: ${cssVariables.primaryColour};
                color: white;
                font-size: 14px;
                padding: 5px 10px;
                border-radius: 3px;
                cursor: pointer;
                border-color: lightgrey;
            }

            /* from Stripe website */
            #root {
                display: flex;
                align-items: center;
            }
            body {
                font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                font-size: 16px;
                -webkit-font-smoothing: antialiased;
            }
            form {
                width: 30vw;
                align-self: center;
                box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
                    0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
                border-radius: 7px;
                padding: 40px;
            }
            input {
                border-radius: 6px;
                margin-bottom: 6px;
                padding: 12px;
                border: 1px solid rgba(50, 50, 93, 0.1);
                max-height: 44px;
                font-size: 16px;
                width: 100%;
                background: white;
                box-sizing: border-box;
            }
            .result-message {
                line-height: 22px;
                font-size: 16px;
            }
            .result-message a {
                color: rgb(89, 111, 214);
                font-weight: 600;
                text-decoration: none;
            }
            .hidden {
                display: none;
            }
            #card-error {
                color: rgb(105, 115, 134);
                font-size: 16px;
                line-height: 20px;
                margin-top: 12px;
                text-align: center;
            }
            #card-element {
                border-radius: 4px 4px 0 0;
                padding: 12px;
                border: 1px solid rgba(50, 50, 93, 0.1);
                max-height: 44px;
                width: 100%;
                background: white;
                box-sizing: border-box;
            }
            #payment-request-button {
                margin-bottom: 32px;
            }
            /* Buttons and links */
            button {
                background: #5469d4;
                font-family: Arial, sans-serif;
                color: #ffffff;
                border-radius: 0 0 4px 4px;
                border: 0;
                padding: 12px 16px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                display: block;
                transition: all 0.2s ease;
                box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
                width: 100%;
            }
            button:hover {
                filter: contrast(115%);
            }
            button:disabled {
                opacity: 0.5;
                cursor: default;
            }
            /* spinner/processing state, errors */
            .spinner,
            .spinner:before,
            .spinner:after {
                border-radius: 50%;
            }
            .spinner {
                color: #ffffff;
                font-size: 22px;
                text-indent: -99999px;
                margin: 0px auto;
                position: relative;
                width: 20px;
                height: 20px;
                box-shadow: inset 0 0 0 2px;
                -webkit-transform: translateZ(0);
                -ms-transform: translateZ(0);
                transform: translateZ(0);
            }
            .spinner:before,
            .spinner:after {
                position: absolute;
                content: "";
            }
            .spinner:before {
                width: 10.4px;
                height: 20.4px;
                background: #5469d4;
                border-radius: 20.4px 0 0 20.4px;
                top: -0.2px;
                left: -0.2px;
                -webkit-transform-origin: 10.4px 10.2px;
                transform-origin: 10.4px 10.2px;
                -webkit-animation: loading 2s infinite ease 1.5s;
                animation: loading 2s infinite ease 1.5s;
            }
            .spinner:after {
                width: 10.4px;
                height: 10.2px;
                background: #5469d4;
                border-radius: 0 10.2px 10.2px 0;
                top: -0.1px;
                left: 10.2px;
                -webkit-transform-origin: 0px 10.2px;
                transform-origin: 0px 10.2px;
                -webkit-animation: loading 2s infinite ease;
                animation: loading 2s infinite ease;
            }
            @keyframes loading {
                0% {
                    -webkit-transform: rotate(0deg);
                    transform: rotate(0deg);
                }
                100% {
                    -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
                }
            }
            @media only screen and (max-width: 600px) {
                form {
                    width: 80vw;
                }
            }

        `}
        </style>
    )
}

export default AppCss;
