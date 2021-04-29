import React from 'react';
// import api from './api';




export const api=(searchQuery)=>{
   
 return fetch(`http://api.weatherstack.com/current?access_key=9391c9586a2d3b132d11d401bd02e569&query=${searchQuery}`)
  .then((res)=>{
  console.log(res.ok)
  res.json()
  .then((res)=>res
  
)})

}





export default class Result extends React.Component{
constructor(props){
  super(props)


}
 render(){






  return(
              
            
      <div>

   {this.props.btn ? <div> { this.props.data && <pre>{JSON.stringify(this.props.data,2)}</pre>}</div>: null}

      </div> 
              
    )

 }
  
  








}


