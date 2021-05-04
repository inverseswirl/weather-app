import React from 'react';
import {BsSearch} from 'react-icons/bs';
import Result from '../components/result';



class Input extends React.Component{

  constructor(props){
    super(props)

    this.state={ current: "",location:"", input: ""}
    this.handleInput=this.handleInput.bind(this);
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
    current: res.current,
    location:res.location
  })

  
)

}


render(){
const{input,current,location}=this.state;
 const{temperature,feelsike,precip,weather_descriptions,uv_index }=current;
 const{name, country,localtime ,timezone_id}=location;

// const{temperature}=current




    return(
  <div>
   
     <div className="search">
          <input className="search-input" 
                  type="search"
                  value={input}
                  onChange={this.handleInput}
                  placeholder="Enter place name here!"
                />
          <button  className="search-btn"
                   onClick={()=>this.api(input)}
            ><span><BsSearch size={34}/></span></button>
     

      </div>
          
      
    
  

   
        <Result 
        current={current}
        temperature={temperature}
        />
      
     
      
            
  

   
  </div>
    )

    
}
}





export default Input;
    
      
    
    