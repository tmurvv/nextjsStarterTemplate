import React, { useState, useContext } from 'react';
import uuid from 'react-uuid';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import SalesTax from 'sales-tax-cad';
import { branding } from '../src/constants/branding';
import { cssVariables } from '../src/constants/cssVariables';
import CheckoutCss from '../src/styles/checkout.css';
import Cart from '../src/components/Cart'
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
            case 'country': 
                setUser({...user, country: evt.target.value});
                setChange(true);
                break
            case 'region': 
                setUser({...user, region: evt.target.value});
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
            case 'paymentType': 
                setUser({...user, paymentType: evt.target.value});
                setChange(true);
                break
            default :
        }
    }
    function selectCountry(val) {
        setUser({...user, country: val});
    }
    function getProvCode(prov) {
        switch (prov) {
            case "Prince Edward Island":
                return "PE";
            case "Nova Scotia":
                return "NS";
            case "New Brunswick":
                return "NB";
            case "Quebec":
                return "QC";
            case "Newfoundland and Labrador":
                return "NL";
            case "Ontario":
                return "ON";
            case "Manitoba":
                return "MB";
            case "Saskatchewan":
                return "SK";
            case "Alberta":
                return "AB";
            case "British Columbia":
                return "BC";
            case "Yukon":
                return "YN";
            case "Northwest Territories":
                return "NT";
            case "Nunavut":
                return "NU";
            default:
        }
    }
    function shipping() {
        if (!user.country) return 'select country';
        switch (user.country) {
            case 'Canada':
                return 8.00;
            case 'United States':
                return 12.00;
            case 'select country':
                return 'select country'
            default:
                return 15.00;
        }
    }
    function tax() {
        console.log(user.state_prov)
        console.log(cart)
        console.log(getSubTotal(cart))
        try {
            const tax = new SalesTax(
                // getProvCode(user.state_prov),
                "YK",
                getSubTotal(cart),
                2
            );
            return tax.sum().toFixed(2);
        } catch(e) {
            return 'select region';
        }       
    }
    function getTotal() {
        console.log(user)
        console.log(getSubTotal(cart), user.country, user.state_prov)
        if (!user.country || !user.state_prov || getSubTotal(cart) === 0) return '---.--';
        return (Number(getSubTotal(cart)) + Number(shipping()) + Number(tax())).toFixed(2);
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
            <div className="wrapper">
                <div className="row">
                    <form style={{display: 'flex'}} method="get">
                        <div className="col-7 col">
                            <h3 className="topborder"><span>Shipping Details</span></h3>
                            <div className="width50 padright">
                                <label for="fname">First Name</label>
                                <input type="text" name="fname" value={user.fname} onChange={handleChange} id="fname" required />
                            </div>
                            <div className="width50">
                                <label for="lname">Last Name</label>
                                <input type="text" name="lname" value={user.lname} onChange={handleChange} id="lname" required />
                            </div>
                            <label for="address">Address</label>
                            <input type="text" name="address" value={user.address} onChange={handleChange} id="address" required />
                            <input type="text" name="address2" value={user.address2} onChange={handleChange} id="address2" placeholder="Optional" />
                            <label for="city">Town / City</label>
                            <input type="text" name="city" value={user.city} onChange={handleChange} id="city" required />
                            <div className="padright">
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
                            <div className="padright">
                                <label for="email">Email Address</label>
                                <input type="email" name="email" value={user.email} onChange={handleChange} id="email" required />
                            </div>
                            <div>
                                <label for="phone">Phone</label>
                                <input type="text" name="phone" value={user.phone} onChange={handleChange} id="phone" required />
                            </div>
                            {/* <div style={{display: 'block'}}>
                                <h3 className="topborder"><span>Shipping Address</span></h3>
                                <input type="checkbox" value="3" name="shippingDifferent" onChange={handleChange} checked={user.shippingDifferent} /><p>Ship to a different address?</p>
                                <label for="notes" className="notes">Order Notes</label>
                                <textarea name="notes" value={user.notes} onChange={handleChange} id="notes" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                            </div> */}
                        </div>
                        <div className="col-5 col order">
                            <h3 className="topborder"><span>Your Order</span></h3>
                            <div className='products'>
                                <table style={{tableLayout: "auto", width: '100%'}}>
                                    <tr>
                                        <th>Qty</th>
                                        <th>Product</th>
                                        <th>SubTotal</th>
                                    </tr>
                                    {cart.map(item=>
                                        <tr>
                                            <td style={{width:"10%"}}>{item.product_quantity}</td>
                                            <td style={{width:"70%"}}>{item.description}</td>
                                            <td style={{textAlign:'right', width:"20%"}}>${(item.product_quantity*item.price).toFixed(2)}</td>
                                        </tr>
                                    )}
                                </table>
                            </div>
                            <div className="flexSB">
                                <div className="shipping" style={{color:"black",border: 'none',paddingBottom:'-10px'}}>Shipping</div>
                                <div style={{textAlign:'right',color: 'black',border: 'none',paddingBottom:'-10px'}}>{parseFloat(shipping()).toFixed(2)}</div>
                            </div>
                            <div className="flexSB">
                                <div style={{color:"black",border: 'none',paddingBottom:'-10px'}}>Taxes</div>
                                <div style={{textAlign:'right', color: 'black',border: 'none',paddingBottom:'-10px'}}>{tax()}</div>
                            </div>
                            <div className="flexSB">
                                <div style={{color:"black"}}>ORDER TOTAL</div>
                                <div style={{textAlign:'right', color: 'black'}}>${getTotal()}</div>
                            </div>
                            <div>
                                <h3 className="topborder"><span>Payment Method</span></h3>
                                <input type="radio" value="creditcard" name="payment" onChange={handleChange}checked /><p>Credit Card <span style={{fontStyle: 'italic', fontSize: '12px'}}>(powered by Stripe)</span></p>
                                <div className="paymenttypes">
                                    <img src="img/mastercard.png" alt="Visa, Mastercard, Discover and Amex Credit Cards" className="cards" />
                                    <img src="img/visa.png" alt="Visa, Mastercard, Discover and Amex Credit Cards" className="cards" />
                                    <img src="img/discover.jpg" alt="Visa, Mastercard, Discover and Amex Credit Cards" className="cards" />
                                    <img src="img/americanexpress.png" alt="Visa, Mastercard, Discover and Amex Credit Cards" className="cards" />
                                </div>
                            </div>
                            <div>
                                <input type="radio" value="paypal" name="payment" onChange={handleChange}/><p>Paypal</p>
                                <div className='paymenttypes'>
                                    <legend><img id='paypallogo' src="img/paypal.png" alt="PayPal Logo" className="paypal" /></legend>
                                </div>
                            </div>
                            <input type="submit" name="submit" value="Place Order" className="redbutton" />
                        </div>
                        <CheckoutCss />
                    </form>
                </div>
            </div>
            
        </>
    )
}

export default Checkout;

// EXTRA CODE
//#region ASK FOR ACCOUNT
{/* <input type="checkbox" value="2" name="checkbox" /><p>Create an account?</p> */}                
{/* <div className="row">
                    <div className="col-12 col">
                        <div className="info-bar">
                            <p>
                                <i className="fa fa-info"></i> 
                                Returning customer? <a href="#">Click here to login</a>
                            </p>
                        </div>
                        <p>
                            If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing &amp; Shipping section.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col">
                        <form method="get" className="user-pswd">
                            <div className="width50 padright">
                                <label for="username">Username or email</label>
                                <input type="text" name="username" id="username" required />
                            </div>
                            <div className="width50">
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
                {/* <div className="row">
                     <div className="col-12 col">
                        <div className="info-bar">
                            <p>
                                <i className="fa fa-info"></i> 
                                Have a coupon? <a href="#">Click here to enter your code</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col coupon">
                        <form method="get">
                            <input type="text" name="coupon" id="coupon" placeholder="Coupon code" />
                            <input type="submit" name="submit" value="Apply Coupon" />
                        </form>
                    </div>
                </div> */}

//#endregion