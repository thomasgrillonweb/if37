import "./FormAllergies.css"
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const FormAllergies = (props) => {

    const { register, getValues } = useForm();  
    let userAllergens = JSON.parse(localStorage.getItem('userAllergens'));
    if(userAllergens === null){
      userAllergens = [];
    }

    useEffect(() => {
      return () => {
        localStorage.setItem('userAllergens', JSON.stringify(getValues('allergens')))
      }
    })

    /*const onSubmit = (data) => {
        localStorage.setItem('userAllergens', JSON.stringify(data.allergens))
    }*/

    const allergensList = [
      {key: 'amande', value: 'Amande'},
      {key: 'arachide', value: 'Arachide'},
      {key: 'blé', value: 'Blé'},
      {key: 'cajou', value: 'Cajou'},
      {key: 'céleri', value: 'Céleri'},
      {key: 'coque', value: 'Fruit à coque'},
      {key: 'gluten', value: 'Gluten'},
      {key: 'ketchup', value: 'Ketchup'},
      {key: 'lait', value: 'Lait'},
      {key: 'malte', value: 'Malte'},
      {key: 'moutarde', value: 'Moutarde'},
      {key: 'noisette', value: 'Noisette'},
      {key: 'oeuf', value: 'Oeuf'},
      {key: 'orge', value: 'Orge'},
      {key: 'phénoxyéthanol', value: 'Phénoxyéthanol'},
      {key: 'poisson', value: 'Poisson'},
      {key: 'sésame', value: 'Sésame'},
      {key: 'soja', value: 'Soja'}
    ];

    /*
    {"product":"Ketchup","allergens":["ketchup"]}
    {"product":"Bière","allergens":["blé","orge","malte"]}
    {"product":"X-TRA Total","allergens":["phénoxyéthanol"]}
    {"product":"Ravioli","allergens":["oeuf","lait","céleri","gluten"]}
    {"product":"Petit salé","allergens":["gluten"]}
    {"product":"Sauce provençale","allergens":["céleri","lait","moutarde"]}
    {"product":"Burger maxi","allergens":["gluten","sésame","lait","oeuf"]}
    {"product":"Velouté aux légumes","allergens":["gluten","céleri","oeuf","lait"]}
    {"product":"Petits pois extra fins","allergens":[""]}
    {"product":"Lait de coco","allergens":[""]}
    {"product":"Purée Mouseline","allergens":["lait"]}
    {"product":"Pesto basilico","allergens":["cajou","coque"]}
    {"product":"Monster munch","allergens":["blé","arachide","lait"]}
    
    {"product":"Monster munch","alt":"chips","allergens":["blé","arachide","lait"]}
    */

    return <form className="form-allergens" /*onSubmit={handleSubmit(onSubmit)}*/>

    <select className="select-form-allergens" name="allergens" {...register('allergens')} multiple>
      {allergensList.map((element, index) => {
        let isSelected = userAllergens.includes(element.key);
        return <option className={'option-select'} value={element.key} key={index} selected={isSelected}>{element.value}</option>
      })}
    </select>

    {/*<input type="submit" className="submit-btn"/>*/}
  </form>
}

export default FormAllergies;