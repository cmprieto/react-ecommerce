import { Link } from 'react-router-dom';
import quitar from '../assets/icons/xbutton.png'
import { useUserContext } from '../app/providers/userProvider';

const ItemInCart = ({ itemCarrito }) => {
    const { deleteItem } = useUserContext();
    const cantidad = parseInt(itemCarrito.cantidad);
    const precio = parseInt(itemCarrito.price);
    const subtotal = cantidad * precio;
    return (
        <div className="itemBox">
           <Link to={"/react-ecommerce/item/"+itemCarrito.id} state={{ articulo: itemCarrito }}>
         <img src={itemCarrito.foto} className="itemBox--img" alt="portada-listado-carrito" ></img>
         </Link>
            <div className="itemBox--text">
                <h3>{itemCarrito.title}</h3>
                <p>{itemCarrito.description}</p>
                <p>{itemCarrito.price} €</p>
            </div>
            <p>x {itemCarrito.cantidad}</p>
            <p>{subtotal} €</p>
            <Link onClick={() => deleteItem(itemCarrito.id)}> <img src={quitar} className="itemBox--icono" alt='iconoquitar' /></Link>
        </div>)
}

export default ItemInCart;
