import React from 'react';
import Result from './result';
import Title from './title';
import Summer from '../style/summer';
import Neutral from '../style/neutral';
import Winter from '../style/winter';



class Input extends React.Component{

  constructor(props){
    super(props)

    this.state={ 
      res: null,
      current:"",
      location:"", 
      input: "", 
      weather:"", 
      button:false
    }
    this.handleInput=this.handleInput.bind(this);
    this.handleButton=this.handleButton.bind(this);
    this.apiFetchWeather=this.apiFetchWeather.bind(this);

}

handleInput(e){
  this.setState({input:  e.target.value})

}





apiFetchWeather(searchQuery){


    fetch(`http://api.weatherstack.com/current?access_key=9391c9586a2d3b132d11d401bd02e569&query=${searchQuery}`)
    .then((res)=>res.json())
    .then((res)=> 
    this.setState({
      res:res,
      current: res.current,
      location:res.location,
      weather: res.current.weather_descriptions[0]
  
    }))
}

handleButton(){
  const {input}=this.state
  this.setState({button: true});
  this.apiFetchWeather(input);
}



render(){
const{res,current, location, weather,input,button}=this.state;

const{temperature}=current;





    return(
  <>
    {temperature >=24 ? <Summer/>: <Neutral/>}
    {temperature <=23 && temperature >0? <Neutral/>:null}
    {temperature<=0? <Winter/>: null}
   
     
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
     


    {!res && button===true ? <h1 className="loading">Loading...</h1>: null}

      {res && button?   <Result 
                current={current}
                location={location}
                weather={weather}
                      />   : null}
            
   
           {/* <Result 
                current={current}
                location={location}
                weather={weather}
                />  */}

       
        
   
    

      
    
   
       
      
     
      
            
  

   

  </>
    )

    
}
}





export default Input;
    
      
    
    