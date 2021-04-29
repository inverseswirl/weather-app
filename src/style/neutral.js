import React from 'react';

const Neutral=(props)=>{
    return(
        <div className="neutral"> 
           <h1 className="neutral-headline">What's the weather?</h1>
           <br/>
           {props.children}
        
       </div>

    )
}
export default Neutral;
