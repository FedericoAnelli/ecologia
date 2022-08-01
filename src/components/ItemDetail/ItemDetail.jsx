import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({item}) => {
  return (
    <div>
      <h1>ItemDetail</h1>

      <ItemCount availableStock={5} initialStock={1} />
    </div>
    );
}

export default ItemDetail;