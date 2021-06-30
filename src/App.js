import React,{useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {db} from './firebase';

function App() {

  const [ cartItems, setcartItems] = useState([]);

  //CartItems as a state which is used in the useState is basically the container of all CartItems in the database
  //setCartItems is basically the state which is responsible for saving the changes that occurs in the database
    
  //pulling out information from the database  using the function

  const getcartItems = () =>{
      db.collection('cartItems').onSnapshot((snapshot) =>{
          let tempcartItems=[];

          tempcartItems = snapshot.docs.map((doc)=>(
              {
                id:doc.id,
                product:doc.data()
              }
          ));
          
          setcartItems(tempcartItems);
      });
  }

  //We are using the useEffect State so that our state doesnot reload each time
  useEffect(() => {
    console.log("Hey Cart Items");
    getcartItems();
  }, [])

  console.log(cartItems);

  return (
    
    <Router>
       
      <div className="app">
        <Header cartItems={cartItems} />
            <Switch>
                <Route path="/cart">
                    <Cart  cartItems={cartItems} />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

      </div>
    </Router>
  );
}

export default App;
