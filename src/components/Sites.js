import React from 'react';
import PropTypes from 'prop-types'
import "./Sites.css"

const Sites = (props) => {
    const address = props.address;
    const city = props.city;
    const state = props.state;
    const county = props.county;
    const description = props.description;
    const name = props.name;
    const website = props.website;
    const zip_code = props.zip_code;
    
    return (
        <div className = 'sites-item'>
            <ul className='sites-name-text'>
                <li> Name : {name}</li>
                <li>Description : {description}</li>
                <li> Website : {website} </li>     
                <ul>
                    <li>Address : {address}</li>
                    <li>City : {city}</li>
                    <li>State : {state}</li>
                    <li> County : {county}</li>
                <li>Zip code : {zip_code}</li>
                </ul>
            </ul>
        State : {state}
    </div>
    )
}

export default Sites;