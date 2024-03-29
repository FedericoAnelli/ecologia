import Loader from '../Loaders/Loader';
import './ItemListContainer';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const ItemListContainer = ({greeting}) => {
    const [projects, setProjects] = useState([]); 
    const { category } = useParams();

    // Pide items de Firebase
    useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, 'items')
      
      getDocs(itemsCollection)
        .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            setProjects(data)
        })
        .catch((error) => console.log(error))
    }, [])

    // Filtra items por categoria
    useEffect(() => {
        if (category){
        const db = getFirestore();
        const itemsCollectionQuery = query((collection(db, 'items')), where('category', '==', category));
        
        if (category === 'all'){
            const itemsCollection = collection(db, 'items')
            getDocs(itemsCollection)
            .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                setProjects(data)
            })
            .catch((error) => console.log(error))
        }
        else
        {

            getDocs(itemsCollectionQuery)
            .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                setProjects(data)
            })
            .catch((error) => console.log(error))
            }

    }
      }, [category])

    return (
        <div className='flexContainer'>
            {projects.length != 0 ? (
                <ItemList projects={projects} />
        ) : (
                <Loader />
            )}
        </div>
    );

} 

export default ItemListContainer;