import React, { useState, useEffect, useContext } from "react";

import { CartContext } from '../src/contexts/CartContext';
import { UserContext } from '../src/contexts/UserContext';
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { getTotal } from "../src/utils/checkoutHelpers";
import IndexCss from "../src/styles/index.css";

export default function CheckoutForm() {
    const { cart, setCart } = useContext(CartContext);
    const { user, setUser } = useContext(UserContext);
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        window
        .fetch(`https://findaharp-api-testing.herokuapp.com/api/v1/create-stripe-payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // body: JSON.stringify({items: [{ id: "xl-tshirt" }]}) // Format for listing all stripe items
            body: JSON.stringify({"total": getTotal(cart, user)*100})
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            setClientSecret(data.clientSecret);
        });
    }, []);
    const cardStyle = {
        style: {
        base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                color: "#32325d",
                margin: 'auto',
            }
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
        }
        }
    };
    const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };
    const handleSubmit = async ev => {
        ev.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
            name: ev.target.name.value
            }
        }
        });
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
        }
    };
    return (
        <div className='index' style={{minHeight:"90vh"}}>
            <form id="payment-form" onSubmit={handleSubmit} style={{margin: 'auto', marginTop: '50px'}}>
                <h2>Credit Card Payment</h2>
                <h4 style={{fontStyle:'italic', color: 'lightgrey', fontWeight: '300', marginTop: '0'}}>Powered by Stripe</h4>
                <h3 style={{margin: 'auto', marginBottom: '25px'}}>Total: {getTotal(cart, user)}</h3>
                <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
                <button
                    disabled={processing || disabled || succeeded}
                    id="submit"
                >
                    <span id="button-text">
                    {processing ? (
                        <div className="spinner" id="spinner"></div>
                    ) : (
                        "Pay"
                    )}
                    </span>
                </button>
                {/* Show any error that happens when processing the payment */}
                {error && (
                    <div className="card-error" role="alert">
                    {error}
                    </div>
                )}
                {/* Show a success message upon completion */}
                <p className={succeeded ? "result-message" : "result-message hidden"}>
                    Payment succeeded, see the result in your
                    <a
                    href={`https://dashboard.stripe.com/test/payments`}
                    >
                    {" "}
                    Stripe dashboard.
                    </a> Refresh the page to pay again.
                </p>
                <img style={{width: 'auto', marginTop: '30px', marginBottom: '-15px'}} src='img/creditcardgroup.jpg' alt='credit card logos, mastercard, visa, discover, AmEx' />
            </form>
            <form id="payment-form" onSubmit={handleSubmit} style={{margin: 'auto', marginTop: '50px'}}>
                <h2>Paypal Payment</h2>
                <h3 style={{margin: '25px 0'}}>Total: {getTotal(cart, user)}</h3>
                <p>Paypal payment under construction</p>
                
            </form>
            <IndexCss />
        </div>
    );
}