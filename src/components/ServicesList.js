import React from "react";
import PropTypes from "prop-types";
import Services from "./Services";

const ServicesList = (props) => {
    const servicesComponents = props.servicesEntries.map((serviceEntry) =>{
        return (
            <li key ={serviceEntry.id}>
                <Services
                            service_id = {serviceEntry.id}
                            address = {serviceEntry.address}
                            city = {serviceEntry.city}
                            county = {serviceEntry.county}
                            service_type = {serviceEntry.cuisine_shop_type}
                            description = {serviceEntry.description}
                            email = {serviceEntry.email}
                            latitude = {serviceEntry.latitude}
                            longitude = {serviceEntry.longitude}
                            name = {serviceEntry.name}
                            phone_number = {serviceEntry.phone_number}
                            state = {serviceEntry.state}
                            website = {serviceEntry.website}
                            zip_code = {serviceEntry.zip_code}
                            public_business = {serviceEntry.public_business}
                            non_profit = {serviceEntry.non_profit}

                />
            </li>
        );
    });
    return (
        <section>
            <ul>{servicesComponents}</ul>
        </section>
    );
};




export default ServicesList;