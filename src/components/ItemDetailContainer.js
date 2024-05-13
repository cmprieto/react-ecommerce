import ItemDetail from "./ItemDetail"
import { useLocation } from 'react-router-dom';

const ItemDetailContainer = () => {
    const location = useLocation();
    const articulo = location.state;
    console.log('articulo', articulo);

    return (
        <div className="itemdetailcontainer">
            <ItemDetail detalle={articulo} />
        </div>
    )
}

export default ItemDetailContainer