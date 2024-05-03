import React, { useContext } from 'react';
import "./Checkout.css";
import Grid from '@mui/material/Grid';
import CheckoutItems from './CheckoutItems';
import { CartContext } from '../CartContext';

function Checkout(props) {
    const { item, size, increment } = useContext(CartContext);

    const cartValue = () => {
        let price = 0;
        for(let i = 0; i < item.length; i++) {
            price += parseInt(item[i].price);
        }
        return price;
    }

    return (
        <div className='checkout_body'>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <div className='checkout_container'>
                        <div className="checkout_title">Shopping Cart</div>
                        <div className="checkout_items">
                            {item.length > 0 ?
                                item.map((value) => (
                                    <CheckoutItems definition={value} key={value.id} />
                                )) :
                                <div className="empty_cart">Please buy something</div>
                            }
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className="subtotal_container">
                        <div className="subtotal_text">Subtotal ({size} items): <strong>₹ {cartValue()}</strong></div>
                        <button className='placeorder_button'>Proceed to Buy</button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Checkout;
