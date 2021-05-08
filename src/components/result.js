import React from 'react';

import Data from '../mini-components/data';











const Result =({current,location})=>{








  return(
              
   
    <div className="weather-report">
        
        <Data current={current}  location={location}/>
        {/* <Data />
        <Data /> */}
      

      </div> 

          
      
      
              
    )

 }
  



export default Result;
  







