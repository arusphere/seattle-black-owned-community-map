import React from 'react';
import PropTypes from 'prop-types'

const Services = (props) => {
    const id = props.id;
    const address = props.address;
    const city = props.city;
    const county = props.county;
    const state = props.state;
    const description = props.description;
    const email = props.email;
    const latitude = props.latitude;
    const longitude = props.longitude;
    const name = props.name;
    const phone = props.phone;
    const non_profit = props.non_profit;
    const public_business = props.public_business;
    const service_type = props.service_type;
    const website = props.website;
    const zip_code = props.zip_code;
    return (
        <div>
            service_type : {service_type};
            name : {name};
            description : {description};
            email : {email};
            phone_number : {phone};
            website : {website};
            public business: {public_business}
            non profit : {non_profit}
            address : {address};
            city : {city};
            state : {state};
            county : {county};
            zip_code : {zip_code};
            latitude : {latitude};
            longitude : {longitude};

        </div>
    );

}

export default Services; 