import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer';
import rawData from '../assets/initialConfig.json';

const ItemListContainer = ({greeting}) => {
    const [listaProyectos, setProyectos]= useState([];)
    const onAdd = (amount) => {
        console.log(`Se agregaron ${amount} items en el carrito`)
    }
    
    const data = new Promise((resolve, reject) => {
    
        let condition = true;
        setTimeout(() => {
            if(condition){
                resolve(rawData)
            }else{
                reject('Salio mal')
            }
        }, 3000);
    
    })
    /*
    useEffect(() => {
        data
            .then((response)=> console.log('respuesta', response))
    
    
    }, []);
*/



    return (
        <div>
        <h1>{greeting}</h1>
        <ItemCount availableStock={5} initialStock={1} onAdd={onAdd} />
        </div>
    );
} 

export default ItemListContainer;