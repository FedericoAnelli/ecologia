import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
const ItemDetail = ({ project }) => {



  return (
    <div>
      <div className="grid-2">
        <img className="mainImage" src={project.coverImage}></img>
      <div className="detailsColumn">
        <h1 className="headingStyling">{project.name}</h1>
        <p className="descriptionStyling">{project.description}</p>
          <div className="stylingCounter">
            <ItemCount availableStock={5} initialStock={1} />
          </div>
        </div>
      </div>
    </div>
    );
}

export default ItemDetail;