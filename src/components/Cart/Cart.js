import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    console.log(cart);
    for(let i = 0; i < cart.length; i++) {
        console.log(cart[i].name);
    }

    return (
        <div>
            <h3>CEO added:{cart.length}</h3>
            <h3>Total Cost:{total}</h3>
        </div>
    );
};

export default Cart;