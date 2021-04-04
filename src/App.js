
import * as React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import Providers from './Providers';
import Locations from './Locations';
import Login from './Login';

export default function App() {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    height: window.innerHeight,
    width: window.innerWidth

  });




  return (
    <div>
    <h1>Tongue Tie Providers</h1>
    <Login />
    {/* <div id = "navbar">
    <nav>
    <ul>
    <li><Providers /></li>
    <li><Locations /></li>
    </ul>
    </nav>
    </div>
    <div id = "map">
    <ReactMapGL
      {...viewport}
      mapStyle = "mapbox://styles/szett27/ckmtbbjww3sei17qthip3st7g"
      mapboxApiAccessToken = {"pk.eyJ1Ijoic3pldHQyNyIsImEiOiJja210ODZwN2gwZW1tMnlzZXRmODA0eGZuIn0.6lqWILJ01wCHMGIj4KE79Q"}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    />
    {/* <Marker longitude = {13.0} latitude = {43.0}></Marker> */}
    </div>
    // </div> */}
  );
}

