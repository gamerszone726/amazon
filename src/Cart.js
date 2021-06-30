import React from 'react';
import './Cart.css';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

function Cart({cartItems}) {
    return (
        <div className="Container">
            
            <CartItems cartItems={cartItems} />
            <CartTotal cartItems={cartItems} />
        </div>
    )
}

export default Cart;

