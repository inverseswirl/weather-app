import React from 'react';











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


