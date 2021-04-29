import React from 'react';
import '../src/sass/App.scss';
import  Neutral  from './style/neutral';

import Input from '../src/components/input';
import Result from './components/result';

const Weather=()=>{

    return(
    <div>
         <Neutral>
            
          <Input />
         </Neutral>
         <Result/>
        </div>
    )
}
export default Weather;