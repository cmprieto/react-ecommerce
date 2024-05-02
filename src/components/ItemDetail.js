import ItemCount from './ItemCount';
import { useUserContext } from '../app/providers/userProvider';


const ItemDetail = ({ detalle }) => {
    const { addItem } = useUserContext();

    const subirDatosCarrito = (c) => {
        addItem(detalle.articulo, c);
        /*         alert(c);
                alert(detalle.articulo.title); */
        /*         console.log(detalle.articulo, c) */
    }
    return (
        <div className="itemdetail">
            <img src={detalle.articulo.foto} />
            <div className='itemdetail--description'>
                <div className='itemdetail--description--count'>
                    <h2>{detalle.articulo.title}</h2>
                    <h3>{detalle.articulo.description}-{detalle.articulo.price}€</h3>
                    <ItemCount comic={detalle.articulo} subirDatos={subirDatosCarrito} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail