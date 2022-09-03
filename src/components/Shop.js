import React, { useEffect, useState } from 'react';
import CartBody from './CartBody';
import SingleProducts from './SingleProducts';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('products.json')
        .then(res=> res.json())
        .then(datas=>setProducts(datas))
    }, []);
    
    const [cart, setCart] = useState([]);
    const btnclick = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><SingleProducts key={product.id} btn={()=>btnclick(product)} datas={product}></SingleProducts>)
                }
            </div>
            
            <div className="product-cart">
                <CartBody data={products}></CartBody>
            </div>
        </div>
    );
};

export default Shop;