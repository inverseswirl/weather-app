import React from 'react';

import Data from '../mini-components/data';











const Result =({current,location,weather})=>{







  return(
              
   
    <div className="weather-report">
        
        <Data 
        current={current}
        location={location}
        weather={weather}
        />
        
      
        
      </div> 
      


          
      
      
              
    )

 }
  



export default Result;
  







