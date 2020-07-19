import React from 'react';
// import BannerCss from '../styles/Banner.css';
 
function Product(props) {
    return (
        <div style={{flexDirection: 'column'}}>
            <div className="product">
                <img height='400px' className="harpImage" src={props.image} alt={props.imagealt}/>
                <p>{props.title}</p>
                <p>{props.price}</p>
            </div>
            <button className="snipcart-add-item product__button"
                data-item-id={props.title}
                data-item-price={props.price}
                data-item-url="/"
                data-item-description=""
                data-item-image={props.image}
                data-item-name={props.title}>
            Add to cart
            </button>
        </div>
    )
}

export default Product;