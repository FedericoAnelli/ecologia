import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Item = ({project}) => {

const { addToCart } = useContext(CartContext);

const onAdd = (amount) => {
    addToCart(project, amount);
}

// Devuelve card de producto
return(
    <div className="itemContainer">
    <Link style={{textDecoration: 'none', color: 'black'}} to={`/project/${project.id}`}>
        <h2>{project.name}</h2>
        <img className="imgStyling" src={project.coverImage}></img>
        <p className="textoDonacion"><strong>Donación:</strong> ${project.donacion}</p>
        <p className="descriptionText">{project.description}</p>
    </Link>
        <div className="divCounter">
        <ItemCount availableStock={project.stock} initialStock={1} onAdd={onAdd} buttonName="AGREGAR AL CARRITO"/>
        </div>
    </div>
)

}

export default Item