import axios from "axios";


    const Location = (address, setLat, setLong, callback) => {
        let latitude, longitude;
        axios
        .get('https://seattleblackcommunitymap-proxy.herokuapp.com/location', {
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
            callback();
        })
        .catch((error) => {
            console.log('error in getting lat and lon!', error);
        });
    };

export default Location;