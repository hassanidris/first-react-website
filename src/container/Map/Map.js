import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import { formatRelative } from "date-fns";

// import "@reach/combobox/styles.css";
// import mapStyles from "./mapStyles";

// const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
// const options = {
//   styles: mapStyles,
//   disableDefaultUI: true,
//   zoomControl: true,
// };
// const center = {
//   lat: 43.6532,
//   lng: -79.3832,
// };

export default function FindUs() {
  const { isLoaded, loadError } = useLoadScript({
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: 'AIzaSyA8pVokoan7TQESJ9G25SnoKkRcFEloT4w',
  //   libraries,
  });
  // const [markers, setMarkers] = React.useState([]);
  // const [selected, setSelected] = React.useState(null);

  // const onMapClick = React.useCallback((e) => {
  //   setMarkers((current) => [
  //     ...current,
  //     {
  //       lat: e.latLng.lat(),
  //       lng: e.latLng.lng(),
  //       time: new Date(),
  //     },
  //   ]);
  // }, []);

  // const mapRef = React.useRef();
  // const onMapLoad = React.useCallback((map) => {
  //   mapRef.current = map;
  // }, []);

  // const panTo = React.useCallback(({ lat, lng }) => {
  //   mapRef.current.panTo({ lat, lng });
  //   mapRef.current.setZoom(14);
  // }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8}></GoogleMap>
    </div>
    // <div>
    //   <h1>
    //     Bears{" "}
    //     <span role="img" aria-label="tent">
    //       ⛺️
    //     </span>
    //   </h1>

    //   <Locate panTo={panTo} />
    //   <Search panTo={panTo} />

    //   <GoogleMap
    //     id="map"
    //     mapContainerStyle={mapContainerStyle}
    //     zoom={8}
    //     center={center}
    //     options={options}
    //     onClick={onMapClick}
    //     onLoad={onMapLoad}
    //   >
    //     {markers.map((marker) => (
    //       <Marker
    //         key={`${marker.lat}-${marker.lng}`}
    //         position={{ lat: marker.lat, lng: marker.lng }}
    //         onClick={() => {
    //           setSelected(marker);
    //         }}
    //         icon={{
    //           url: `/bear.svg`,
    //           origin: new window.google.maps.Point(0, 0),
    //           anchor: new window.google.maps.Point(15, 15),
    //           scaledSize: new window.google.maps.Size(30, 30),
    //         }}
    //       />
    //     ))}

    //     {selected ? (
    //       <InfoWindow
    //         position={{ lat: selected.lat, lng: selected.lng }}
    //         onCloseClick={() => {
    //           setSelected(null);
    //         }}
    //       >
    //         <div>
    //           <h2>
    //             <span role="img" aria-label="bear">
    //               🐻
    //             </span>{" "}
    //             Alert
    //           </h2>
    //           <p>Spotted {formatRelative(selected.time, new Date())}</p>
    //         </div>
    //       </InfoWindow>
    //     ) : null}
    //   </GoogleMap>
    // </div>
  );
}

// function Locate({ panTo }) {
//   return (
//     <button
//       className="locate"
//       onClick={() => {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             panTo({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude,
//             });
//           },
//           () => null
//         );
//       }}
//     >
//       <img src="/compass.svg" alt="compass" />
//     </button>
//   );
// }

// function Search({ panTo }) {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => 43.6532, lng: () => -79.3832 },
//       radius: 100 * 1000,
//     },
//   });

//   // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

//   const handleInput = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();

//     try {
//       const results = await getGeocode({ address });
//       const { lat, lng } = await getLatLng(results[0]);
//       panTo({ lat, lng });
//     } catch (error) {
//       console.log("😱 Error: ", error);
//     }
//   };

//   return (
//     <div className="search">
//       <Combobox onSelect={handleSelect}>
//         <ComboboxInput
//           value={value}
//           onChange={handleInput}
//           disabled={!ready}
//           placeholder="Search your location"
//         />
//         <ComboboxPopover>
//           <ComboboxList>
//             {status === "OK" &&
//               data.map(({ id, description }) => (
//                 <ComboboxOption key={id} value={description} />
//               ))}
//           </ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//     </div>
//   );
// }




// import './FindUs.scss';

// AIzaSyA8pVokoan7TQESJ9G25SnoKkRcFEloT4w

// lat: 64.3,
//   lng: 16.7



// const FindUs = () => {
//   const [viewport, setViewport] = useState({
//     latitude: 64.3,
//     longitude: 16.7,
//     width: '100vw',
//     height: '100vh',
//     zoom: 4
//   })
//   return (
//     <div className='mb__findus'>
//       <ReactMapGL 
      
//       {...viewport} mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}>
//         markers her
//       </ReactMapGL>
//     </div>
//   );
// }

// export default FindUs;




// import mapboxgl from 'mapbox-gl';
// import React, { useEffect, useRef, useState } from 'react';
// import ReactDOM from 'react-dom';
// import geoJson from './chicago-parks.json';
// import './Map.scss';

// mapboxgl.accessToken =
//   'pk.eyJ1IjoiaGFzc2FuaWRyaXMiLCJhIjoiY2wweHU0dGZ0MGFmazNjb3k5d2kzZWtrMiJ9.7qiMzEbEenK0GgRQwe6rig';

// const Marker = ({ onClick, children, feature }) => {
//   const _onClick = (e) => {
//     onClick(feature.properties.description);
//   };

//   return (
//     <button onClick={_onClick} className="marker">
//       {children}
//     </button>
//   );
// };

// const Map = () => {
//   const mapContainerRef = useRef(null);

//   const [lng, setLng] = useState(-87.65);
//   const [lat, setLat] = useState(41.84);
//   const [zoom, setZoom] = useState(10);

//   // Initialize map when component mounts
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom: zoom,
//       width: '100%',
//       height: '100%',
//     });

//     // Render custom marker components
//     geoJson.features.forEach((feature) => {
//       // Create a React ref
//       const ref = React.createRef();
//       // Create a new DOM node and save it to the React ref
//       ref.current = document.createElement('div');
//       // Render a Marker Component on our new DOM node
//       ReactDOM.render(
//         <Marker onClick={markerClicked} feature={feature} />,
//         ref.current
//       );

//       // Create a Mapbox Marker at our new DOM node
//       new mapboxgl.Marker(ref.current)
//         .setLngLat(feature.geometry.coordinates)
//         .addTo(map);
//     });

//     // Add navigation control (the +/- zoom buttons)
//     map.addControl(new mapboxgl.NavigationControl(), 'top-right');

//     map.on('move', () => {
//       setLng(map.getCenter().lng.toFixed(4));
//       setLat(map.getCenter().lat.toFixed(4));
//       setZoom(map.getZoom().toFixed(2));
//     });

//     // Clean up on unmount
//     return () => map.remove();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   const markerClicked = (title) => {
//     window.alert(title);
//   };

//   return (
//     <div>
//       <div className="sidebarStyle">
//         <div>
//           Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//         </div>
//       </div>
//       <div className="map-container" ref={mapContainerRef} />
//     </div>
//   );
// };

// export default Map;