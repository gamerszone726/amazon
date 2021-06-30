import React from 'react';
import './CartTotal.css';
import NumberFormat from 'react-number-format';

function CartTotal({cartItems}) {

        const getCount = () =>{
            let Count=0;
                //Looping each cartItems
            
            cartItems.forEach((item)=> {
                Count=Count+item.product.quantity;
            });

            return Count;
            
        }

        const getTotal = () =>{
            let Total=0;
            cartItems.forEach((item)=>{
                Total=Total+(item.product.price) * (item.product.quantity);
            })
            return Total;
        }

    return (
        <div className="CartTotal__Container">
            <h2>SubTotal ({getCount()} items): <NumberFormat value={getTotal()} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h2>
            <div className="Button">
                <button>Proceed to Checkout</button>

            </div>
           
        </div>
    )
}

export default CartTotal;
