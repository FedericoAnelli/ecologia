import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ project }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleAdd = (quantityToAdd) => {
    setCount(quantityToAdd);
    navigate("/cart");
    console.log(`Se agregaron ${quantityToAdd} items en el carrito`);
  }

  return (
    <div>
      <div className="grid-2">
        <img className="mainImage" src={project.coverImage}></img>
      <div className="detailsColumn">
        <h1 className="headingStyling">{project.name}</h1>
        <p className="descriptionStyling">{project.description}</p>
        <p className="descriptionStyling"> <strong>Donación:</strong> ${project.donacion}</p>
          <div className="stylingCounter">
            <ItemCount availableStock={project.stock} initialStock={1} onAdd={handleAdd}/>
          </div>
        </div>
      </div>
    </div>
    );
    
}

export default ItemDetail;