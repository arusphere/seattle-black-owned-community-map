import React, { useState } from "react";
import Location from "./Location";


function AddRestaurantForm(props) {
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [county, setCounty] = useState("");
    const [cuisine_shop_type, setCuisineShopType] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [state, setState] = useState("");
    const [website, setWebsite] = useState("");
    const [zip_code, setZipCode] = useState("");
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
        const newRestaurant = {
        address,
        city,
        county,
        cuisine_shop_type,
        description,
        email,
        name,
        phone_number,
        state,
        website,
        zip_code,
        latitude: lat,
        longitude: long,
        };
        props.addRestaurant(newRestaurant);
        setAddress("");
        setCity("");
        setCounty("");
        setCuisineShopType("");
        setDescription("");
        setEmail("");
        setName("");
        setPhoneNumber("");
        setState("");
        setWebsite("");
        setZipCode("");
        setLat("");
        setLong("");
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
        {/* <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
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
        placeholder="Zip Code"
        value={zip_code}
        onChange={(e) => setZipCode(e.target.value)}
        /> */}
        <input
        type="text"
        placeholder="Cuisine/Shop Type"
        value={cuisine_shop_type}
        onChange={(e) => setCuisineShopType(e.target.value)}
        />
        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        type="text"
        placeholder="Phone Number"
        value={phone_number}
        onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
        type="text"
        placeholder="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        />
        <input
            type="text"
            placeholder="Latitude"
            id="lat-input"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
        />
            <input
            type="text"
            placeholder="Longitude"
            id="long-input"
            value={long}
            onChange={(e) => setLong(e.target.value)}
        />

        <button type="submit">Add Restaurant</button>
        </form>
        );
        }

export default AddRestaurantForm;
