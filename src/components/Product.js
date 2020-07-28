import {withRouter} from 'next/router'

const Product = (props) => {
    return (
        <div className="product" style={{margin: '7.5px'}}>
            <h2 className="product__title">{props.product.name}</h2>
            <p className="product__description">{props.product.description}</p>
            <img height='400px' src={props.product.image} alt={props.product.name} className="product__image"/>
            <div className="product__price-button-container">
                <div className="product__price">${props.product.price.toFixed(2)}</div>
                <button 
                    className="product__button"
                    data-item-id={props.product.id}
                    data-item-name={props.product.name}
                    data-item-price={props.product.price}
                    data-item-url={props.router.pathname}
                    data-item-image={props.product.image}>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default withRouter(Product)
