import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    const [item, setItem] = useState([]);

    const { itemId } = useParams();

    const getOneProduct = (id) => {
        fetch("https://raw.githubusercontent.com/FedericoAnelli/ecologia/main/src/components/assets/initialConfig.json")
            .then((response) => response.json())
            .then((data) => setItem(data.filter((item) => item.id === itemId)[0]))
    };

    useEffect(() => {
        getOneProduct(itemId);
    }, [itemId]);

  return (
    <div>
                <ItemDetail item={item} />
    </div>
  )
;
}

export default ItemDetailContainer;