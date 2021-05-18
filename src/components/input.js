import React from 'react';
import Result from './result';
import Title from './title';
import Summer from '../style/summer';
import Neutral from '../style/neutral';
import Winter from '../style/winter';
import Cloudy from '../style/cloudy';
import Error from './error';
import Loading from './loading';





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


   fetch(`http://api.weatherstack.com/current?access_key=9391c9586a2d3b132d11d401bd02e569&query=${searchQuery}`)
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
  <>

    <Cloudy search={input}/>
    {/* {res && res.current.temperature>=24 ? <Summer/>: <Neutral/>}
    {res && res.current.temperature <=23 && res.current.temperature >0? <Neutral/>:null}
    {res && res.current.temperature <=0? <Winter/>: null}  */}
   
     
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
                  
     


    {!res && button ? <Loading/>: null}

     

      {/* {res && button?   <Result 
                current={current}
                location={location}
          
                      />   : null} */}
                    
  
    <Result 
                current={current}
                location={location}
                
                />    



        
   
    

      
    
   
       
      
     
      
            
  

   

  </>
    )

    
}
}





export default Input;
    
      
    
    