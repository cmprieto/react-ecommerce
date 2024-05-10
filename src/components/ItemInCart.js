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
            <img src={itemCarrito.foto} alt="portada-listado-carrito"></img>
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
