import React from 'react';
import './cart-icon.css';
import { ReactComponent as ShoppingIcon} from '../../Assets/Shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}
);

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps,
    mapDispatchToProps)(CartIcon);
