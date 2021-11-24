import React from 'react';
import Result from './result';
import Title from './title';
import Summer from '../style/summer';
import Neutral from '../style/neutral';
import Winter from '../style/winter';
import Cloudy from '../style/cloudy';
import Error from './error';
import Loading from './loading';
import {AiOutlineCopyright} from 'react-icons/ai';





class Input extends React.Component{

  constructor(props){
    super(props)

    this.state={ 
      res: "",
      current:"",
      location:"", 
      input: "", 
      button:false,
      errorMsg:""
    }
    this.handleInput=this.handleInput.bind(this);
    this.handleButton=this.handleButton.bind(this);
    this.fetchCurrentWeather=this.fetchCurrentWeather.bind(this);

}

handleInput(e){
  this.setState({input: e.target.value})

}


handleButton(){
  const {input}=this.state
  this.setState({button: true});
  this.fetchCurrentWeather(input);
}


fetchCurrentWeather(searchQuery){


   fetch(`https://api.weatherstack.com/current?access_key=edfa7b64c0ce6bf1e66267151206f83a&query=${searchQuery}`)
    .then((res)=>res.json())
    .then((res)=> 
    
    this.setState({
      res:res,
      current: res.current,
      location:res.location,
      errorMsg: res.error
 
   
  
    }))
   


}



render(){

const{res,current, location,input,errorMsg,button}=this.state;


if(errorMsg){
  return <Error />
}


  return(
  
<div className="Apps">
    {res && res.current.temperature>=24 ? <Summer/>: <Neutral/>}
    {current && current.weather_descriptions[0]==="Cloudy"? <Cloudy/>: null}
    {current && current.weather_descriptions[0]==="Partly cloudy"? <Cloudy/>: null}
    {current && current.weather_descriptions[0]==="Overcast"? <Cloudy/>: null}
    {res && res.current.temperature <=0? <Winter/>: null} 
   
     
         <Title/>

     <div className="search">             
          <input className="search-input" 
                  type="search"
                  value={input}
                  onChange={this.handleInput}
                  placeholder="Enter place name here!"
                />
          <button  className="search-btn"
                   onClick={this.handleButton}></button>
          
     </div>
                  
     
    {!res && button ? <Loading/>: null}



      {res && button?   <Result 
                  current={current}
                  location={location}

                        />   : null}

        
     <p className="searchcopy"><AiOutlineCopyright color="rgb(73, 40, 73)" size={10} style={{marginBottom:'-1px'}}/>shriya 2021</p>

     </div>           


    )

    
}
}





export default Input;

                 


        
   
    

      
    
   
       
      
     
      
            
  

   
    
      
    
    