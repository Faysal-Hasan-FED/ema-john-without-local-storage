import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name , category , seller, img ,price , star} = props.product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div style={{padding:'10px'}}>
            <h4>{name}</h4>
            <p>{category}</p>
            <p><small>By {seller}</small></p>
            <h2>Only $ {price}</h2>
            <p>Rating: {star}</p>

            <button onClick={()=>props.addToCart(props.product)}>Buy now</button>
            </div>
        </div>
    );
};

export default Product;