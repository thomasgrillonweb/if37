import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Link to={"/"}>Scanner</Link><br/>
      <Link to={"/params"}>Paramètre</Link>
    </div>
  );
}

export default Menu;
