import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './App.css';
import { Icon } from "leaflet"



const INITIAL_RESTAURANT = [
  {
      "address": "16743 Aurora Ave N Shoreline, WA",
      "city": "Shorline",
      "county": "King",
      "cuisine_shop_type": "Coffee Shop",
      "description": null,
      "email": "16743 Aurora Ave N Shoreline, WA",
      "id": 1,
      "latitude": "47.61312",
      "longitude": "-122.30164",
      "name": "Black Coffee NW",
      "phone_number": null,
      "state": "WA",
      "website": "http://www.blackcoffeenw.com/",
      "zip_code": "98133"
  },
  {
      "address": "2350 E. Union St. Seattle, WA 98122",
      "city": "Seattle",
      "county": "King",
      "cuisine_shop_type": "Soul Food",
      "description": null,
      "email": "goodday@communionseattle.com",
      "id": 2,
      "latitude": "47.60815",
      "longitude": "-122.29647",
      "name": "Communion Restaurant & Bar ",
      "phone_number": "206.391.8140",
      "state": "WA",
      "website": "communionseattle.com",
      "zip_code": "98122"
  },
  {
      "address": "2726 E. Cherry St. Seattle, WA 98122",
      "city": "Seattle",
      "county": "King",
      "cuisine_shop_type": "Soul Food",
      "description": null,
      "email": null,
      "id": 3,
      "latitude": "47.57952",
      "longitude": "-122.31214",
      "name": "Fat's Chicken & Waffles",
      "phone_number": "206.602.6863",
      "state": "WA",
      "website": "fatschickenandwaffles.com",
      "zip_code": "98122"
  }];

function App() {
  // seattle coordinates 47.6, -122.3
  // otwa coordinates 45.4, -75.7

  return (
    <MapContainer center={[47.6, -122.3]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {INITIAL_RESTAURANT.map(restaurant => (
    <Marker
    position={[
      restaurant.latitude,
      restaurant.longitude
    ]}
  >

    <Popup>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.email}</p>
    </Popup>

  </Marker>

      ))}
  
    </MapContainer>
  );
}
export default App;