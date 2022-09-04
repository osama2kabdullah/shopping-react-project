import React, { useEffect, useState } from 'react';
import { addToDb, LoadfromDb } from '../utilities/DataBase';
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
        const exist = cart.find(item=> item.id === product.id);
        let newCart;
        if(!exist){
            product.quantity = 1;
            newCart = [...cart, product];
        }else {
            const rest = cart.filter(item=>product.id !== item.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart);
        // save to localStorage 
        addToDb(product.id)
    }
    
    // load data from Db
    useEffect(() => {
        const loadDb = LoadfromDb();
        const saveProducts = [];
        for(const id in loadDb){
            const addedProduct = products.find(product=>product.id === id);
            
            if(addedProduct){
                const quantity = loadDb[id];
                addedProduct.quantity = quantity;
                saveProducts.push(addedProduct);
            }
            setCart(saveProducts);
        }
    }, [products])
    
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