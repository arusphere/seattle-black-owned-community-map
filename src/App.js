import {React, useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './App.css';
import { Icon } from "leaflet"
import RestaurantsList from "./components/RestaurantsList";
import AddRestaurantForm from "./components/NewEntryForm";
import ServicesList from "./components/ServicesList";
import SitesList from "./components/SitesList";
import StoresList from "./components/StoresList";




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



function App() {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const URL = "https://sblackownedproxy.herokuapp.com/restaurants";
  
  const [servicesList, setServiceList] = useState([]);
  const URL2 = "https://sblackownedproxy.herokuapp.com/blackownedservices"

  const [sitesList,setSitesList] = useState([]);
  const URL3 = "https://sblackownedproxy.herokuapp.com/historicalsites"

  const [storesList,setStoresList] = useState([]);
  const URL4 = "https://sblackownedproxy.herokuapp.com/blackownedstores"

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

  const fetchAllServices = () => {
    axios
      .get(URL2)
      .then(res => {
        setServiceList(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const fetchAllSites = () => {
    axios
      .get(URL3)
      .then(res => {
        setSitesList(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const fetchAllStores = () => {
    axios
      .get(URL4)
      .then(res => {
        setStoresList(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };


  useEffect(fetchAllRestaurants, []);
  useEffect(fetchAllServices, []);
  useEffect(fetchAllSites, []);
  useEffect(fetchAllStores,[]);

  return (
    <div>
      <div>
        <MapContainer center={[47.6, -122.3]} zoom={12} scrollWheelZoom={false}>
          <TileLayer
            url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
            attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
          />

          {/* RESTAURANTS */}
          {restaurantsList.map(restaurant => {
  if (!restaurant.latitude || !restaurant.longitude) {
    return null;
  }
    return (
        <Marker
          key={restaurant.id}
          position={[restaurant.latitude, restaurant.longitude]}
        >
          <Popup>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.email}</p>
          </Popup>

        </Marker>
  
      );
      })}

      {/* SERVICES */}

      {servicesList.map(service => {
  if (!service.latitude || !service.longitude) {
    return null;
  }
    return (
        <Marker
          key={service.id}
          position={[service.latitude, service.longitude]}
        >
          <Popup >
            <h2>{service.name}</h2>
            <p>{service.email}</p>
          </Popup>
        </Marker>
  
      );
      })}

      {/* SITES */}
      {sitesList.map(site => {
  if (!site.latitude || !site.longitude) {
    return null;
  }
    return (
        <Marker
          key={site.id}
          position={[site.latitude, site.longitude]}
          icon = {skater}
        >
          <Popup>
            <h2>{site.name}</h2>
            <p>{site.email}</p>
            <p>{site.description}</p>
          </Popup>
        </Marker>
  
      );
      })}
       {/* STORES */}
      {storesList.map(store => {
  if (!store.latitude || !store.longitude) {
    return null;
  }
    return (
        <Marker
          key={store.id}
          position={[store.latitude, store.longitude]}
          
        >
          <Popup>
            <h2>{store.name}</h2>
            <p>{store.email}</p>
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
      <div>
      <ServicesList
        servicesEntries = {servicesList} />
      </div>
      <div>
      <SitesList
        sitesEntries = {sitesList} />
      </div>
      <div>
      <StoresList
        storesEntries = {storesList} />
      </div>
    </div>
  );
}

export default App;