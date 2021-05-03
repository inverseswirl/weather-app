import React from 'react';
import cloudy from '../img/cloudy.svg'











export default class Result extends React.Component{
constructor(props){
  super(props)


}
 render(){






  return(
              
            
      <div className="weather-report">
          <div className="temperature">
            <img className="temperature-img" alt="weather" src={cloudy}/>
           <p className="temperature-actual">{this.props.temperature}</p>
          </div>

          
         <div className="location">

         </div>
      
      </div> 
              
    )

 }
  
  








}


