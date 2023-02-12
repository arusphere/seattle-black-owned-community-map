import React from "react";
import Sites from "./Sites";


const SitesList = (props) => {
    const sitesComponents = props.sitesEntries.map((sitesEntry)=>{
        return (
            <li key={sitesEntry.id}>
                <Sites
                    sites_id = {sitesEntry.id}
                    address = {sitesEntry.address}
                    city = {sitesEntry.city}
                    county = {sitesEntry.county}
                    description = {sitesEntry.description}
                    email = {sitesEntry.email}
                    latitude = {sitesEntry.latitude}
                    longitude = {sitesEntry.longitude}
                    name = {sitesEntry.name}
                    state = {sitesEntry.state}
                    zip_code = {sitesEntry.zip_code}
                />
            </li>
        );
    });
    return (
        <section>
            <ul>{sitesComponents}</ul>
        </section>
    )
}

export default SitesList;