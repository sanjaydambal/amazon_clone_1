import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import "./Navigation.css"



class NavBar extends Component {
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let {item,size,increment} = this.context;
        return (
          <div>
            <div className='navbar__component'>


                <div className='NavBar_logo'></div>
                <div className='NavBar_locator'>
                    <div className='NavBar_location-img'></div>
                    <div className='NavBar_location'>Bangalore</div>
                </div>
                <div className='searchbox'>
                    <div >
                        <select className='dropdown'>
                            <option value="All">All</option>
                            <option value="Fashion ">Fashion </option>
                            <option value="Laptops">Laptops</option>
                            <option value="Mobiles">Mobiles</option>
                            <option value="Books">Books</option>
                            <option value="Alexa">Alexa</option>
                            <option value="Amazon Pay">Amazon Pay</option>
                        </select>
                    </div>
                    <div> <input type="text" className='NavBar_searchbox'></input></div>
                    <div className='NAvbar_search'>
                        <div className='search_img'></div>
                    </div>
                </div>
                <div className='main'>
                    <div className='navbar_signin'>
                        <div style={{ fontSize: "14px" }} >Hello,Sign In</div>
                        <div style={{ fontWeight: "bold" }} >Account & List</div>
                    </div>
                    <div className='returns'>
                        <div style={{ fontSize: "14px" }}>Returns</div>
                        <div style={{ fontWeight: "bold" }}>& Order</div>
                    </div>
                    <div className=' navbar_text cart'>
                        <div src='' className='cart_img'></div>
                        <div className='cart_item'>{size}</div>
                        <div className="navbar_cart_text">Cart</div>
                    </div>
                      </div>
                </div>
                <div className='navbar_footer'>
                    <div className='navbar_footer_text'>Best Seller</div>
                    <div className='navbar_footer_text'>Mobile</div>
                    <div className='navbar_footer_text'>Amazon Pay</div>
                    <div className='navbar_footer_text'>Fashion</div>
                    <div className='navbar_footer_text'>Electronics</div>
                    <div className='navbar_footer_text'>Prime</div>
                    <div className='navbar_footer_text'>New Release</div>
                    <div className='navbar_footer_text'>Customer Service</div>
                    <div className='navbar_footer_text'>Computers</div>
                    <div className='navbar_footer_text'>Home & Kitchen</div>
                </div>
                </div> 
            
             );
    }
}

export default NavBar;