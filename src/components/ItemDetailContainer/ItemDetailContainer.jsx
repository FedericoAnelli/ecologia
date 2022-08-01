import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    const URL_initialConfig = '../assets/initialConfig.json';
    const [item, setItem] = useState([]);
    const {id} = useParams();

    const getOneProyect = (id) => {
        fetch(URL_initialConfig)
            .then((response) => response.json())
            .then((data) => setItem(data.filter(item => item.id == id)[0]))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getOneProyect(id);
    }, [id]);

  return (
    <div>
        <h1>ItemDetailContainer</h1>
        <ItemDetail />
    </div>
  )
;
}

export default ItemDetailContainer;