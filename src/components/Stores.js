import React from 'react';
import PropTypes from 'prop-types'

const Stores = (props) => {
    const address = props.address;
    const city = props.city;
    const state = props.state;
    const county = props.county;
    const description = props.description;
    const name = props.name;
    const website = props.website;
    const zip_code = props.zip_code;
    const store_type = props.store_type;
    const phone = props.phone;
    const email = props.email;

    
    return (
        <div>
            <ul>
                <li>Store type : {store_type}</li>
                <li> Store name : {name}</li>
                <li>Description : {description}</li>
                <li>📲 : {phone}</li>
                <li>📧  : {email}</li>
                <li>Website : {website};</li>
                <ul>
                    <li>Address : {address}</li>
                    <li>City : {city}</li>
                    <li>County : {county}</li>
                    <li>State : {state}</li>
                    <li>zip_code : {zip_code}</li>
                </ul>
            </ul>
    </div>
    )
}



export default Stores 