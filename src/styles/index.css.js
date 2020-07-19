import React from 'react';
import { cssVariables } from '../constants/cssVariables';

function IndexCss() {
    return (
        <style jsx="true">{`
            .index {
                background-image: linear-gradient(to bottom, ${cssVariables.primaryColourWhite}, #ffffff 300px);
                margin: 0;
                padding: 70px 30px 30px;
                height: 100vh;
            }
            .index h2 {
                margin-block-end:0;
                margin-block-start:0;
            }
        `}
    </style>
    )
}

export default IndexCss;
