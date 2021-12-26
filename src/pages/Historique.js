import React from "react";
import HistoryItem from "../components/HistoryItem";
import Navbar from "../components/Navbar";

import './Historique.css';

const Historique = (props) => {

    const history = JSON.parse(localStorage.getItem('historyAllergens'))

    return (
        <div className="background">
            <div className="page-title">Historique</div>
            {history?.map((element, index) => {
                return <HistoryItem element={element} key={index}/>
            })}
            <Navbar />
        </div>
      );
} 

export default Historique;