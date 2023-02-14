import React from "react";
import Stores from "./Stores"


const StoresList = (props) => {
    const storesComponents = props.storesEntries.map((storesEntry,index)=>{
        return (
            <li key={index}>
                <Stores
                    sites_id = {storesEntry.id}
                    address = {storesEntry.address}
                    city = {storesEntry.city}
                    county = {storesEntry.county}
                    description = {storesEntry.description}
                    email = {storesEntry.email}
                    latitude = {storesEntry.latitude}
                    longitude = {storesEntry.longitude}
                    name = {storesEntry.name}
                    state = {storesEntry.state}
                    zip_code = {storesEntry.zip_code}
                    phone = {storesEntry.phone}
                    website = {storesEntry.website}
                />
            </li>
        );
    });
    return (
        <section>
            <ul>{storesComponents}</ul>
        </section>
    )
}

export default StoresList;