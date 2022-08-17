import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loaders/Loader";
import { collection, getDocs, getFirestore} from "firebase/firestore";

const ItemDetailContainer = (item)=>{


  return (
    <div>
      {item.length !== 0 ? (
        <ItemDetail project={item} />
        ) : (
        <Loader />
        )}
    </div>
  )
;

}

export default ItemDetailContainer;