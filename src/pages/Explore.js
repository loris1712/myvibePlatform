// pages/Explore.js
import React, { useEffect, useState }  from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '../components/Header';
import '../styles/Explore.css';
import L from 'leaflet';
import { DivIcon } from 'leaflet';
import { useLocation } from 'react-router-dom';

function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  const customMarker = new DivIcon({
    className: 'custom-marker', 
    iconSize: [28, 28], 
    iconAnchor: [8, 8], 
  });

  return position === null ? null : (
    <Marker position={position} icon={customMarker}>
      <Popup>
        Where I am now <br />
      </Popup>
    </Marker>
  )
}

function Explore() {
  
  const cities = {
    'Toronto': { lat: 43.651070, lng: -79.347015 },
    'New York': { lat: 40.712776, lng: -74.005974 },
    'London': { lat: 51.5074, lng: -0.1278 },
    'Barcelona': { lat: 41.3851, lng: 2.1734 },
    'Milan': { lat: 45.4642, lng: 9.1900 },
    'Los Angeles': { lat: 34.0522, lng: -118.2437 },
    'San Francisco': { lat: 37.7749, lng: -122.4194 },
    'Dubai': { lat: 25.276987, lng: 55.296249 },
    'Seattle': { lat: 47.6062, lng: -122.3321 },
    'Miami': { lat: 25.7617, lng: -80.1918 },
    'Chicago': { lat: 41.8781, lng: -87.6298 },
  };

  let position = [];
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState([]);
  const [geolocationEnabled, setGeolocationEnabled] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get('city');

  const coordinates = cities[city];
  if (coordinates) {
    const { lat, lng } = coordinates;
    position = [lat, lng];
  }

  const customMarker = new DivIcon({
    className: 'custom-marker', 
    iconSize: [28, 28], 
    iconAnchor: [8, 8], 
  });

  const customMarkerPlace = new DivIcon({
    className: 'custom-marker-place',
    iconSize: [32, 44],
    iconAnchor: [16, 32],
  });

  useEffect(() => {
    fetch('https://myvibe-backend.vercel.app/api/allPlaces?cityName='+ city)
      .then(response => response.json())
      .then(data => {
        if(data.length > 0){
          setPlaces(data);
        }
      })
      .catch(error => {
        console.error('Error calling API:', error);
      });
  }, [city]);

  function reduceSidebar() {
    const sidebar = document.getElementById('sidebarPlaces');
    const openButton = document.getElementById('open-sidebar');
    if (sidebar) {
      sidebar.style.display = 'none';
      openButton.style.display = 'inherit';
    }
  }

  function openSidebar() {
    const sidebar = document.getElementById('sidebarPlaces');
    const openButton = document.getElementById('open-sidebar');
    if (sidebar) {
      sidebar.style.display = 'inherit';
      openButton.style.display = 'none';
    }
  }
  
  function showPlaceProfile(place) {
    const profile = document.getElementById('place-profile');
    const sidebar = document.getElementById('sidebarPlaces');
    const openButton = document.getElementById('open-sidebar');
    if (profile) {
      setPlace(place);
      profile.style.display = 'inherit';
      sidebar.style.display = 'inherit';
      openButton.style.display = 'none';
    }
  }

  function closeProfile(place) {
    const profile = document.getElementById('place-profile');
    if (profile) {
      setPlace(place);
      profile.style.display = 'none';
    }
  }

  return (
    <div>
      <Header />
        <div className='map-container'>
          <MapContainer center={position} zoom={13} className='map-component'>
            <TileLayer
              url="https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://carto.com/">Carto</a> contributors'
            />
            <Marker position={position} icon={customMarker}>
              <Popup>
                Where I am now <br />
              </Popup>
            </Marker>

            {places.map((place, index) => {
              return (
                <Marker key={index}
                position={[parseFloat(place.latitude.replace(',', '.')), parseFloat(place.longitude.replace(',', '.'))]}  
                icon={customMarkerPlace}
                onClick={() => showPlaceProfile(place)}
                >
                  <Popup>
                    <p style={{textAlign:'center', cursor: 'pointer'}} onClick={() => showPlaceProfile(place)}>
                      {place.name} <br /> 
                      <span style={{fontSize: '10px'}}>Click here for the profile</span>
                    </p>
                  </Popup>
              </Marker>
              );
            })}
            {geolocationEnabled && <LocationMarker />}
            <div className='your-position' onClick={() => setGeolocationEnabled(true)}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" fill="white" viewBox="0 0 512 512"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
              </span>
              <p>
                Find your position
              </p>
            </div>
          </MapContainer>

          <div className='open-sidebar' onClick={() => openSidebar()} id="open-sidebar">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="16px" fill="white" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </span>
          </div>

          <div className='sidebar-places' id="sidebarPlaces">
            <div className='close-sidebar' onClick={() => reduceSidebar()}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" fill="white" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
              </span>
            </div>
            <div className='place-profile' id='place-profile'>
            <div className='close-profile' onClick={() => closeProfile()} id="close-profile">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="16px" fill="white" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </span>
            </div>
            {place
                && (
                  <div className='place-profile-container'>
                  <img src={place.photo} className='place-profile-image' referrerPolicy="no-referrer"/>
                  <div className='info-profile'>
                    <div className='title-profile'>
                      {place.name}
                    </div>
                    <div className='address-profile'>
                      {place.full_address}
                    </div>

                    <div className='filters-profile'>
                      {place.category} ∙ {place.range_value} ∙ {place.Dresscode} ∙ {place.Music}
                    </div>
                  </div>
                </div>
                )
              }
              <div className='profile-cta'>
               <p className='profile-cta-text'>To read more informations, filter places, and share them.</p>
               <button className="btn btn-primary btn-create btn-cta-place" type="submit">Download App</button>
              </div>
            </div>
            <div className='places-list'>
              {places.map((place, index) => {
                return (
                  <div className='place' key={index} onClick={() => showPlaceProfile(place)}>
                  <div className='info'>
                    <div className='title'>
                      {place.name}
                    </div>
                    <div className='address'>
                      {place.full_address}
                    </div>

                    <div className='filters'>
                      {place.category} ∙ {place.range_value} ∙ {place.Dresscode} ∙ {place.Music}
                    </div>
                  </div>
                  <img src={place.photo} className='place-image' referrerPolicy="no-referrer"/>
                </div>
                );
              })}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Explore;

