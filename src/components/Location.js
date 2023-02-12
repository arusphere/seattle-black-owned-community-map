import axios from "axios";


const getLocation = (address,setLat,setLong) => {
    let latitude, longitude;
    axios
    .get('http://127.0.0.1:5000/location', {
        params: {
        q: address,
        },
    })
    .then((response) => {
        latitude = response.data[0].lat;
        longitude = response.data[0].lon;
        console.log('success in getting lat and lon!', latitude, longitude);
        setLat(latitude);
        setLong(longitude);
    });
};

export default getLocation;