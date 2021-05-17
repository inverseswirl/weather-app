import React from 'react';
import Neutral from '../style/neutral';
import Title from './title';
import {BiErrorCircle} from 'react-icons/bi';

class Error extends React.Component {
    constructor(props) {
      super(props);
   
    }
    


  render() {

 
 return(
     <div>
       <Neutral/>
       <Title/>
        <div className="search">             
              <input className="search-input" 
                      type="search"
                      placeholder="Enter place name here!"
                    />
              <button  className="search-btn"></button>
        </div>
     <div className="error">
         <h1><BiErrorCircle size={20}/> Please try again with the right name! </h1>
     </div>
     </div>
 )
}
}

export default Error;