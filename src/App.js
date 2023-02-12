import {React, useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './App.css';
import { Icon } from "leaflet"

import RestaurantsList from "./components/RestaurantsList";
import ServicesList from "./components/ServicesList";
import SitesList from "./components/SitesList";
import StoresList from "./components/StoresList";
import AddRestaurantForm from "./components/NewRestaurantForm";
import AddServiceForm from "./components/NewServiceForm";
import AddStoreForm from "./components/NewStoreForm";
import AddSiteForm from "./components/NewSiteForm";

// free icons Flaticon: https://www.flaticon.com/
// Font Awesome: https://fontawesome.com/
// IcoMoon: https://icomoon.io/
// The Noun Project: https://thenounproject.com/
// Material Design Icons: https://material.io/resources/icons/
// Devicon: http://devicon.fr/

const serviceIcon = new Icon({
  iconUrl: "/serviceicon.png",
  iconSize: [25, 25],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
  className: "service-icon"
});


const restaurantIcon = new Icon({
  iconUrl: "/restaurantsicon.png",
  iconSize: [25, 25],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
  className: "restaurant-icon"
});

const storesIcon = new Icon({
  iconUrl: "/storesicon.png",
  iconSize: [25, 25],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
  className: "stores-icon"
});

const historicalsitesIcon = new Icon({
  iconUrl: "/historicalsites.png",
  iconSize: [25, 25],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
  className: "historicalsite-icon"
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
  const addService = (newService) => {
    setServiceList([...servicesList,newService]);
  }
  const addStore = (newStore) => {
    setStoresList([...storesList,newStore])
  }

  const addSite = (newSite) => {
    setSitesList([...sitesList,newSite])
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
          icon={restaurantIcon }
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
          icon={serviceIcon}
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
          icon = {historicalsitesIcon}
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
          icon = {storesIcon}
          
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
        <AddServiceForm addService = {addService}/>
        <AddStoreForm addStore = {addStore} />
        <AddSiteForm addSite = {addSite} />
        </div>
        <h2>All Restaurant</h2>
        <RestaurantsList 
        addRestaurant={addRestaurant}
        restaurantEntries={restaurantsList} />
      </div> 
      <div>
      <h2>All Services</h2>
      <ServicesList
        servicesEntries = {servicesList} />
      </div>
      <div>
      <h2>All Sites</h2>
      <SitesList
        sitesEntries = {sitesList} />
      </div>
      <div>
      <h2>All Stores</h2>
      <StoresList
        storesEntries = {storesList} />
      </div>
    </div>
  );
}



export default App;