import { Link } from "react-router-dom";
import './Allergens.css'

function Allergenes() {
  return (
    <div className="background">
      <div className="page-menu">
        <div className="title">Allergènes</div>    
        <div className="btn btn-white">Petits pois</div>
        <div className="btn btn-white">Arachide</div>
      </div>

      <div className="btn-retour"><Link to="/">Retour</Link></div>
    </div>
  );
}

export default Allergenes;
