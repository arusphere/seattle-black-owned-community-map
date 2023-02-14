import React, { useEffect, useState } from "react";
import getLocation from './Location'

function AddStoreForm(props) {
    const [name, setName] = useState("");
    const [store_type, setStoreType] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [county, setCounty] = useState("");
    const [zip_code, setZipCode] = useState("");
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStore = {
        name,
        store_type,
        description,
        address,
        city,
        state,
        county,
        zip_code,
        latitude: lat,
        longitude: long,
        email,
        phone,
        website,
        };
        props.addStore(newStore);
        setName("");
        setStoreType("");
        setDescription("");
        setAddress("");
        setCity("");
        setState("");
        setCounty("");
        setZipCode("");
        setLat("");
        setLong("");
        setEmail("");
        setPhone("");
        setWebsite("");

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
        placeholder="Store Type"
        value={store_type}
        onChange={(e) => setStoreType(e.target.value)}
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
            onChange={(e) => setAddress(e.target.value)}
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
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />
        <input
            type="text"
            placeholder="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
        />
        <button type="submit">Add Store</button>
        </form>
    );
    }

    export default AddStoreForm;
