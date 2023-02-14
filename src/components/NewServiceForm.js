import React, { useState } from "react";
import Location from "./Location";

function AddServiceForm(props) {
    const [name, setName] = useState("");
    const [service_type, setServiceType] = useState("");
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
    const [non_profit, setNonProfit] = useState("")
    const [public_business,setPublicBusiness] = useState("")

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
        const newService = {
        name,
        service_type,
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
        non_profit,
        public_business
        };
        props.addService(newService);
        setName("");
        setDescription("");
        setLat("");
        setLong("");
        setEmail("");
        setPhone("");
        setWebsite("");
        setAddress("");
        setCity("");
        setNonProfit("")
        setPublicBusiness("");
        setServiceType("");
        setCounty("")
        setZipCode("")
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
        placeholder="Service Type"
        value={service_type}
        onChange={(e) => setServiceType(e.target.value)}
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
        <input
            type="text"
            placeholder="Non_Profit(T/F)"
            value={non_profit}
            onChange={(e) => setNonProfit(e.target.value)}
        />
        <input
            type="text"
            placeholder="Public Business(T/F)"
            value={public_business}
            onChange={(e) => setPublicBusiness(e.target.value)}
        />
        <button type="submit">Add Service</button>
        </form>
    );
    }

    export default AddServiceForm;
