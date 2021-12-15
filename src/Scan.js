import "./Scan.css"
import { Link } from "react-router-dom";
import QrContainer from "./components/QrContainer";

import { AiOutlineMenuFold } from "react-icons/ai";

function Scan() {
  
    return (
      <div className="Scan">
        <QrContainer />
        <Link to={"/menu"} className={'menu-btn'}><AiOutlineMenuFold /></Link>
      </div>
    );
  }
  
  export default Scan;