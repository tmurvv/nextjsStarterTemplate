import React from 'react';
import { cssVariables } from '../constants/cssVariables'

function ContactCSS() {
    return (
        <style jsx="true">{`
            .contactContainer {
                background-image: linear-gradient(to bottom, ${cssVariables.primaryColourWhite}, #ffffff 300px);
                padding: 30px;
                padding-top: 70px;
                height: fit-content;
                margin-top: 0;
            }
            .contact {
                width: 100%;
            }
            .contactItem {
                background-color: transparent;
                padding: 20px;
                text-align: center;
                margin: auto;
                flex: 5;
            }
            .contactContainer h1 {
                font-size: 48px;
                margin-bottom: 50px;
                width: 100%;
                text-align: center;
            }
            .contactContainer p,
            .contactContainer blockquote {
                text-align: justify;
            }
            .contactContainer blockquote {
                font-size: 14px;
            }
            .contact h2 {
                margin-block-end:0;
                margin-block-start:0;
            }
            .contactDivider {
                margin: 50px auto;
                height: 2px;
                width: 80%;
            }
            .contactDivider img {
                width: 100%;
            }
            .contactContainer a {
                color: {$tertiaryColour};
                font-size: 18px;
            }
            .peopleContainer {
                display: flex;
                justify-content: space-between;
            }
            @media only screen and (max-width: 550px) {
                .peopleContainer {
                    flex-direction: column;
                }
            }
            .personContainer {
               flex: 5;
            }
            .personContainer>p>span {
                font-style: italic;
            }
            .imgContainer {
                height: 180px;
                width: 180px;
                margin: 10px auto 45px;
            }
            .imgContainer img {
                width: 180px;
            }
            .buttons {
                display: flex;
                justify-content: space-between;
                height: 80px;
                width: 280px;
                margin: 25px auto 0;
            }
            .buttons>button {
                height: 30px;
            }
            .about {
                padding: 10px 20px 30px ;
                max-width: 1300px;
                margin: auto;
            }
            @media only screen and (max-width: 700px) {
                .about {
                    padding: 20px;
                }
            }
            @media only screen and (max-width: 700px) {
                .about {
                    padding: 20px 0;
                }
            }
            .about h2 {
                margin-bottom: 40px;
            }
        `}
    </style>
    )
}

export default ContactCSS;
