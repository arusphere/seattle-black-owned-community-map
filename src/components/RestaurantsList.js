import React from "react";
import PropTypes from "prop-types";
import Restaurant from "./Restaurants";

const RestaurantsList = (props) => {
// const boardEntries = props.restaurantEntries;
console.log(props);

const restaurantComponents = props.restaurantEntries.map((restaurantEntry,index) => {
    return (
    <li key={index}>
        <Restaurant
            restaurant_id = {restaurantEntry.id}
            address = {restaurantEntry.address}
            city = {restaurantEntry.city}
            county = {restaurantEntry.county}
            cuisine_shop_type = {restaurantEntry.cuisine_shop_type}
            description = {restaurantEntry.description}
            email = {restaurantEntry.email}
            latitude = {restaurantEntry.latitude}
            longitude = {restaurantEntry.longitude}
            name = {restaurantEntry.name}
            phone_number = {restaurantEntry.phone_number}
            state = {restaurantEntry.state}
            website = {restaurantEntry.website}
            zip_code = {restaurantEntry.zip_code}
        />
    </li>
    );
});

return (
    <section>
    <ul>{restaurantComponents}</ul>
    </section>
);
};

export default RestaurantsList;