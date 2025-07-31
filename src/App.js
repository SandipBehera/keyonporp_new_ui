import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PropertiesView from "./pages/Properties";
import PropertyDetails from "./pages/Property_Details";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import Privacy from "./pages/privacy";
import ClientForm from "./pages/client_form";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/properties" element={<PropertiesView/>} />
          <Route path="/property_details/:property_name" element={<PropertyDetails/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="properties/:id" element={<PropertiesView/>}/>
          <Route path= "/privacy-policy" element= {<Privacy/>}/>
          <Route path= "/client-form" element= {<ClientForm/>}/>
          {/* <Route path="/contact" component={Contact} /> */}
          {/* Add more routes as needed */}
        </Routes>
     
    </Router>
  );
}

export default App;
