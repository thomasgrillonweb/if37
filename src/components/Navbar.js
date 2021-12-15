import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-router-dom";

import './Navbar.css';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to={"/menu"}><AiOutlineMenuFold /></Link>
            </div>
        </div>
      );
} 

export default Navbar;