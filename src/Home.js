import React,{useState, useEffect} from 'react';
import './Home.css';
import Product from './Product';
import { db } from './firebase';

function Home() {
     const [products, setProducts] = useState([]);
    
    //products as a state which is used in the useState is basically the container ofg all products in the database
    //setProducts is basically the state which is responsible for saving the changes that occurs in the database
    
    //pulling out information from the database 
        const getProducts = () => {
                db.collection('products').onSnapshot((snapshot)=>{
                        let tempProducts=[]

                        //passing the value of snapshot in tempProducts and mapping each property 
                        //of the products and pulling each and every information from the database
                        //into it
                        tempProducts = snapshot.docs.map((doc) => (
                            {
                                //it will give the id of the product
                                id:doc.id,
                                //it will provide the data/details/information about the product
                                product:doc.data()
                            }
                        ));
                       
                        //passing the value of tempProducts to setProduts state
                        //This is done bcz the setProducts is responsible for saving the changes
                        //that occurs in the database not the tempProducts
                        setProducts(tempProducts);
                })
        }

        //useEffect will run our application on ther network just for one time
        //that is when our application gets render over the network
        useEffect(() => {
            //calling the function
            getProducts();
        }, [])

       
        
        //after doing this react will reload the pages instantly for infinite time 
        //To avoid this we should have to call the function inside the useEffect state..
        console.log(products);
        
    
    return (
        <div className="Container">
            <div className="Banner">    
                <div className="Content">
                        {
                            products.map((data)=>(
                                <Product 
                                    title={data.product.name}
                                    price={data.product.price}
                                    ratings={data.product.ratings}
                                    image={data.product.image}
                                    id={data.id}
                                />
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

export default Home
