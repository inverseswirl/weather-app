import React from 'react';
import cloudy from '../img/cloudy.svg'











const Result =(props)=>{








  return(
              
            
      <div className="">

          <div className="temperature">
           <p className="temperature-actual">The current temperature is {props.temp}<sup>o</sup>C</p>
           <img className="temperature-img" alt="weather"  src={cloudy} />
           {/* <h2>The name is {props.name} & country is {props.country}</h2> */}
           
          </div>

          
            <div className="location"></div>
      
      </div> 
              
    )

 }
  



export default Result;
  







