import icon from '../assets/empty-cart.png'
import { Link } from 'react-router-dom';
import { useUserContext } from '../app/providers/userProvider';

const CartWidget = () => {
    const { totalProducts } = useUserContext();
    return (
        <div className="header--menu--icono">
            <p className='rubik--800'>{totalProducts()}</p><Link to={`/react-ecommerce/cart`}><img src={icon}></img></Link>

        </div >
    )
}

export default CartWidget