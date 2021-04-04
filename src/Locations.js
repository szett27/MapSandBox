
import * as React from 'react';
import locations from './locations.json'

function Locations(props){

    const[coords, setCoords] = React.useState({
        latitude: 0.0,
        longitude: 0.0
    })

console.log(`Actual Coords: ${coords.latitude}  ${coords.longitude}`)

function handelChange(value){
    let setLocation = locations.filter(location => location.name === value)
    setCoords(coords.latitude = setLocation[0].latitude, coords.longitude = setLocation[0].longitude)
}

  console.log(`Props: ${props.latitude}`)
    let i = 0;
    const locationlist = 
        locations.map(location=>{
            i++
            return(
                <option value= {location.name} id ={i}>{location.name}</option>
            )
    })

console.log(locationlist)
    return(
        <div id = "locations">
        <select onChange = {(e)=>handelChange(e.option.value)}>
        {locationlist}
        </select>
        </div>
    )

}


export default Locations