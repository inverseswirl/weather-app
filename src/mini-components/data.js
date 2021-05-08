import React from 'react';
import cloudy from '../img/cloudy.svg';

const Data=({current})=>{
    
    return(

        <div className="data">
        <p className="data-actual">Temperature {current.temperature}<sup>o</sup>C </p>
       
        <img className="data-img" alt="weather"  src={cloudy} />
        {/* <h2>The name is {props.name} & country is {props.country}</h2> */}
        
       </div>
    )
}

export default Data;