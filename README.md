# **Seattle Black-Owned Community Map**

This project is a web application that serves as a community hub to help promote Black-owned businesses, services, and historical sites in Seattle, Washington. Users can view a map of Seattle with markers for all the businesses and sites on the map. They can click on each marker to see more information about each location and its contact details.

The application was built using React and Leaflet, a JavaScript library for interactive maps. It fetches data from four endpoints using axios, a Promise-based HTTP client, and stores the data in state variables using React hooks.

## **How to Use**

1. Clone the repository.
2. Navigate to the project directory in your terminal.
3. Run **`npm install`** to install the project dependencies.
4. Run **`npm start`** to start the application on your local server.

The application can be viewed in your browser at **`http://localhost:3000`**.

## **Features**

### **Map**

- The map shows the locations of all the Black-owned businesses, services, and historical sites in Seattle.
- Each marker on the map represents a single location.
- Users can click on each marker to see more information about each location and its contact details.

### **Add a Location**

- Users can add new locations to the map by filling out a form.
- Four different types of locations can be added: restaurants, services, historical sites, and stores.

### **Overview**

- The application includes an overview of all the businesses and sites on the map.
- Users can view lists of all the restaurants, services, historical sites, and stores on separate tabs.
- Each list item includes the name of the location and a link to its marker on the map.

### **Contact**

- Users can find the developer's contact information in the footer of the page.
- Links to the developer's GitHub, LinkedIn, and email are provided.

## **Dependencies**

This project was built using the following libraries:

- React
- axios
- Leaflet
