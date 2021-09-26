import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCoffee, faVoteYea } from '@fortawesome/free-solid-svg-icons';
import './Ceo.css';



const Ceo = (props) => {
    const {name, age, company, country, img, key, salary} = props.ceo;
    
    return (
        <div className="container-fluid text-center ceo-card-decoration">
            <div className="m-4">
            <img className="img-fluid rounded-circle images" src={img} alt="" />
            <h5> Name: <span className="text-success">{name}</span></h5>
            <h5>Age: <span className="text-success">{age}</span></h5>
            <h5>Salary: <span className="text-success">${salary}</span></h5>
            <h5>Company: <span className="text-success">{company}</span></h5>
            <h5>Country: <span className="text-success">{country}</span></h5>
            <button onClick ={() => props.addtoCart(props.ceo)}  className="btn btn-success"><FontAwesomeIcon icon={faCartPlus} /> add to cart</button>
            <div>
            </div>
            </div>
            
        </div>
        
    );
};

export default Ceo;