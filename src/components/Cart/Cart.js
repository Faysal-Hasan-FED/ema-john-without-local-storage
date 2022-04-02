import React from 'react';

const Cart = (props) => {
    
    
    const [cart] = [props.cart];
    let price = 0;
    let shipping= 0;
    let total =0;
    for(let item of cart){
        price = price + item.price;
        shipping = shipping + item.shipping;
        total = price + shipping;
    }
    let tax = total*.10;
    let grandTotal = total + tax;
    
    
    return (
        <div style={{padding:'5px'}}>
            <h2>This is a cart</h2>
            <h2>Items ordered: {cart.length}</h2>
            <h4>Total: {price.toFixed(2)}$</h4>
            <h4>Shipping: {shipping.toFixed(2)}$</h4>
            <h2>Total without Tax: {total.toFixed(2)}</h2>
            <h4>Tax: {tax.toFixed(2)}$</h4>
            <h2 style={{color:'red'}}>Grand Total: {grandTotal.toFixed(2)}$</h2>
        </div>
    );
};

export default Cart;