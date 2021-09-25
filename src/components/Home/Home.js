import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Ceo from '../Ceo/Ceo';
import './Home.css'

const Home = () => {
    const [ceos, setCeos] = useState([]);

    const [cart, setCart] = useState([]);

    const addtoCart = (ceo) => {
        const newCart = [...cart, ceos];
        setCart(newCart);
    }


    useEffect( () => {
        fetch('./ceo.JSON')
        .then(res => res.json())
        .then(data => setCeos(data));
      },[])
    return (
        <div className="d-flex align-item-center">
            <div className="ceos-decoration w-75">
            {
                ceos.map( (ceo) =><Ceo addtoCart={addtoCart} key={ceo.key} ceo={ceo}></Ceo> )
            }
            </div>
            <div className="p-4">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Home;