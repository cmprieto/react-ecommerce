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
                    <h2 className='rubik--800'>{detalle.articulo.title}</h2>
                    <h3 className='rubik--700'>{detalle.articulo.description}-{detalle.articulo.price}€</h3>
                   
                </div> 
                <ItemCount comic={detalle.articulo} subirDatos={subirDatosCarrito} />
            </div>
        </div>
    )
}

export default ItemDetail