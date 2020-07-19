import React, { useContext } from 'react';
import Link from 'next/link';

//internal
import NavBarCss from '../styles/navbar.css';
// import { UserContext } from '../contexts/UserContext';

export default function NavBar(props) {
    //#region For Auth
    // const  {value, setValue}= useContext(UserContext);
    // const { user, setUser } = useContext(UserContext);

    // if (!user.firstname) setUser({
    //     firstname: 'login',
    //     lastname: '',
    //     email: '',
    //     newsletter: false,
    //     distanceunit: 'miles',
    //     currency: 'USD',
    //     _id: '',
    // });
    //#endregion
    
    return(
        <>
        <div className='navBarOuter'>
            {props.mobile&&(!props.open||props.open===undefined)?
                <div className='hamburgerMenu' onClick={() => props.handleNavOpen()}>
                    <img src='/img/hamburger.png' alt="open mobile menu icon"/>
                </div>:''
            }
            {!props.mobile || props.mobile&&props.open?
                <div className='navLinks'>
                    {props.mobile&&props.open?
                        <div className='closeIcon' onClick={props.handleNavOpen}>
                            <img src='/img/close.png' alt="close mobile menu icon"/>
                        </div>:''
                    }
                    <Link href='/'>
                        <a onClick={props.handleNavOpen}>Starter Template</a>
                    </Link>
                    <Link href='/Page1' as='/Page1'>
                        <a onClick={props.handleNavOpen}>Harps for Sale</a>
                    </Link>
                    <Link href='/Page2' as='/Page2'>
                        <a onClick={props.handleNavOpen}>Page Two</a>
                    </Link>        
                    <Link href='/Contact' as='/Contact'>
                        <a onClick={props.handleNavOpen}>Contact/About</a>
                    </Link>
                    
                    {/* <Link href={user&&user.firstname&&user.firstname.toUpperCase()!=='LOGIN'?'/userprofile':'/loginsignup'} as={user.firstname==='Login'?'/loginsignup':'/userprofile'}>
                        <a id='userName' onClick={props.handleNavOpen}>{user.firstname}</a>
                    </Link> */}
                    <Link href='/ActivateEmail' as='/activateemail'>
                        <a style={{display: 'none'}} onClick={props.handleNavOpen}>Contact/About</a>
                    </Link>
                    <Link href='/ResetPassword' as='/resetpassword'>
                        <a style={{display: 'none'}} onClick={props.handleNavOpen}>Contact/About</a>
                    </Link>
                </div>:''
            }
        </div>
        <NavBarCss />
        </>   
    )
}
