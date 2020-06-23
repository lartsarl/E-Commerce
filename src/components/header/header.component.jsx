import React from 'react';
import {auth} from '../../firebase/firebase.utils'
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles.jsx'
import { ReactComponent as LuxeLogo } from '../../assets/Luxe-Logo.svg';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selector'

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <LuxeLogo></LuxeLogo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
                currentUser?
                (<OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>)
                :
                (<OptionLink to='/signin'>SIGN IN</OptionLink>)
            }

            <CartIcon></CartIcon>
        </OptionsContainer>
        {hidden ? null : (<CartDropdown></CartDropdown>)}
    </HeaderContainer>
);

const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser, 
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);