import React from 'react';
import PropTypes from 'prop-types'

const Restaurant = (props) => {
    const id = props.id
    const address = props.address;
    const city = props.city;
    const county = props.county;
    const cuisine_shop_type = props.cuisine_shop_type;
    const description = props.description;
    const email = props.email;
    const latitude = props.latitude;
    const longitude = props.longitude;
    const name = props.name;
    const phone_number = props.phone_number;
    const state = props.state;
    const website = props.website;
    const zip_code = props.zip_code;

    return (
        <div>
            restaurant_id : {id};
            address : {address};
            city : {city};
            county : {county};
            cuisine_shop_type : {cuisine_shop_type};
            description : {description};
            email : {email};
            latitude : {latitude};
            longitude : {longitude};
            name : {name};
            phone_number : {phone_number};
            state : {state};
            website : {website};
            zip_code : {zip_code};
        </div>
    );
};

export default Restaurant;