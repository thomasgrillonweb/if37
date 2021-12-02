import { Link } from "react-router-dom";
import QrContainer from "./components/QrContainer";

function Scan() {

    const handleOnClickMenuButton = () => {
      alert("wwooohh");
    }
  
    return (
      <div className="Scan">
        <QrContainer />
        <Link to={"/menu"} className={'menu-btn'}>Menu</Link>
      </div>
    );
  }
  
  export default Scan;