import React, { useState } from "react";
import Location from "./Location";

function AddSiteForm(props) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [county, setCounty] = useState("");
    const [zip_code, setZipCode] = useState("");
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");

    const handleAddressChange = (event) => {
        const address = event.target.value;
        setAddress(address);
        Location(address, setLat, setLong, (data) => {
            if (data.address) {
            setCity(data.address.city);
            setState(data.address.state);
            setZipCode(data.address.postcode);
            }
        });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSite = {
        name,
        address,
        city,
        state,
        county,
        description,
        latitude: lat,
        longitude: long,
        website,
        zip_code,
        };
        props.addSite(newSite);
        setName("");
        setDescription("");
        setLat("");
        setLong("");
        setWebsite("");
        setAddress("");
        setCity("");
        setState("");
        setCounty("");
        setZipCode("");

    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={handleAddressChange}
        />
        <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
        <input
        type="text"
        placeholder="Zip Code"
        value={zip_code}
        onChange={(e) => setZipCode(e.target.value)}
        />
        <input
        type="text"
        placeholder="County"
        value={county}
        onChange={(e) => setCounty(e.target.value)}
        />
        <input
        type="text"
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
        />
        <input
            type="text"
            placeholder="Latitude"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
        />
        <input
            type="text"
            placeholder="Longitude"
            value={long}
            onChange={(e) => setLong(e.target.value)}
        />
        <button type="submit">Add Site</button>
        </form>
    );
    }

    export default AddSiteForm;
