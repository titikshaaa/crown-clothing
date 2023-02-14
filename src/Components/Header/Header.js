import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../Assets/Crown.svg";
import { auth } from '../../Firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../Cart-icon/cart-icon';
import Cart from '../Cart/cart';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header =({currentUser, hidden}) =>{
    return(
        <div className='header'>
           <Link to='/' className='logo-container'>
              <Logo className='logo' />
           </Link>
           <div className='options'>
               <Link className='option' to='/shop'>SHOP</Link>
               <Link className='option' to='/shop'>CONTACT</Link>
               {
                   currentUser ? <div className='option' 
                   onClick={() => auth.signOut()}>SIGN OUT</div> 
                   : <Link className='option' to='/signin'>SIGN IN</Link>
               }
               <CartIcon />
           </div>
           {
               hidden ? null : <Cart />
           }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);