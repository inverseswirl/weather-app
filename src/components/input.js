import React from 'react';
import {BsSearch} from 'react-icons/bs';
import {api} from '../components/result';
import Result from '../components/result';



class Input extends React.Component{

  constructor(props){
    super(props)

    this.state={ data: null,input: "",button: false}
    this.handleInput=this.handleInput.bind(this);
    // this.handleClick=this.handleClick.bind(this);
    // this.handleApi=this.handleApi.bind(this);
    this.api=this.api.bind(this);

}

handleInput(e){
  this.setState({input:  e.target.value})

}

api(searchQuery){

  fetch(`http://api.weatherstack.com/current?access_key=9391c9586a2d3b132d11d401bd02e569&query=${searchQuery}`)
  .then((res)=>res.json())
  .then((res)=>this.setState({data: res})
  
)

}




handleClick(){

}

render(){
const{input,data,button}=this.state;



    return(

    <div className="search">
       <h1 className="search-headline">Enter the place name here!</h1>
       <input className="search-query" 
              type="search"
              value={input}
              onChange={this.handleInput}
            />

       <button 
      
           onClick={()=>this.api(input)}
      className="search-btn">
    <span><BsSearch size={32}/></span></button>
       
       {/* <Result data={data}
       btn={button}
       /> */}

 <div className="temperature"> 
  <h1> Hello,How are you</h1>
  <pre>{JSON.stringify(data,null,2)}</pre>
 </div>
     
  

    
      
    
    
    
    </div>
    )







}
}
export default Input;