import { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';
import { branding } from '../constants/branding';
import { cssVariables } from '../constants/cssVariables';
import CartCss from '../styles/cart.css';


function Cart(props) {
    const { cart, setCart } = useContext(CartContext);
    const getNumItems = () => {
        let amt = 0
        cart.map(item => amt=amt+parseInt(item.product_quantity));
        return amt;
    }
    const getSubTotal = () => {
        let amt = 0
        cart.map(item => amt=amt+parseInt(item.product_quantity)*parseFloat(item.price));
        return amt;
    }
    return (
        <>
            <div id='cart'>
			<div className='items'>
			<h1>Shopping Cart</h1>
				<ul>
                    {cart.map(item => 
                        <li>
                            <div className='item'>
                                <div className='product_image'><img src={item.product_image} /></div>
                                <div className='description'>
                                    <h1>{item.description}</h1>
                                    <h2>In Stock - Ships Immediately</h2>
                                    <h3 className='delete'>Delete</h3>
                                    {/* <h3 className='save'>Save</h3> */}
                                </div>
                                <div className='product_quantity'>
                                    <div className='quantity_button'>
                                        <div className='how_many'>{item.product_quantity}</div>
                                        <div className='add_sub'>
                                            <div className='add'>+</div>
                                            <div className='sub'>-</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='price'>${item.price.toFixed(2)}</div>	
                            </div>
                        </li>
                    )}
                </ul>
			</div>
			<div className='subTotal'>
				<h1>Subtotal</h1>
				<h2>{getNumItems()} Items</h2>
				<h3>${getSubTotal().toFixed(2)}</h3>
				<h4>Shipping and Tax <br/> calculated at checkout. </h4>
                
				<div className='checkout'>
					Checkout
				</div>
				<form>
				<input type='checkbox' />This is a Gift
				</form>
			</div>
		</div>
            <CartCss />
        </>
    )
}

export default Cart;
