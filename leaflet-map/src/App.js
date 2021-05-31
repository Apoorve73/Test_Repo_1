import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet'
import React, {useState, useRef, useEffect} from 'react';
import L from 'leaflet'
import osm from "./osm-provider"
import "leaflet/dist/leaflet.css"
import "leaflet-draw/dist/leaflet.draw.css"
import { EditControl } from "react-leaflet-draw"
import axios from "axios"
const h3 = require("h3-js");

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

function App() {

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

  const [center, setCenter] = useState(
    {
      lat: 13.089038097696806,
    lon: 77.44557259565254,
    }
  )
  const [mapLayers, setMapLayers] = useState([]);
  let data = {}
  let res = null

    const ZOOM = 9
    const mapRef = useRef()

    const _onCreate = (e) => {
      console.log(e);
  
      const { layerType, layer } = e;
      if (layerType === "polygon") {
        const { _leaflet_id } = layer;
  
        setMapLayers((layers) => [
          ...layers,
          { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
        ]);

        data ={ coordinates: layer.getLatLngs()[0] }

        axios.post('https://spatialapi.herokuapp.com/post_json',
        { coordinates: layer.getLatLngs()[0] }
        , {timeout:30000}).
        then((response) => {
          console.log(response.data.features[0].geometry["coordinates"])
          res = response.data.features[0].geometry["coordinates"]
        },
        (Error) => {
          console.log(Error)
        })

        console.log(data)
      }
    };
  
    const _onEdited = (e) => {
      console.log(e);
      const {
        layers: { _layers },
      } = e;
  
      Object.values(_layers).map(({ _leaflet_id, editing }) => {
        data = {latlngs: { ...editing.latlngs[0] }}
        setMapLayers((layers) =>
          layers.map((l) =>
            l.id === _leaflet_id
              ? { ...l, latlngs: { ...editing.latlngs[0] } }
              : l
          )
        );
      });

    };
  
    const _onDeleted = (e) => {
      console.log(e);
      data = {}
      const {
        layers: { _layers },
      } = e;
  
      Object.values(_layers).map(({ _leaflet_id }) => {
        setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
      });
      console.log(data)
    };
  
  return (
    <div className="App">
      <header className="App-header">
        <MapContainer
        center={center}
        zoom={ZOOM}
        ref = {mapRef}
        type= "geojson"
        data = {geojson}
        >
          <FeatureGroup>

            <EditControl position="topright"
            position="topright"
            onCreated={_onCreate}
            onEdited={_onEdited}
            onDeleted={_onDeleted}
            draw={{ 
              rectangle:false,
              circle:false,
              circlemarker:false,
              marker:false }}
            />
          </FeatureGroup>

          <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}/>

        </MapContainer>
      </header>
      <div>
      <pre className="text-left">{JSON.stringify(res, 0, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
