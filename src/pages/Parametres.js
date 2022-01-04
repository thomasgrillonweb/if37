import React from "react";
import Navbar from "../components/Navbar";

import './Parametres.css';

const Parametres = (props) => {

    const deleteHistory = () => {
        localStorage.removeItem('historyAllergens');
    }

    return (
        <div className="background">
            <div className="page-title">Parametres</div>
            <div className="btn-delete-history" onClick={deleteHistory}>Effacer l'historique</div>
            <Navbar />
        </div>
      );
} 

export default Parametres;