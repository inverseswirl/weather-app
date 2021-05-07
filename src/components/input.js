import React from 'react';
import {FaSearch} from 'react-icons/fa';
import Result from '../components/result';
import Title from './title';
import Summer from '../style/summer';
import Neutral from '../style/neutral';



class Input extends React.Component{

  constructor(props){
    super(props)

    this.state={ res: null,current:"",location:"", input: "",button:false}
    this.handleInput=this.handleInput.bind(this);
    this.handleButton=this.handleButton.bind(this);
    this.api=this.api.bind(this);

}

handleInput(e){
  this.setState({input:  e.target.value})

}





api(searchQuery){


    fetch(`http://api.weatherstack.com/current?access_key=9391c9586a2d3b132d11d401bd02e569&query=${searchQuery}`)
    .then((res)=>res.json())
    .then((res)=> 
    this.setState({
      res:res,
      current: res.current,
      location:res.location,
      
  
    }))
}

handleButton(){
  const {input}=this.state
this.setState({button: true});
this.api(input);
}



render(){
const{res,current, location,input,button}=this.state;
const{temperature,feelsike,precip,weather_descriptions,uv_index }=current;
const{name, country,localtime ,timezone_id}=location;





    return(
  <>
    {temperature >24? <Summer/>: <Neutral/>}
   
     
     <Title/>
     <div className="search">                {/* search-input*/}  
          <input className="search-input" 
                  type="search"
                  value={input}
                  onChange={this.handleInput}
                  placeholder="Enter place name here!"
                />
          <button  className="search-btn"
                   onClick={this.handleButton}></button>
     </div>
     


    {!res && button===true ? <h1>Loading</h1>: null}

   <div className="weather-report">
      {res && button?   <Result 
        temp={temperature}
        name={name}
        country={country}
      
        />   : null}
         <Result 
        temp={temperature}
        name={name}
        country={country}
      
        /> 
  
  </div>
       
        
   
    

      
    
   
       
      
     
      
            
  

   

  </>
    )

    
}
}





export default Input;
    
      
    
    