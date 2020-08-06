// packages
import React, { useState, useReducer } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';

// internal
import ContactUsFormCSS from '../styles/contactusform.css';
import { resultInfoReducer } from '../reducers/reducers';

const resultInfoInitialState = {
    resultContainer: 'none',
    resultText: 'none',
    resultOkButton: 'none',
    resultTryAgainButton: 'none',
    tryAgainMarginLeft: '0',
    resultImg: 'none'
}

function ContactUsForm() {
    const [resultInfo, dispatchResultInfo] = useReducer(resultInfoReducer, resultInfoInitialState);
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        contactemail: '',
        contactcomments: '',
        newsletter: false,
        change: false
    });
    const handleChange = (evt) => {
        switch (evt.target.name) {
            case 'firstname': 
                setUser({...user, firstname: evt.target.value, change: true});
                break
            case 'lastname': 
                setUser({...user, lastname: evt.target.value, change: true});
                break
            case 'contactemail': 
                setUser({...user, contactemail: evt.target.value, change: true});
                break
            case 'contactcomments': 
                setUser({...user, contactcomments: evt.target.value, change: true});
                break     
            case 'newsletter': 
                setUser({...user, newsletter: !user.newsletter, change: true});
                break     
            default :
        }
    }
    function clearForm() {
        setUser({
            firstname: '',
            lastname: '',
            contactemail: '',
            contactcomments: '',
            newsletter: false,
            change: false
        });
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const resultText = document.querySelector('#loadingLoginText');
        
        if (!user.contactemail) {
            resultText.innerText = "Email is required";
            dispatchResultInfo({type: 'tryAgain'});
            return;
        }
        
        const contact = {
            contactid: uuid(),
            date: new Date(Date.now()),
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.contactemail,
            comments: user.contactcomments,
            selleremail: 'tech@take2tech.ca',
            newsletter: user.newsletter
        }
        try {
            // send contactUs inq
            const res = await axios.post(`${process.env.backend}/api/v1/contactform`, contact);
            resultText.innerText=`Contact form has been sent to this site administrator.`;
            dispatchResultInfo({type: 'OK'});
        } catch(e) {
            resultText.innerText=`Something went wrong. Please try again or send an email to harps@findaharp.com. ${e.message}`;
            dispatchResultInfo({type: 'tryAgain'});
        }  
        clearForm();
    }
    function resetResults() {
        document.querySelector('#loadingLoginText').innerText='';
        dispatchResultInfo({type: 'initial'});
    }
   return (
        <>  
            <div className='contactFormContainer'> 
                <div className={`contactArea`}>
                <div className={`contactText`}>    
                    <h3>Suggestions</h3>
                    <p>We welcome your suggestions to make our site as thorough and as easy to use as possible.</p><br></br><br></br>
                    <h3>Other reasons to contact us</h3>
                    <p>We are always here to answer your questions or resolve any issues with our site.</p>
                </div>
                <form className='contactForm'> 
                    <div id="loadingLogin" style={{display: resultInfo.resultContainer}}>
                        <img id='loadingLoginImg' style={{display: resultInfo.resultImg}} src='/img/spinner.gif' alt='loading spinner' />
                        <p id="loadingLoginText"></p>
                        <div className='flex-sb'>
                            <button 
                                id='loadingLoginOk' 
                                type='button' 
                                className='submit-btn' 
                                onClick={resetResults}
                                style={{display: resultInfo.resultOkButton}}
                            >OK</button>
                            <button 
                                id='loadingLoginTryAgain' 
                                type='button' 
                                className='submit-btn submit-btn-tryAgain' 
                                onClick={resetResults}
                                style={{display: resultInfo.resultTryAgainButton, marginLeft: resultInfo.tryAgainMarginLeft}}
                            >Try Again</button>
                        </div>
                    </div>    
                    <div className='inputGroup'>
                        <label name='firstname'>First Name </label>
                        <input
                            id={uuid()}
                            value={user.firstname}
                            onChange={handleChange}
                            name='firstname'
                        />
                    </div>
                    <div className='inputGroup'>
                        <label name='lastname'>Last Name </label>
                        <input
                            id={uuid()}id="outlined-helperText"
                            label="Last Name"
                            value={user.lastname}
                            onChange={handleChange}
                            name ='lastname'
                        />
                    </div>
                    <div className='inputGroup'>
                        <label name='email'>Email </label>
                        <input
                            id={uuid()}
                            name='contactemail'
                            value={user.contactemail}
                            onChange={handleChange}
                            required
                        />
                    </div>                 
                    <div className='inputGroup'>
                        <label name='contactcomments'>Comments </label>
                        <textarea
                            id={uuid()}
                            name='contactcomments'
                            value={user.contactcomments}
                            onChange={handleChange}
                            rows='6'
                        />
                    </div>   
                    <div style={{marginBottom: '-15px', marginTop:'25px', marginLeft: '98px', display: 'flex', justifyContent: 'flex-start'}}>
                        <input 
                            id={uuid()}
                            type='checkbox'
                            name='newsletter'
                            onChange={handleChange}
                            style={{marginLeft: '0', flex: '1', transform: 'translate(2.5px,5px'}}
                            checked={user.newsletter}
                        />
                        <label style={{marginLeft: '5px', flex: '19', textAlign: 'left'}} name='contactcomments'>Signup for our newsletter?<br />Fun talk about site is coming your way!! </label>
                    </div>      
                    <div className='buttons'>
                        <button
                            className='detailButton'
                            type='submit'
                            onClick={handleSubmit} 
                        >Submit
                        </button>
                        <button
                            className={`detailButton detailButton-cancel`}
                            type='button'
                            onClick={handleSubmit}
                        >Cancel
                        </button>
                    </div>         
                </form>
                </div>   
        </div> 
        <ContactUsFormCSS />
        </>
    )
}

export default ContactUsForm;
