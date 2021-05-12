import React from 'react';
import { BsCloudFill} from 'react-icons/bs';
import {IoIosSunny} from 'react-icons/io';
import {IoPartlySunnyOutline} from 'react-icons/io5';
import {GiSnowing,GiRaining} from 'react-icons/gi';
import {RiThunderstormsLine,RiHazeLine} from 'react-icons/ri'
import {WiRain,WiDust} from 'react-icons/wi';
import {HiCloud}from 'react-icons/hi';
import {FaRegSmileBeam} from 'react-icons/fa';


const Data=({current,location,weather})=>{
   
    const{temperature,feelslike,weather_descriptions,precip}=current;
    const{name,country}=location;
    
   
   return(
<div className="data">
       
    <p className="data-temperature">Current Temperature is {temperature} <sup>o</sup>C </p>
    <div className="data-flex">
       <p className="data-flex-feelslike">It feels like {feelslike} <sup>o</sup>C</p>
       <div className="data-flex-location">
          <h1>{name}</h1>
          <h2>{country}</h2>
       </div>
    </div>
     

    
   
 

        <p className="data-other"> UV index is <span>
        {current.uv_index>=0 && current.uv_index<=2 ? "low" : null}
        {current.uv_index>=3 && current.uv_index<=5 ? "moderate" : null}
        {current.uv_index>=6 && current.uv_index<=7 ? "high" : null}
        {current.uv_index>=8 && current.uv_index<=10 ? "very high" : null}
        {current.uv_index>=11 ? "extreme" : null}
        </span> 
        </p>
        
        <p className="data-other"><WiRain size={24}/> {precip}{" "}mm</p>


       
   <div className="data-weathertype">
        
    <p className="data-weathertype-weather"> {weather_descriptions} {" "}
            {weather==="Sunny" ?  <IoIosSunny color="#ff8c00" size={50} style={{paddingLeft:'10px',marginBottom:'-10px'}}/>: null}
            {weather==="Cloudy" ?     <HiCloud color="#c5e2f7" style={{paddingLeft:'10px',marginBottom:'-8px'}} size={38}/>: null}
            {weather==="Partly cloudy" ?  <IoPartlySunnyOutline color="#dedea0" size={40} style={{paddingLeft:'10px',marginBottom:'-3px'}}/> : null}
            {weather==="Overcast" ? <BsCloudFill color="grey" size={40}  style={{paddingLeft:'10px',marginBottom:'-8px'}}/> : null}
            {weather==="Thunderstorm" ?   <RiThunderstormsLine color="grey" size={45}  style={{paddingLeft:'10px',marginBottom:'-8px'}}/> : null}
            {weather==="Haze" ?    <RiHazeLine color="rgb(100, 93, 93)" size={36}  style={{paddingLeft:'10px',marginBottom:'-4px'}}/>: null}
            {weather==="Light Rain" ?    <GiRaining color="rgb(105, 93, 93)" size={38}  style={{paddingLeft:'10px',marginBottom:'-5px'}}/>  : null}
            {weather==="Clear" ?   <FaRegSmileBeam color="lightyellow" size={36} style={{paddingLeft:'10px',marginBottom:'-5px'}} />  : null} 
            {weather==="Smoke" ?   <WiDust color="lightyellow" size={45} style={{paddingLeft:'5px',marginBottom:'-13px'}} />  : null} 
            { temperature<=0 ?  <GiSnowing color="#DADADA" style={{paddingLeft:'5px',marginBottom:'-10px'}} size={40}/> : null}
         
            </p>  
           
        </div>
     



        
</div>
 
 
     
    

       
      
       
 

    
        
        
    )
}

export default Data;