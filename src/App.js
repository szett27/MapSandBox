import logo from './logo.svg';
import './App.css';
import  { useState } from 'react';
import ReactMapGL from 'react-map-gl';


function App() {
   
    const [viewport, setViewport] = useState({
      latitude: 37.7577,
      width: "100vw",
      height: "100vh",
      longitude: -122.4376,
      zoom: 8
    });
  
    return (
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}      />
    );
}


export default App;
