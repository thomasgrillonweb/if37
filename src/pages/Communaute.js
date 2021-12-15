import React from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

import './Communaute.css';

const Communaute = (props) => {
    return (
        <div className="background">
            <div className="page-title">Communauté</div>
            <Post title="Produit préféré" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non sem nulla. Phasellus eget velit ac turpis euismo..." date="12/12/2021"/>
            <Post title="Nouveau chocolat" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non sem nulla. Phasellus eget velit ac turpis euismod scelerisque..." date="10/12/2021"/>
            <Post title="Des idées de préparations ?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non sem nulla. Phasellus eget velit ac turpis euismod sc..." date="09/12/2021"/>
            <Post title="Produit préféré" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non sem nulla. Phasellus eget velit ac turpis euismo..." date="12/12/2021"/>
            <Post title="Nouveau chocolat" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non sem nulla. Phasellus eget velit ac turpis euismod scelerisque..." date="10/12/2021"/>
            <Post title="Des idées de préparations ?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non sem nulla. Phasellus eget velit ac turpis euismod sc..." date="09/12/2021"/>
            <Navbar />
        </div>
      );
} 

export default Communaute;