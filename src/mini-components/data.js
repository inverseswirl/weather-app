import React from 'react';
import {BiSun} from 'react-icons/bi';
import { BsCloudFill,BsFillDropletFill} from 'react-icons/bs';
import {IoIosSunny} from 'react-icons/io';
import {IoPartlySunnyOutline} from 'react-icons/io5';
import {GiSnowing} from 'react-icons/gi';

const Data=({current,location,weather})=>{
   
    const{temperature,feelslike,weather_descriptions,precip}=current;
    const{name,country,localtime}=location;
    
   
   return(
<div className="data">
       
    <p className="data-temperature">Current Temperature is {temperature} <sup>o</sup>C </p>
    <div className="data-flex">
       <p className="data-flex-feelslike">It feels like {feelslike} <sup>o</sup>C</p>
       <span className="data-flex-img">
           {weather==="Sunny" ? <IoIosSunny color="#f0d084" size={80}/>: null}
           {weather==="Cloudy" ?  <BsCloudFill color="#f6f6f6" size={80}/> : null}
           {weather==="Partly cloudy" ?  <IoPartlySunnyOutline color="whitesmoke" size={80}/> : null}
           {weather==="Overcast" ?  <BsCloudFill color="whitesmoke" size={45}/> : null}
           { temperature<=0 ?  <GiSnowing color="whitesmoke" size={70}/> : null}
            </span>
       <div className="data-flex-name">
          <h1>{name}</h1>
          <h2>{country}</h2>
       </div>
    </div>
    <p className="data-other"><BiSun size={20}/> UV index is <span>
    {current.uv_index>=0 && current.uv_index<=2 ? "low" : null}
    {current.uv_index>=3 && current.uv_index<=5 ? "moderate" : null}
    {current.uv_index>=6 && current.uv_index<=7 ? "high" : null}
    {current.uv_index>=8 && current.uv_index<=10 ? "very high" : null}
    {current.uv_index>=11 ? "extreme" : null}
    </span> 
   </p>
   
    <div className="data-flex">
        <div className="">
            <p className="data-other"><BsFillDropletFill size={18}/> {precip}mm</p>
            <p className="data-other">'Mostly {weather_descriptions}'</p>
        </div>
    <p className="data-time">{localtime}</p>
    </div>
 
   
    


     
    
    <div>

    </div>


        
 
 
     

    
       
      
       
 

    
</div>
        
        
    )
}

export default Data;