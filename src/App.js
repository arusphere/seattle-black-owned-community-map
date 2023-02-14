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
  const [formOpen, setFormOpen] = useState(null);
  const toggleForm = (formType) => {
    setFormOpen(formType);
  };

  const fetchData = (url, setData) => {
    axios
      .get(url)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const [flagCounts, setFlagCounts] = useState({});


  const [restaurantsList, setRestaurantsList] = useState([]);
  const restaurantURL = "https://seattleblackcommunitymap-proxy.herokuapp.com/restaurants";
  
  const [servicesList, setServiceList] = useState([]);
  const serviceURL = "https://seattleblackcommunitymap-proxy.herokuapp.com/historicalsites";

  const [sitesList,setSitesList] = useState([]);
  const siteURL = "https://seattleblackcommunitymap-proxy.herokuapp.com/historicalsites";

  const [storesList,setStoresList] = useState([]);
  const storeURL = "https://seattleblackcommunitymap-proxy.herokuapp.com/blackownedstores";

  
  const addRestaurant = (newRestaurant) => {
    axios
      .post(restaurantURL, newRestaurant)
      .then(res => {
        setRestaurantsList([...restaurantsList, res.data]);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const addService = (newService) => {
    axios
      .post(serviceURL, newService)
      .then(res => {
        setServiceList([...servicesList, res.data]);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const addStore = (newStore) => {
    axios
      .post(storeURL, newStore)
      .then(res => {
        setStoresList([...storesList, res.data]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const addSite = (newSite) => {
    axios
      .post(siteURL, newSite)
      .then(res => {
        setSitesList([...sitesList, res.data]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData(restaurantURL, setRestaurantsList);
    fetchData(serviceURL, setServiceList);
    fetchData(siteURL, setSitesList);
    fetchData(storeURL, setStoresList);
  }, []);

  const handleFlag = (id, increment) => {
    if (increment) {
      setFlagCounts({ ...flagCounts, [id]: flagCounts[id] ? flagCounts[id] + 1 : 1 });
    } else {
      setFlagCounts({ ...flagCounts, [id]: flagCounts[id] ? flagCounts[id] - 1 : 0 });
    }
  };
  return (
    <div>
      <div>
        <MapContainer center={[47.6, -122.3]} zoom={10} scrollWheelZoom={false} doubleClickZoom
        true>
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
            <button onClick={() => handleFlag(restaurant.id, true)}>➕ 🚩</button>
            <button onClick={() => handleFlag(restaurant.id, false)}>➖ 🚩</button>
            <p>Needs revision count: {flagCounts[restaurant.id] || 0}</p>
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
            <button onClick={() => handleFlag(service.id, true)}>➕ 🚩</button>
            <button onClick={() => handleFlag(service.id, false)}>➖ 🚩</button>
            <p>Needs revision count : {flagCounts[service.id] || 0}</p>
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
            <button onClick={() => handleFlag(site.id, true)}>➕ 🚩</button>
            <button onClick={() => handleFlag(site.id, false)}>➖ 🚩</button>
            <p>Needs revision count: {flagCounts[site.id] || 0}</p>
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
            <button onClick={() => handleFlag(store.id, true)}>➕ 🚩</button>
            <button onClick={() => handleFlag(store.id, false)}>➖ 🚩</button>
            <p>Needs revision count: {flagCounts[store.id] || 0}</p>
          </Popup>

        </Marker>
  
      );
      })}
        </MapContainer>
      </div>
      <div>
        <div>
        <div>
                <button onClick={() => toggleForm('newRestaurant')}>Add Restaurant/Shop</button>
                {formOpen === 'newRestaurant' && <AddRestaurantForm addRestaurant={addRestaurant} />}
          </div>
          <div>
                <button onClick={() => toggleForm("newService")}>Add Service</button>
                {formOpen === "newService" && <AddServiceForm addService={addService} />}
          </div>
          <div>
                <button onClick={() => toggleForm("newSite")}>Add historical Landmark</button>
                {formOpen === "newSite" && <AddSiteForm addSite={addSite} />}
          </div>
          <div>
                <button onClick={() => toggleForm("newStore")}>Add new store</button>
                {formOpen === "newStore" && <AddStoreForm addStore={addStore} />}
          </div>
        </div>
        <h2>All Restaurant</h2>
        <RestaurantsList 
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