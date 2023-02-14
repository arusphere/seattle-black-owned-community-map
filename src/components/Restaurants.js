import React from 'react';
import PropTypes from 'prop-types'

const Restaurant = (props) => {
    const address = props.address;
    const city = props.city;
    const county = props.county;
    const cuisine_shop_type = props.cuisine_shop_type;
    const description = props.description;
    const email = props.email;
    const name = props.name;
    const phone_number = props.phone_number;
    const state = props.state;
    const website = props.website;
    const zip_code = props.zip_code;

    return (
        <div>
            <ul>
                <li>Cuisine/Shop type : {cuisine_shop_type} </li>
                <li>Name : {name}</li>
                <li>Description : {description} </li>
                <li>📧 : {email} </li>
                <li>📲: {phone_number} </li>
                <li>Website : {website} </li>
                <ul>
                    <li>Address : {address} </li>
                    <li>City : {city}</li>
                    <li>County : {county} </li>
                    <li>State : {state} </li>
                    <li>Zip code : {zip_code} </li>
                </ul>
            </ul>
        </div>
    );
};

export default Restaurant;