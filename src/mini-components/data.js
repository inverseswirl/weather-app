import React from 'react';
import {FaCloudSun} from 'react-icons/fa'

const Data=({current,location})=>{
   
    const currentData=[current.temperature,current.feelsike,current.precip,current.weather_descriptions,current.uv_index]
    const locationData=[location.name, location.country,location.localtime ,location.timezone_id]
   
   return(
<div className="data">
       
    <p className="data-temperature">Current Temperature is {currentData[0]} <sup>o</sup>C </p>
    <div className="data-flex">
       <p className="data-flex-feelslike">Feels like {current.feelsike}</p>
        <FaCloudSun color='white' size={80} style={{paddingLeft:'50px'}} />
       <div className="data-flex-name">
          <h1>Boronia{location.name}</h1>
          <h2>Australia{location.country}</h2>
       </div>
    </div>

    
    <div>

    </div>


        
 
 
     

    
       
      
       
 

    
</div>
        
        
    )
}

export default Data;