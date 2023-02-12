import React from 'react';
import PropTypes from 'prop-types'

const Stores = (props) => {
    const id = props.id; 
    const address = props.address;
    const city = props.city;
    const state = props.state;
    const county = props.county;
    const description = props.description;
    const latitude = props.latitude;
    const longitude = props.longitude;
    const name = props.name;
    const website = props.website;
    const zip_code = props.zip_code;
    const store_type = props.store_type;
    const phone = props.phone;
    const email = props.email;

    
    return (
        <div>
        address : {address};
        city : {city};
        county : {county};
        state : {state}
        description : {description};
        latitude : {latitude};
        longitude : {longitude};
        name : {name};
        state : {state};
        website : {website};
        zip_code : {zip_code};
        store_type : {store_type};
        phone : {phone};
        email : {email};
    </div>
    )
}



export default Stores 