import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const {cart} = props;
    
    //set name and salary collection added from button click
    let sum = 0;
    let name = '';
    for (let i = 0; i < cart.length; i++) {
        sum = sum + cart[i].salary;
        name = name + cart[i].name + ', ';

    }
    
    return (
        <div className="cart-container">
            <h2 className="text-center text-success">Cart</h2>
            <h5>Total added: <span className="text-success">{cart.length}</span></h5>
            <h5>Total Salary: <span className="text-success">${sum}</span></h5>
            <h5>CEO Added: <span className="text-success">{name}</span></h5>
        </div>
    );
};

export default Cart;