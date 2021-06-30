import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

//we can use the css here to design the page but instead of css we are using styled component package

function Header({cartItems}) {

    const getCount = () =>{
        let Count=0;
            //Looping each cartItems
        
        cartItems.forEach((item)=> {
            Count=Count+item.product.quantity;
        });

        return Count;
        
    }
    //console.log(getCount());



    return (
        <div className="Header">

                <div className="Header__Logo">
                    

                        <img src={"https://i.imgur.com/7I9Was5.jpg"} alt="" />  
                    

                </div>

                <div className="HeaderOptionAddress">
                    <LocationOnIcon />
                    <div className="HeaderOption">
                        <span className="OptionLineOne">Hello</span><br />
                        <span className="OptionLineTwo">Select your Address</span>
                    </div>
                            
                </div>

                <div className="HeaderSearch">
                    <input type="text" />
                    <div className="HeaderSearchIconContainer">
                        <SearchIcon />
                    </div>
                </div>

                <div className="HeaderNavItems">
                    <div className="HeaderOption">
                        <div className="OptionLineOne">Hello,Sign in</div>
                        <div className="OptionLineTwo">Accounts & Lists</div>
                    </div>
                    <div className="HeaderOption">
                        <div className="OptionLineOne">Returns</div>
                        <div className="OptionLineTwo">& Orders</div>
                    </div>

                    

                        <div className="HeaderOptionCart">
                            <Link to="/cart">

                                <ShoppingCartIcon />
                                <div className="CartCount">{getCount()}</div>
                            </Link>
                        </div>
                    
                </div>



        </div>
       
    )
}

export default Header;
