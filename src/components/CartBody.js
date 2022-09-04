import React from 'react';

const CartBody = (props) => {
    let total = 0;
    let shipping = 0;
    for(const product of props.data){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const Tax = (total * 0.03).toFixed(2);
    const  grandTotal = total + shipping + parseFloat(Tax);
    
    
    return (
        <div className='cart-dashbpard'>
            <h3 style={{textAlign: 'center'}}>Order Summary</h3>
            <p>Selected Items: {props.data.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${Tax}</p>
            <h6>Grand Total: ${grandTotal}</h6>
            <button className='btn btn-danger'>Clear Cart <i className="fa-solid fa-trash"></i></button>
            <button className='btn btn-warning'>Review Order <i className="fa-solid fa-arrow-right"></i></button>
        </div>
    );
};

export default CartBody;