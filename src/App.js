
import * as React from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import Providers from './Providers';
import Locations from './Locations';
import Login from './Login';
import ProviderList from './ProviderList';

export default function App() {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    height: window.innerHeight,
    width: window.innerWidth
  });

  const [showPopup, togglePopup] = React.useState(false)


  return (
    <div>
    <h1>Tongue Tie Providers</h1>
    {/* <Login /> */}
    <div id = "navbar">
    <nav>
    <ul>
    <li><Providers /></li>
    <li><Locations latitude = {viewport.latitude} longitude = {viewport.longitude}/></li>
    </ul>
    </nav>
    </div>
    <div id = "providers">
      <ProviderList />
    </div>
    <div id = "map">
    <ReactMapGL
      {...viewport}
      mapStyle = "mapbox://styles/szett27/ckmtbbjww3sei17qthip3st7g"
      mapboxApiAccessToken = {"pk.eyJ1Ijoic3pldHQyNyIsImEiOiJja210ODZwN2gwZW1tMnlzZXRmODA0eGZuIn0.6lqWILJ01wCHMGIj4KE79Q"}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
       {showPopup && <Popup
          latitude={37.78}
          longitude={-122.41}
          closeButton={true}
          closeOnClick={false}
          onClose={() => togglePopup(false)}
          anchor="top" >
          <div>You are here</div>
        </Popup>}
    <Marker latitude = {38.948880} longitude = {-104.739920}>
      <div id="home">
        I live here!
    </div>
    </Marker>
    </ReactMapGL>
    </div>
    </div>
  );
}

