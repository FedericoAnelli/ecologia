import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loaders/Loader";
import { doc, getDoc, getFirestore} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const ItemDetailContainer = ()=>{

  const [item, setItem] = useState([]); 
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, 'items', projectId)
    
    getDoc(item)
      .then((snapshot) => {
          if (snapshot.exists()) {
              const data = {
                  id: snapshot.id,
                  ...snapshot.data()
              }
              setItem(data)
          } else {
            navigate('/project/error')
          }
      })
      .catch((error) => console.log(error))
  }, [])
  
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