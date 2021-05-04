import React from 'react';
import '../src/sass/App.scss';
import  Neutral  from './style/neutral';

import Input from '../src/components/input';
import Result from './components/result';
import Thermometer from './style/thermometer';

const Weather=()=>{

    return(
    <>
         <Neutral>
            
          <Input />
          {/* <Result/> */}
         </Neutral>
     

       </>
    )
}
export default Weather;