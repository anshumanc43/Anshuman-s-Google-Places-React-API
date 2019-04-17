import React from 'react';
import './Places.css'
import Map from './Map';
import ReactDependentScript from 'react-dependent-script';

const App = ()=> {
  return(
    <ReactDependentScript
      scripts={[
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap"
        ]}
    >
      <Map/> 
    </ReactDependentScript>
    )
}

export default App;
