import "./FormAllergies.css"
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const FormAllergies = (props) => {

    const { register, handleSubmit, getValues } = useForm();  
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
      {key: 'gluten', value: 'Gluten'},
      {key: 'oeuf', value: 'Oeuf'},
      {key: 'poisson', value: 'Poisson'},
      {key: 'arachide', value: 'Arachide'},
      {key: 'soja', value: 'Soja'},
      {key: 'lait', value: 'Lait'},
      {key: 'amande', value: 'Amande'},
      {key: 'noisette', value: 'Noisette'},
      {key: 'cajou', value: 'Cajou'},
      {key: 'césame', value: 'Césame'},
      {key: 'céleri', value: 'Céleri'}
    ];

    return <form className="form-allergens" /*onSubmit={handleSubmit(onSubmit)}*/>

    <select className="select-form-allergens" name="allergens" {...register('allergens')} multiple>
      {allergensList.map((element, index) => {
        let isSelected = userAllergens.includes(element.key);
        return <option className={'option-select'} value={element.key} key={index} selected={isSelected}>{element.value}</option>
      })}
      
      {/*<option className="option-select" value="gluten">Gluten</option>
      <option className="option-select" value="oeuf">Oeuf</option>
      <option className="option-select" value="poisson">Poisson</option>
      <option className="option-select" value="arachide">Arachide</option>
      <option className="option-select" value="soja">Soja</option>
      <option className="option-select" value="lait">Lait</option>
      <option className="option-select" value="amande">Amande</option>
      <option className="option-select" value="noisette">Noisette</option>
      <option className="option-select" value="cajou">Cajou</option>
      <option className="option-select" value="césame">Césame</option>
  <option className="option-select" value="céleri">Céleri</option>*/}
    </select>

    {/*<input type="submit" className="submit-btn"/>*/}
  </form>
}

export default FormAllergies;