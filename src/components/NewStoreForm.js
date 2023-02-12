import React, { useEffect, useState } from "react";
import getLocation from './Location'

function AddStoreForm(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");

    useEffect(()=> {
        getLocation(address,setLat,setLong);
    },[address]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStore = {
        name,
        description,
        latitude: lat,
        longitude: long,
        email,
        phone,
        website,
        };
        props.addStore(newStore);
        setName("");
        setDescription("");
        setAddress("");
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
