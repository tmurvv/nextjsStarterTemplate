import { useContext } from 'react';
import uuid from 'react-uuid';

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
    const incQty = (e) => {
        const updateItemId = e.target.getAttribute('dataid');
        let tempCart = [...cart]
        const idx = tempCart.findIndex(item => item.id===updateItemId);
        tempCart[idx].product_quantity = parseInt(tempCart[idx].product_quantity)+1;
        setCart(tempCart);
    };
    const decQty = (e) => {
        const updateItemId = e.target.getAttribute('dataid');
        let tempCart = [...cart]
        const idx = tempCart.findIndex(item => item.id===updateItemId);
        tempCart[idx].product_quantity = parseInt(tempCart[idx].product_quantity)-1;
        setCart(tempCart);
    }
    const deleteItem = (e) => {
        confirm("Are you sure you want to delete this line item?");
        const updateItemId = e.target.getAttribute('dataid');
        let tempCart = [...cart]
        tempCart = tempCart.filter(item => item.id!==updateItemId);
        setCart(tempCart);
    }
    return (
        <>
            <div id='cart'>
			<div className='items'>
			<h1>Shopping Cart</h1>
				<ul>
                    {cart.length===0?
                        <li key={uuid()}>"No Items in Cart"</li>
                    :cart.map(item => 
                        <li key={uuid()}>
                            <div className='item'>
                                <div className='product_image'><img src={item.product_image} /></div>
                                <div className='description'>
                                    <h1>{item.description}</h1>
                                    <h2>In Stock - Ships Immediately</h2>
                                    <button 
                                        className='redFontButton' 
                                        onClick={e => deleteItem(e)} 
                                        dataid={item.id} 
                                    >
                                        delete
                                    </button>
                                </div>
                                <div className='product_quantity'>
                                    <div className='quantity_button'>
                                        <div className='how_many'>{item.product_quantity}</div>
                                        <div className='add_sub'>
                                            <div className='add' onClick={(e) => incQty(e)} dataid={item.id}>+</div>
                                            <div className='sub' onClick={(e) => decQty(e)} dataid={item.id}>-</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='price'>${(item.price*item.product_quantity).toFixed(2)}</div>	
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
