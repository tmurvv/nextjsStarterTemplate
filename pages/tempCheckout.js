import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";

const Checkout = props => {
    const [stripe, setStripe] = useState(null);

    useEffect(
        () => setStripe(window.Stripe(process.env.STRIPE_PUBLISHABLE_KEY)),
        []
    );

    const goToCheckout = () => {
        stripe
        .redirectToCheckout({
            sessionId: props.sessionId
        })
        .then(function(result) {
            console.log(result.error.message);
        });
    };

    return (
        <>
        <button onClick={()=>goToCheckout()}>Credit Card</button>
        <div className="paymenttypes">
            <img src="img/mastercard.png" alt="Mastercard Logo" className="cards" />
            <img src="img/visa.png" alt="Visa Logo" className="cards" />
            <img src="img/discover.jpg" alt="Discover Logo" className="cards" />
            <img src="img/americanexpress.png" alt="American Express Logo" className="cards" />
        </div>
        <button onClick={console.log('go to Paypal')}>PayPal</button>
        </>
    )
};

Checkout.getInitialProps = async function({ req }) {
    // if (req!==undefined && req.url) const )
  const res = await fetch(`http://localhost:3006/api/build-checkout/amt=${req.url.substr(req.url.indexOf("=")+1)}`);
  const data = await res.json();

  return {
    sessionId: data.id
  };
};

export default Checkout;










// import fetch from "isomorphic-unfetch";
// // import Route from 'next/router';
// import { useState, useEffect } from "react";
// import absoluteUrl from 'next-absolute-url';


// const Checkout = props => {
//   const [stripe, setStripe] = useState(null);

//   useEffect(
//     () => setStripe(window.Stripe(process.env.STRIPE_PUBLISHABLE_KEY)),
//     []
//   );

//   const goToCheckout = () => {
//     stripe
//       .redirectToCheckout({
//         sessionId: props.sessionId
//       })
//       .then(function(result) {
//         console.log(result.error.message);
//       });
//   };

//   return <button onClick={goToCheckout}>Pay</button>;
// };

// Checkout.getInitialProps = async function(ctx) {
//     // console.log('init', ctx.req.headers)
//     console.log('init', ctx.req.headers.host)
//     let origin;
//     // if (ctx.req.headers.host.startsWith('localhost')) origin = 'http://localhost:3000';
//      origin = 'https://onestopharpshop.take2tech.ca';
//   const res = await fetch(`${origin}/api/build-checkout`);
//   const data = await res.json();

//   return {
//     sessionId: data.id
//   };
// };

// export default Checkout;
