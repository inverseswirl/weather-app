import React from 'react';

import Data from '../mini-components/data';











const Result =({current,location})=>{







  return(
              
   
    <div className="weather-report">
        
        <Data 
        current={current}
        location={location}
        />
        
      
        
      </div> 
      


          
      
      
              
    )

 }
  



export default Result;
  







