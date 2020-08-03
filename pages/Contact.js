// packages
import React from 'react';
import Head from 'next/head';

// internal
import PageTitle from '../src/components/PageTitle';
import ContactUsForm from '../src/components/ContactUsForm';
import ContactCSS from '../src/styles/contact.css';
import { branding } from '../src/constants/branding';

function Contact() {
    return (
        <>
        <Head>
            <title>findaharp.com -- Contact Us</title>
            <meta name="Description" content="Contact Us -- Lever Harps, Pedal Harps, Wire Harps, Celtic Harps, Irish Harps, Folk Harps" key="title" />
        </Head>
        <div className='contactContainer'>
            <PageTitle maintitle={ branding.pageContactTitle } subtitle={ branding.pageContactSub } />
            <div>
                <ContactUsForm handleCloseContact={() => console.log('')} />
            </div>
            <div className='contactDivider'>
                <hr /> 
            </div>          
            <div className={`contactItem about`}>
                <h2>About us</h2>
                <p style={{textAlign: 'center'}}>About us coming soon!!</p>                       
            </div>
            <ContactCSS />
        </div>
        </>
    )
}

export default Contact;
