import React from 'react';
import {BsSearch} from 'react-icons/bs';
import Result from '../components/result';



class Input extends React.Component{

  constructor(props){
    super(props)

    this.state={ data: '',input: "",button: false}
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

this.setState({data: res})

  
)

}


render(){
const{input,data,button}=this.state;
const{location,current}=data

// const{temperature}=current




    return(
      <div>
      <h1 className="search-headline">Enter the place name here!</h1>
    <div className="search">
      
    
       <input className="search-query" 
              type="search"
              value={input}
              onChange={this.handleInput}
            />

       <button 
      onClick={()=>this.api(input)}
      className="search-btn">
       <span><BsSearch size={32}/></span></button>
       
       </div>

        <div className="temperature"> 
         <pre>{JSON.stringify(current,null,2)}</pre>
         <pre>{JSON.stringify(location,null,2)}</pre>
      
        </div>
            
  

    
      
    
    
    
   
    </div>
    )







}
}
export default Input;