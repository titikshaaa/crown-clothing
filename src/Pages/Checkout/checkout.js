import React from 'react';
import './checkout.css';
import { connect  } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../Components/Checkout-item/checkout-item';
import StripeButton from '../../Components/Stripe-button/stripe-button';

const CheckoutPage = ({cartItems, total}) => (
<div className='checkout-page'>
    <div className='checkout-header'>
        <div className='header-block'>
            <span>Product</span>
        </div>
        <div className='header-block'>
            <span>Description</span>
        </div>
        <div className='header-block'>
            <span>Quantity</span>
        </div>
        <div className='header-block'>
            <span>Price</span>
        </div>
        <div className='header-block'>
            <span>Remove</span>
        </div>
    </div>
    {
        cartItems.map(cartItem =>
            <CheckoutItem cartItem={cartItem} key={cartItem.id} />)
    }
    <div className='total'>
        <span>TOTAL: ${total}</span>
    </div>
    <div className='warning'>
        *Please use the following test card details for payment*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </div>
    <StripeButton price={total} />
</div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems,
    total:selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage); 