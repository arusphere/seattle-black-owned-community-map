
import { Icon } from "leaflet"



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



export default {historicalsitesIcon, storesIcon,restaurantIcon,serviceIcon}