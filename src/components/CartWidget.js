import icon from '../assets/empty-cart.png'
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div className="header--menu--icono">
            <Link to={`/react-ecommerce/cart`}><img src={icon}></img></Link>

        </div >
    )
}

export default CartWidget