import { useUserContext } from '../app/providers/userProvider';

const Cart = () => {
    const { carrito, removeCart, deleteItem, totalPrice, totalProducts } = useUserContext();

    return (
        <div className='cartContainer'>
            <h1>Carrito</h1>
            {carrito.length != 0 && carrito.map((itemCarrito, i) => <p key={i}>{itemCarrito.title} - {itemCarrito.cantidad}</p>)}


            <button onClick={removeCart}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart;