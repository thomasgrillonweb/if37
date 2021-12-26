import { Link } from "react-router-dom";
import './Allergens.css'

function Allergens() {

  const productAllergens = JSON.parse(localStorage.getItem('productAllergens'));
  let userAllergens = JSON.parse(localStorage.getItem('userAllergens'));

  if(userAllergens === null){
    userAllergens = [];
  }

  return (
    <div className="background">
      <div className="page-menu">
        <div className="title">Allergènes</div>
        <div className="product">{productAllergens.product}</div>  

        {productAllergens.allergens.map((element, index) => {
          let isRisky = userAllergens.includes(element);
          return <div className={isRisky ? 'btn btn-white isRisky' : 'btn btn-white'} key={index}>{element}</div>
        })}
      </div>
      <div className="btn-retour"><Link to="/">Retour</Link></div>
    </div>
  );
}

export default Allergens;
