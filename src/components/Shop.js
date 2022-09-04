import React, { useEffect, useState } from 'react';
import { addToDb } from '../utilities/DataBase';
import CartBody from './CartBody';
import SingleProducts from './SingleProducts';

const Shop = () => {
    // load data from json
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('products.json')
        .then(res=> res.json())
        .then(datas=>setProducts(datas))
    }, []);
    // set to cart board 
    const [cart, setCart] = useState([]);
    const btnclick = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // save to localStorage 
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><SingleProducts key={product.id} btn={()=>btnclick(product)} datas={product}></SingleProducts>)
                }
            </div>
            
            <div className="product-cart">
                <CartBody data={cart}></CartBody>
            </div>
        </div>
    );
};

export default Shop;