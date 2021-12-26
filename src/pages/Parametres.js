import React from "react";
import Navbar from "../components/Navbar";

import './Parametres.css';

const Parametres = (props) => {
    return (
        <div className="background">
            <div className="page-title">Parametres</div>
            <p style={{paddingLeft: '2em'}}>Aucun paramètres disponible.</p>
            <Navbar />
        </div>
      );
} 

export default Parametres;