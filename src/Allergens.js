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
          return <div style={{textTransform: "capitalize"}} className={isRisky ? 'btn btn-white isRisky' : 'btn btn-white'} key={index}>{element}</div>
        })}
      </div>

      <div className="product" style={{marginTop:"3em"}}>Alternative de produit</div>

      {productAllergens?.alt ? 
        productAllergens.alt.map((element, index) => {
          return <div key={index} className="product-alt">{element}</div>
        })
        : 
        <div className="product-alt">Aucun produit similaire disponible</div>
      }

      <div className="btn-retour"><Link to="/">Retour</Link></div>
    </div>
  );
}

export default Allergens;
