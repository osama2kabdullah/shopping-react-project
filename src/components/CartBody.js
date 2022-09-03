import React from 'react';

const CartBody = (props) => {
    console.log(props.data);
    return (
        <div className='cart-dashbpard'>
            <h3 style={{textAlign: 'center'}}>Order Summary</h3>
            <p>Selected Items: </p>
            <p>Total Price: $1140</p>
            <p>Total Shipping Charge: $5</p>
            <p>Tax: $114</p>
            <h4>Grand Total: $1559</h4>
            <button className='btn btn-danger'>Clear Cart <i className="fa-solid fa-trash"></i></button>
            <button className='btn btn-warning'>Review Order <i className="fa-solid fa-arrow-right"></i></button>
        </div>
    );
};

export default CartBody;