import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import './HistoryItem.css';

const HistoryItem = ({element}) => {

    const [redirectTo, setRedirectTo] = useState(null);

    if(redirectTo !== null){
        return <Navigate to='/allergens' />
    }

    const handleOnClick = () => {
        localStorage.setItem('productAllergens', JSON.stringify(element));
        setRedirectTo('/allergens')
    }

    return (
        <div onClick={handleOnClick} className="liink">
            <div className="historyItem">
                <div className="title">{element.product}</div>
            </div>
        </div>
    );
}

export default HistoryItem;