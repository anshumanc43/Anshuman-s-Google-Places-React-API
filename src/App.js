import React from 'react';
import './Places.css'
import Map from './Map';
import ReactDependentScript from 'react-dependent-script';

const keys = require('./config/keys');
console.log(keys.placesUrl);

const App = ()=> {
  return(
    <ReactDependentScript
      scripts={[
          keys.placesUrl
        ]}
    >
      <Map/> 
    </ReactDependentScript>
    )
}

export default App;
