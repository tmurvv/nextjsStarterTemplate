import React, { useState, useContext } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { branding } from '../src/constants/branding';
import { cssVariables } from '../src/constants/cssVariables';
import CheckoutCss from '../src/styles/checkout.css';
import { CartContext } from '../src/contexts/CartContext';
import { UserContext } from '../src/contexts/UserContext';
import {
    getNumItems,
    getSubTotal,
    incQty,
    decQty,
    deleteItem
} from '../src/utils/helpers';

function Checkout() {
    const { cart, setCart } = useContext(CartContext);
    const { user, setUser } = useContext(UserContext);
    const [ change, setChange ]  = useState(false);

    const handleChange = (evt) => {
        switch (evt.target.name) {
            case 'fname': 
                setUser({...user, fname: evt.target.value});
                setChange(true);
                break
            case 'lname': 
                setUser({...user, lname: evt.target.value});
                setChange(true);
                break
            case 'email': 
                setUser({...user, email: evt.target.value});
                setChange(true);
                break
            case 'phone': 
                setUser({...user, phone: evt.target.value});
                setChange(true);
                break
            case 'address': 
                setUser({...user, address: evt.target.value});
                setChange(true);
                break
            case 'address2': 
                setUser({...user, address2: evt.target.value});
                setChange(true);
                break
            case 'city': 
                setUser({...user, city: evt.target.value});
                setChange(true);
                break 
            case 'zip_postal': 
                setUser({...user, zip_postal: evt.target.value});
                setChange(true);
                break
            case 'notes': 
                setUser({...user, notes: evt.target.value});
                setChange(true);
                break
            case 'shippingDifferent': 
                setUser({...user, shippingDifferent: !user.shippingDifferent});
                setChange(true);
                break
            default :
        }
    }
    function selectCountry(val) {
        setUser({...user, country: val});
    }
     
    function selectRegion(val) {
        setUser({...user, state_prov: val});
    }
    return (
        <>
            <header>
                        <h1>Checkout</h1>
                        <h3><span style={{fontStyle: 'italic', textTransform: 'none'}}>for</span>&nbsp;&nbsp;{user.fname} {user.lname}</h3>
            </header>
            <div class="wrapper">
                
                <div class="row">
                    <form method="get">
                        <div class="col-7 col">
                            <h3 class="topborder"><span>Billing Details</span></h3>
                            <div class="width50 padright">
                                <label for="fname">First Name</label>
                                <input type="text" name="fname" value={user.fname} onChange={handleChange} id="fname" required />
                            </div>
                            <div class="width50">
                                <label for="lname">Last Name</label>
                                <input type="text" name="lname" value={user.lname} onChange={handleChange} id="lname" required />
                            </div>
                            <label for="address">Address</label>
                            <input type="text" name="address" value={user.address} onChange={handleChange} id="address" required />
                            <input type="text" name="address2" value={user.address2} onChange={handleChange} id="address2" placeholder="Optional" />
                            <label for="city">Town / City</label>
                            <input type="text" name="city" value={user.city} onChange={handleChange} id="city" required />
                            <div class="padright">
                                <div>
                                    <CountryDropdown
                                        value={user.country}
                                        name='country'
                                        onChange={(val) => selectCountry(val)} 
                                    />
                                    <RegionDropdown
                                        country={user.country}
                                        value={user.state_prov}
                                        name='state_prov'
                                        onChange={(val) => selectRegion(val)} 
                                    />
                                </div>
                            </div>
                            <div>
                                <label for="zip_postal">Zip/Postal Code</label>
                                <input type="text" name="zip_postal" value={user.zip_postal} onChange={handleChange} id="zip_postal" placeholder="Postcode / Zip" required />
                            </div>
                            <div class="padright">
                                <label for="email">Email Address</label>
                                <input type="email" name="email" value={user.email} onChange={handleChange} id="email" required />
                            </div>
                            <div>
                                <label for="phone">Phone</label>
                                <input type="text" name="phone" value={user.phone} onChange={handleChange} id="phone" required />
                            </div>
                            <div style={{display: 'block'}}>
                                <h3 class="topborder"><span>Shipping Address</span></h3>
                                <input type="checkbox" value="3" name="shippingDifferent" onChange={handleChange} checked={user.shippingDifferent} /><p>Ship to a different address?</p>
                                <label for="notes" class="notes">Order Notes</label>
                                <textarea name="notes" value={user.notes} onChange={handleChange} id="notes" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                            </div>
                        </div>
                        <div class="col-5 col order">
                            <h3 class="topborder"><span>Your Order</span></h3>
                            <div class="row">
                                <h4 class="inline">Product</h4>
                                <h4 class="inline alignright">Total</h4>
                            </div>
                            <div>
                                <p class="prod-description inline">Nice Dress<div class="qty inline"><span class="smalltxt">x</span> 1</div>
                                </p>
                            </div>
                            <div><h5>Cart Subtotal</h5></div>
                            <div>
                                <h5 class="inline difwidth">Shipping and Handling</h5>
                                <p class="inline alignright center">Free Shipping</p>
                            </div>
                            <div><h5>Order Total</h5></div>

                            <div>
                                <h3 class="topborder"><span>Payment Method</span></h3>
                                <input type="radio" value="banktransfer" name="payment" checked /><p>Credit Card <span style={{fontStyle: 'italic', fontSize: '12px'}}>(powered by Stripe)</span></p>
                                <div class="paymenttypes">
                                    <img src="img/mastercard.png" alt="Visa, Mastercard, Discover and Amex Credit Cards" class="cards" />
                                    <img src="img/visa.png" alt="Visa, Mastercard, Discover and Amex Credit Cards" class="cards" />
                                    <img src="img/discover.jpg" alt="Visa, Mastercard, Discover and Amex Credit Cards" class="cards" />
                                    <img src="img/americanexpress.png" alt="Visa, Mastercard, Discover and Amex Credit Cards" class="cards" />
                                </div>
                            </div>
                            <div>
                                <input type="radio" value="paypal" name="payment" /><p>Paypal</p>
                                <div className='paymenttypes'>
                                    <legend><img id='paypallogo' src="img/paypal.png" alt="PayPal Logo" class="paypal" /></legend>
                                </div>
                            </div>
                            <input type="submit" name="submit" value="Place Order" class="redbutton" />
                        </div>
                    </form>
                </div>
            </div>
            <CheckoutCss />
        </>
    )
}

export default Checkout;

// EXTRA CODE
//#region ASK FOR ACCOUNT
{/* <input type="checkbox" value="2" name="checkbox" /><p>Create an account?</p> */}                
{/* <div class="row">
                    <div class="col-12 col">
                        <div class="info-bar">
                            <p>
                                <i class="fa fa-info"></i> 
                                Returning customer? <a href="#">Click here to login</a>
                            </p>
                        </div>
                        <p>
                            If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing &amp; Shipping section.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col">
                        <form method="get" class="user-pswd">
                            <div class="width50 padright">
                                <label for="username">Username or email</label>
                                <input type="text" name="username" id="username" required />
                            </div>
                            <div class="width50">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password" required />
                            </div>
                                <input type="submit" name="submit" value="Login" /><input type="checkbox" value="1" name="checkbox" /><p>Remember me</p>
                        </form>
                        <p><a href="#">Lost your password?</a></p>
                    </div>
                </div> */}
//#endregion
//#region ASK FOR COUPON
                {/* <div class="row">
                     <div class="col-12 col">
                        <div class="info-bar">
                            <p>
                                <i class="fa fa-info"></i> 
                                Have a coupon? <a href="#">Click here to enter your code</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 col coupon">
                        <form method="get">
                            <input type="text" name="coupon" id="coupon" placeholder="Coupon code" />
                            <input type="submit" name="submit" value="Apply Coupon" />
                        </form>
                    </div>
                </div> */}

//#endregion