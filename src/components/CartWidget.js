import icon from '../assets/empty-cart.png'
import cartfull from '../assets/shopping-cart.png'
import { Link } from 'react-router-dom';
import { useUserContext } from '../app/providers/userProvider';

const CartWidget = () => {
    const { totalProducts } = useUserContext();
    return (
        <div className="header--menu--icono">
            <p className='rubik--800'>{totalProducts()}</p>
            <Link to={`/react-ecommerce/cart`}>
               {totalProducts()===0 ? <img src={icon} className='header--menu--icono--img' alt='carritovacio'/>:<img src={cartfull} className='header--menu--icono--img' alt='carritovacio'/>}
                </Link>

        </div >
    )
}

export default CartWidget