import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

const Item = ({proyecto}) => {

const onAdd = (amount) => {
    console.log(`Se agregaron ${amount} items en el carrito`)
}
// Devuelve card de producto
return(
    <div className="itemContainer">
        <h2>{proyecto.name}</h2>
        <img className="imgStyling" src={proyecto.coverImage}></img>
        <p className="textoDonacion"><strong>Donación:</strong> ${proyecto.donacion}</p>
        <p className="descriptionText">{proyecto.description}</p>
        <div className="divCounter">
        <ItemCount availableStock={proyecto.stock} initialStock={1} onAdd={onAdd} />
        </div>
    </div>
)
}

export default Item