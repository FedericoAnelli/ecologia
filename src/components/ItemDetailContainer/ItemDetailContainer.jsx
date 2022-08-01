import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    const [item, setItem] = useState([]);
    const { projectId } = useParams([]);
    
    const getProject = (id) => {
        fetch("https://raw.githubusercontent.com/FedericoAnelli/ecologia/main/src/components/assets/initialConfig.json")
            .then((response) => response.json())
            .then((data) => setItem(data.filter((item) => item.id === projectId)[0]))
    };

    useEffect(() => {
        getProject(projectId);
    }, [projectId]);

  return (
    <div>

        <ItemDetail project={item} />

    </div>
  )
;
}

export default ItemDetailContainer;