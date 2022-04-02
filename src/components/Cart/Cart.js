import React from 'react';

const Cart = (props) => {

    
    const [cart] = [props.cart];
    let total = 0;
    let totalQuantity = 0;
    for(let item of cart){
       if(!item.quantity){
           item.quantity = 1;
       }
        total = total + item.price * item.quantity;
        totalQuantity = totalQuantity + item.quantity;
        
    }
    const shipping = total>0? 15 : 0; 
    let tax = total*.10;
    let grandTotal = total + tax;
    
    
    return (
        <div style={{padding:'5px'}}>
            <h2>This is a cart</h2>
            <h2>Items ordered: {totalQuantity}</h2>
            <h4>Total: {total.toFixed(2)}$</h4>
            <h4>Shipping: {shipping.toFixed(2)}$</h4>
            <h2>Total without Tax: {total.toFixed(2)}</h2>
            <h4>Tax: {tax.toFixed(2)}$</h4>
            <h2 style={{color:'red'}}>Grand Total: {grandTotal.toFixed(2)}$</h2>
        </div>
    );
};

export default Cart;