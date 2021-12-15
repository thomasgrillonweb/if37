import { Link } from "react-router-dom";
import './Menu.css'

function Menu() {
  return (
    <div className="background">
      <div className="page-menu">
        <div className="title">MENU</div>
        <div className="btn btn-white"><Link to={"/"}>JE SCANNE</Link></div>
        <div className="btn btn-white"><Link to={"/myallergens"}>MES ALLERGIES</Link></div>
        <div className="btn btn-white"><Link to={"/community"}>COMMUNAUTÉ</Link></div>
        <div className="btn btn-white"><Link to={"/params"}>PARMÈTRES</Link></div>
        <div className="btn btn-white"><Link to={"/historical"}>HISTORIQUE</Link></div>
      </div>
    </div>
  );
}

export default Menu;
