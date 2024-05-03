import React from 'react';
import './RightsideContent.css';
import Rating from '@mui/material/Rating';
import getSymbolFromCurrency from 'currency-symbol-map'
function Product(props) {
 
    return (
        <div>

            <div className='Product_img'> <img src= {props.definition.image} height="300px" alt='' /></div>

            <div className='Product_Name'>                                
            {props.definition.name}
            </div>
            <div className='Product_Rating'> 
            <Rating name="read-only" value={4} style={{fontSize:'20px'}} readOnly />                               
            {props.definition.rating}
            </div>
            <div className='Product_Price' >
            {getSymbolFromCurrency('INR')}{props.definition.price}
            </div>
        </div>
    );
}

export default Product;
