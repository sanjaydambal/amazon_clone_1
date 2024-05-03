import React, { Component, createContext } from 'react';

export const CartContext = createContext();


class  CartContextProvider extends Component {
    constructor(props) {
        super(props);
        let existingCart = localStorage.getItem('mycart') == null || localStorage.getItem('mycart') == undefined ? []: JSON.parse(localStorage.getItem('mycart'));
        let cartAmount = existingCart.length;
        this.state = { 
            item:existingCart,
            size:cartAmount,
            increment:(value) => {
                let itemList = this.state.item;
                itemList.push(value);
                this.setState({item:itemList});
                this.setState({size:this.state.item.length});
                this.state.saveToLocalCache();
            },
            saveToLocalCache:()=>{
                localStorage.setItem('mycart',JSON.stringify(this.state.item))
            }
         }
    }
    
    render() { 
        return ( 
            <CartContext.Provider value = {{...this.state,...this.increment}}>
                {this.props.children}
            </CartContext.Provider>
         );
    }
}
 
export default CartContextProvider ;
