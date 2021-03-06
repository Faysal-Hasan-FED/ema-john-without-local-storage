import React from 'react';
import Rating from 'react-rating';
import './Product.css';

const Product = (props) => {
    const {name , category , seller, img ,price , star , stock} = props.product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div style={{padding:'10px'}}>
            <h4>{name}</h4>
            <p>{category}</p>
            <p><small>By {seller}</small></p>
            <p><small>Only {stock} available in stock</small></p>
            <h2>Only $ {price}</h2>
            <Rating
               readonly
               initialRating={star}
            />

            <br />

            <button onClick={()=>props.addToCart(props.product)}>Buy now</button>
            </div>
        </div>
    );
};

export default Product;