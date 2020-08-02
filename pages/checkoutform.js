import React, { useState, useEffect, useContext } from "react";

import { CartContext } from '../src/contexts/CartContext';
import { UserContext } from '../src/contexts/UserContext';
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { getTotal } from "../src/utils/checkoutHelpers";

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
        .fetch(`http://localhost:3000/api/v1/create-stripe-payment-intent?amt:8000`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // body: JSON.stringify({items: [{ id: "xl-tshirt" }]}) // Format for listing all stripe items
            body: JSON.stringify({"total": getTotal(cart, user)*100})
        })
        .then(res => {
            console.log('here', res.json)
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
            color: "#32325d"
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
        <form id="payment-form" onSubmit={handleSubmit}>
            <h3>Total: {getTotal(cart, user)}</h3>
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
        </form>
    );
}