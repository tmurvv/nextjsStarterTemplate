import React from "react";
import { cssVariables } from '../constants/cssVariables'

function ProductCss() {
    return (
        <style jsx="true">{`
            .product {
                margin: 20px;
                width: 45%;
                text-align: center;
                max-width: 375px;
            }
            .product__description {
                height: 90px;
                overflow-y: auto;
                text-align: justify;
                margin-bottom: 25px;
                padding-right: 5px;
            }
            .product__image {
                height: 265px;
                width: unset;
                margin-top: 20px;
                max-width: 100%;
            }
            .product__price {
                margin: 25px 0;
                width: 100%;
                text-align: center;
                font-weight: 600;
            }
            .flyToCart {
                position: relative;
                animation-name: flyToCart;
                animation-duration: .75s;  
                animation-delay: 0;
                animation-fill-mode: backwards;
                animation-timing-function: ease-in;
            }
            @keyframes flyToCart {
                from {
                    bottom: 0px;
                    left: 0px;
                    width: 100%;
                    opacity: 1; 
                }
                to {
                    bottom: 450px;
                    left: 400px;
                    width: 25%;
                    opacity: 0;
                }
            }
        `}
        </style>
    )
}

export default ProductCss;
