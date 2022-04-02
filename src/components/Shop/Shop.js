import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
            setMatchedProducts(data)
        } )
    },[])

    // another state for matched searched 

    const [matchedProducts, setMatchedProducts] = useState([]);

    const handleSearch = event =>{
        
        const searchedText = event.target.value;
        const matched = products.filter(product=> product.name.toLowerCase().includes(searchedText.toLowerCase()));
        setMatchedProducts(matched);
    }

    // another state for lift up state - buy now button 
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div >

            {/* search functionality */}
            <div style={{textAlign:'center',marginBottom:'10px'}}>
                <input onChange={handleSearch} 
                style={{width:'80%',padding:'3px'}} 
                type="text" placeholder='search your product' />
            </div>


            <div className='shop-container'>
            <div style={{borderRight:'1px solid gray'}}>
            {
                matchedProducts.map(product => <Product
                    addToCart={handleAddToCart}
                     key={product.key}
                      product={product}></Product>)
            }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
            </div>
            
            
        </div>
    );
};

export default Shop;