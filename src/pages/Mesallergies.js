import React from "react";
import FormAllergies from "../components/FormAllergies";
import Navbar from "../components/Navbar";

import './Mesallergies.css';

const Mesallergies = (props) => {
    return (
        <div className="background">
            <div className="page-title">Mes allergies</div>
            <FormAllergies />
            <Navbar />
        </div>
      );
} 

export default Mesallergies;