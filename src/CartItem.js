import React from 'react'
import './CartItem.css'
import { db } from './firebase'

function CartItem({id, item}) {

    const options =[];

    for (let i=1;i<Math.max(item.quantity +1,20);i++){
        options.push(<option value={i}>Qty:{i}</option>)
    }

    const getChangedQuantity = (newQuantity) =>{
            db.collection('cartItems').doc(id).update({
                    quantity:parseInt(newQuantity)
            })

            
    }

    const DeleteItem = () => {
       
        db.collection('cartItems').doc(id).delete();
    }

    return (
        <div className="CartItem__Container">
            <div className="Cart__Item">

                <div className="Image__Container">
                    <img src={item.image} />
                </div>
                <div className="ItemInfo">
                    <div className="ItemTopInfo">
                        <h2> {item.name} </h2>
                    </div>
                    <div className="ItemBottomInfo">
                        <div className="ItemBottomQuantityInfo">
                            <select  
                                 value={item.quantity}
                                 onChange={(e)=>getChangedQuantity(e.target.value)}
                            >
                               {options}
                            </select>
                              
                        </div>
                        <div className="ItemBottomDeleteInfo">
                                <buttonDelete onClick={DeleteItem}>Delete</buttonDelete>
                        </div>
                    </div>
                </div>
                <div className="Pricing">
                    ${item.price}
                </div> 
            </div>
             
        

        </div>
    )
}

export default CartItem
