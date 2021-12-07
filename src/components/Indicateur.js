import "./Indicateur.css"

const Indicateur = ({isGood, handleOnClick}) => {
    return <div onClick={() => {handleOnClick(isGood)}} className={isGood === true ? "indicateur isGood" : isGood === false ? "indicateur isNotGood" : "isNull"}></div>
}

export default Indicateur;