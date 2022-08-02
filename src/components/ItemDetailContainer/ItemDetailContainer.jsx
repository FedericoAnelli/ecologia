import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import '../ItemListContainer/ItemListContainer.css';

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
      {item.length !== 0 ? (
        <ItemDetail project={item} />
        ) : (
        <div id="cssload-pgloading">
                <div class="cssload-loadingwrap">
                    <ul class="cssload-bokeh">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )}
    </div>
  )
;
}

export default ItemDetailContainer;