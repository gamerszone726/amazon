import React from 'react';
import './Product.css';
import { db } from './firebase';


//props is nothing;
//It is just an Object which links the component with the database simply by passing itself to 
//the component as a parameter...+
function Product({ title, price, ratings, image, id}) {

    const addToCart = () =>{
        console.log(id);

        //Here we have created a constant variable cartItem which will check whether the product exists 
        //in our database or not if the Add to Cart Button is clicked

        const CartItem = db.collection('cartItems').doc(id);
        
        //getting the product
        CartItem.get()
        //if the product exist then the following code is run
        .then((doc)=>{
            console.log(doc);
            //if exists 
            if(doc.exists){
                //update the cartItem 
                CartItem.update({
                    //update the quantity by 1
                    quantity: doc.data().quantity + 1
                })
            }
            else{
                db.collection('cartItems').doc(id).set({
                    name:title,
                    price:price,
                    image:image,
                    quantity:1
                })
            }
        }) 
    }
   

    return (
        <div className="container">
           <div className="Title">
               {title}
           </div>
           <div className="Price">
                ${price}
           </div>
           <div className="Ratings">
              {
                  Array(ratings)
                  .fill()
                  .map(ratings => <p>🌟</p>)
              }

           </div>
           
            <img src={image}  />
         
            <div className="Action">
                <div className="button">
                    <button onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
           
        </div>
    )
}

export default Product
