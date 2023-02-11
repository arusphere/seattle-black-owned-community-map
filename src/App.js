import {React, useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './App.css';
import { Icon } from "leaflet"
import RestaurantsList from "./components/RestaurantsList";
import AddRestaurantForm from "./components/NewEntryForm";


// free icons Flaticon: https://www.flaticon.com/
// Font Awesome: https://fontawesome.com/
// IcoMoon: https://icomoon.io/
// The Noun Project: https://thenounproject.com/
// Material Design Icons: https://material.io/resources/icons/
// Devicon: http://devicon.fr/




const skater = new Icon ({
  iconUrl:"/skateboarding.svg",
  iconSize:[25,25]
});

// const INITIAL_RESTAURANT = [
//   {
//       "address": "16743 Aurora Ave N Shoreline, WA",
//       "city": "Shorline",
//       "county": "King",
//       "cuisine_shop_type": "Coffee Shop",
//       "description": null,
//       "email": "16743 Aurora Ave N Shoreline, WA",
//       "id": 1,
//       "latitude": "47.61312",
//       "longitude": "-122.30164",
//       "name": "Black Coffee NW",
//       "phone_number": null,
//       "state": "WA",
//       "website": "http://www.blackcoffeenw.com/",
//       "zip_code": "98133"
//   },
//   {
//       "address": "2350 E. Union St. Seattle, WA 98122",
//       "city": "Seattle",
//       "county": "King",
//       "cuisine_shop_type": "Soul Food",
//       "description": null,
//       "email": "goodday@communionseattle.com",
//       "id": 2,
//       "latitude": "47.60815",
//       "longitude": "-122.29647",
//       "name": "Communion Restaurant & Bar ",
//       "phone_number": "206.391.8140",
//       "state": "WA",
//       "website": "communionseattle.com",
//       "zip_code": "98122"
//   },
//   {
//       "address": "2726 E. Cherry St. Seattle, WA 98122",
//       "city": "Seattle",
//       "county": "King",
//       "cuisine_shop_type": "Soul Food",
//       "description": null,
//       "email": null,
//       "id": 3,
//       "latitude": "47.57952",
//       "longitude": "-122.31214",
//       "name": "Fat's Chicken & Waffles",
//       "phone_number": "206.602.6863",
//       "state": "WA",
//       "website": "fatschickenandwaffles.com",
//       "zip_code": "98122"
//   }];

function App() {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const URL = "https://sblackownedproxy.herokuapp.com/restaurants";
  
  const addRestaurant = (newRestaurant) => {
    setRestaurantsList([...restaurantsList, newRestaurant]);
  }

  const fetchAllRestaurants = () => {
    axios
      .get(URL)
      .then(res => {
        setRestaurantsList(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(fetchAllRestaurants, []);

  return (
    <div>
      <div>
        <MapContainer center={[47.6, -122.3]} zoom={12} scrollWheelZoom={false}>
          <TileLayer
            url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
            attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
          />
          {restaurantsList.map(restaurant => {
  if (!restaurant.latitude || !restaurant.longitude) {
    return null;
  }
    return (
        <Marker
          key={restaurant.id}
          position={[restaurant.latitude, restaurant.longitude]}
          icon={skater}
        >
          <Popup>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.email}</p>
          </Popup>
        </Marker>
      );
      })}
        </MapContainer>
      </div>
      <div>
        <div>
        <AddRestaurantForm addRestaurant={addRestaurant} />
        </div>
        <RestaurantsList 
        addRestaurant={addRestaurant}
        restaurantEntries={restaurantsList} />

      </div>
    </div>
  );
}

export default App;