import React from 'react';
import './Ceo.css'

const Ceo = (props) => {
    const {name, age, company, country, img, key, salary} = props.ceo;
    
    return (
        <div className="container-fluid text-center ceo-card-decoration">
            <div className="m-4">
            <img className="img-fluid rounded-circle images" src={img} alt="" />
            <h5> Name: <span className="text-secondary">{name}</span></h5>
            <h5>Age: <span className="text-secondary">{age}</span></h5>
            <h5>Salary: <span className="text-secondary">{salary}</span></h5>
            <h5>Company: <span className="text-secondary">{company}</span></h5>
            <h5>Country: <span className="text-secondary">{country}</span></h5>
            <button onClick ={() => props.addtoCart(props.ceo)}  className="btn btn-success">add to cart</button>
            </div>
            
        </div>
        
    );
};

export default Ceo;