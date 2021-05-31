import React, {useState} from 'react';
import ReactMapGL, { Source, Layer } from "react-map-gl"
const h3 = require("h3-js");
// import * as data from './data.json'

function Map() {

  
  const data = "https://raw.githubusercontent.com/Apoorve73/Test_Repo_1/main/data.json"

  const hex_ids = '8960144b1d7ffff'
  const hexagon = h3.h3ToGeoBoundary(hex_ids,true); //converting hex_id to hex_coord (array of arrays)
  console.log(hexagon);


  const geojson = {
    "type": "Feature",
    "properties": {
      "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "blue",
        "fill-opacity": 0.3,
        "Name ": "Jayanagar"
    },
    "geometry": {
      "type": "Polygon",
      "coordinates":  [
        hexagon
      ]
    }
  }

  const layerStyle = geojson.properties
      
  const [viewport, setViewport] = useState(
    {
      latitude: 13.089038097696806,
      longitude: 77.44557259565254,
      zoom: 12,
      width: '90%',
      height: '100%'
    })

  return (
    <ReactMapGL {...viewport} 
    mapboxApiAccessToken="pk.eyJ1IjoiYXBvb3J2ZTczIiwiYSI6ImNrb3RxYW1wYjBlMDgycW13cnU4MHphYzgifQ.zDI-mD9HRgQ78sJZsTb6vw"
    mapStyle = 'mapbox://styles/mapbox/streets-v11'
    onViewportChange={viewport => {
      setViewport(viewport); // everytime we zoom in or out the value gets updated
    }}>

      {/* {data.features.map(place => (
        <div> */}
          <Source
          id = "new"
          type= "geojson"
          data = {geojson}
          >
          <Layer
          id = {geojson.properties.Name}
          type= "fill"
          source = "new"
          paint= {{
            "fill-color": layerStyle.fill,
            "fill-opacity": layerStyle['fill-opacity']
          }}
          /> 
          </Source>

          {/* </div>
        ))} */}
    </ReactMapGL>
    );
}
// 9306750422
export default Map;