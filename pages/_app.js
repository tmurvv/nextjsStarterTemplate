// import App from 'next/app'
import Head from 'next/head';
import React, {useState, useEffect} from 'react';
import uuid from 'react-uuid';
// import * as gtag from '../lib/gtag'

// internal
import {CartContext} from "../src/contexts/CartContext";
import AppCss from '../src/styles/app.css.js';
import Banner from '../src/components/Banner';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';
import { branding } from '../src/constants/branding.js';
//#region For Auth
// import {UserContext} from "../src/contexts/UserContext";
// import ActivateEmail from '../src/components/ActivateEmail';
// import ResetPassword from '../src/components/ResetPassword';
//#endregion

const testCart = [
    {
        id: uuid(), 
        description: "A Quiet Afternoon CD", 
        price: 15.00, 
        product_image: "img/QuietAfternoon.webp",
        product_quantity: '1'
    },
    {
        id: uuid(), 
        description: "Come Just As You Are CD", 
        price: 15.00, 
        product_image: "img/ComeJustAs.webp", 
        product_quantity: '1'
    }
];

function MyApp(props) {
    const { Component, pageProps } = props;
    // const [user, setUser] = useState(['Login', '', '', 'miles']); // firstname, lastname, email, distanceunit
    const [windowWidth, setWindowWidth] = useState(0);
    const [navOpen, setNavOpen] = useState(false);
    const [cart, setCart] = useState(testCart);
    
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
            <Banner />
            {/* Without Auth */}
            <CartContext.Provider value={{cart, setCart}}>
                <NavBar mobile={windowWidth<=550} open={navOpen} handleNavOpen={handleNavOpen}/>
                <Component {...pageProps} />
                <Footer />
                <AppCss />
            </CartContext.Provider>
            
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
