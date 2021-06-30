import React from 'react';
import './CartItems.css'
import CartItem from './CartItem'

function CartItems({cartItems}) {
    return (
        <div className="CartItems__Container">
            <div className="Title">
                <h1>Shopping Cart</h1>

            </div>
            
            <hr />

            <div className="ItemsContainer">
                {
                   cartItems.map((item)=>(
                       <CartItem 
                            id={item.id}
                            item={item.product}                      
                       />
                   ))
                }
               
            </div>
            
            
        </div>
    )
}

export default CartItems;
