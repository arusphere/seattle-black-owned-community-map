import React from 'react';
import PropTypes from 'prop-types'

const Services = (props) => {
    const address = props.address;
    const city = props.city;
    const county = props.county;
    const state = props.state;
    const description = props.description;
    const email = props.email;
    const name = props.name;
    const phone= props.phone;
    const non_profit = props.non_profit;
    const public_business = props.public_business;
    const service_type = props.service_type;
    const website = props.website;
    const zip_code = props.zip_code;
    return (
        <div>
            <ul>
                <li>Service type : {service_type}</li>
                <li>Name : {name}</li>
                <li>Description : {description}</li>
                <li> 📧 : {email}</li>
                <li> 📲: {phone}</li>
                <li> website : {website};</li>
                <li>public business: {public_business}</li>
                <li>Non profit : {non_profit}</li>
                <ul>
                    <li>Address : {address}</li>
                    <li>City : {city}</li>
                    <li>state : {state}</li>
                    <li>county : {county}</li>
                    <li>zip_code : {zip_code}</li>
                </ul>
            </ul>
        </div>
    );

}

export default Services; 