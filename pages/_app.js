// import App from 'next/app'
import Head from 'next/head';
import React, {useState, useEffect} from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import uuid from 'react-uuid';
// import * as gtag from '../lib/gtag'

// internal
import {CartContext} from "../src/contexts/CartContext";
import {UserContext} from "../src/contexts/UserContext";
import {CartOpenContext} from "../src/contexts/CartOpenContext";
import AppCss from '../src/styles/app.css.js';
import Banner from '../src/components/Banner';
import NavBar from '../src/components/NavBar';
import Cart from '../src/components/Cart';
import Footer from '../src/components/Footer';
import { branding } from '../src/constants/branding.js';
//#region For Auth
// import {UserContext} from "../src/contexts/UserContext";
// import ActivateEmail from '../src/components/ActivateEmail';
// import ResetPassword from '../src/components/ResetPassword';
//#endregion

const promise = loadStripe("pk_test_51H9CjyEmELhumIsBlNuKNzJwXDcJn8x0yiGbWTxKfnRDvT7UyQxKQtIMqJnDAEw7KWdeqCVv2QDzpPhdZ2IqIa1i006AHbvVXt");
const cartOpenInit = false;
const cartInit = [];
const userInit = {
    id: '',
    fname: '',
    lname: '',
    email: '',
    phone: '',
    address: '',
    address2: '',
    city: '',
    state_prov: '',
    zip_postal: '',
    country: '',
    region: '',
    shippingDifferent: '',
    paymentType: ''
}

function MyApp(props) {
    const { Component, pageProps } = props;
    const [windowWidth, setWindowWidth] = useState(0);
    const [navOpen, setNavOpen] = useState(false);
    const [cart, setCart] = useState(cartInit);
    const [user, setUser] = useState(userInit);
    const [cartOpen, setCartOpen] = useState(cartOpenInit);
    
    // Google Analytics
    // useEffect(() => {
    //     const handleRouteChange = (url) => {
    //         gtag.pageview(url)
    //     }
    //     Router.events.on('routeChangeComplete', handleRouteChange)
    //     return () => {
    //         Router.events.off('routeChangeComplete', handleRouteChange)
    //     }
    // }, [])

    // reset window width on window resize
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize) }
    }, []);
    function handleNavOpen() {
        if (navOpen===undefined) {setNavOpen(true); return;};
        setNavOpen(!navOpen);
    }
    return( 
        <>  
            <Head>
                <script src="https://js.stripe.com/v3/" />
            </Head>
            <Banner />
            {/* Without Auth */}
            <UserContext.Provider value={{user, setUser}}>
                <CartOpenContext.Provider value={{cartOpen, setCartOpen}}>
                    <CartContext.Provider value={{cart, setCart}}>
                        <NavBar mobile={windowWidth<=550} open={navOpen} handleNavOpen={handleNavOpen}/>
                        <Cart cartopen={cartOpen}/>
                        <Elements stripe={promise}>
                            <Component {...pageProps} />
                        </Elements>
                        <Footer />
                        <AppCss />
                    </CartContext.Provider>
                </CartOpenContext.Provider>
            </UserContext.Provider>
            
            {/* With Auth */}
            {/* <UserContext.Provider value={{user, setUser}}>
            {props.router.query.reset
                ?<ResetPassword />
                :props.router.query.activateemail
                    ?<ActivateEmail found={true}/>
                    :
                        <>
                            <NavBar mobile={windowWidth<=550} open={navOpen} handleNavOpen={handleNavOpen}/>
                            <Component {...pageProps} />
                            <Footer />
                        </>
            }
            </UserContext.Provider>
            <AppCss />
            <div hidden id="snipcart" data-api-key="NjgzYTM5MDUtNTQwYy00YmJmLThlMjMtNTExNTViYjAyZGQyNjM3MzA3MDM0MDE0NTM1ODY1"></div>
            <script src="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js"></script> 
             */}
        </>
    )
}
export async function getServerSideProps(context) {
    return {
      props: {query: context.query}, // will be passed to the page component as props
    }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
