import { useUserContext } from '../app/providers/userProvider';
import ItemInCart from './ItemInCart';
import { Link, useNavigate } from 'react-router-dom';
const Cart = () => {
    const { carrito, removeCart, totalPrice } = useUserContext();
    const navigate = useNavigate();
    const catalogo = () => {
        navigate('/react-ecommerce/');
    }
    return (
        <div className='cartContainer'>
            <h1>Carrito</h1>


            <div className='cartContainer--listItems'>
                {carrito.length > 0 && carrito.map((itemCarrito, i) => <ItemInCart key={i} itemCarrito={itemCarrito} />)
                }
                {carrito.length == 0 && <div><p>no hay articulos</p>
                    <button onClick={catalogo}>¿Que cómic quiero?</button></div>}

            </div>
            {carrito.length > 0 && <p>PRECIO TOTAL: {totalPrice()}€</p>}
            {carrito.length > 0 && <button onClick={removeCart}>Vaciar Carrito</button>}
        </div>
    )
}

export default Cart;