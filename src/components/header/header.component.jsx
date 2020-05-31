import React from 'react';
import {auth} from '../../firebase/firebase.utils'
import './header.styles.scss'
import {Link} from 'react-router-dom';
import { ReactComponent as LuxeLogo } from '../../assets/Luxe-Logo.svg';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <LuxeLogo className='logo'></LuxeLogo>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/shop' className='option'>CONTACT</Link>
            {
                currentUser?
                (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
                :
                (<Link className='option' to='/signin'>SIGN IN</Link>)
            }
        </div>
    </div>
)

export default Header;