import { NavLink, Link } from 'react-router-dom';
import Router from '../app/routes';
import logo from '../assets/perfil.jpg';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div className='header'>
            <img src={logo} className='header--logo' alt='logoWeb' />
            <nav className='header--menu'>
                <ul className='rubik--800'>
                    <li><NavLink to="/react-ecommerce">Home</NavLink></li>
                    <li><NavLink to="/react-ecommerce/category/fotografia">Fotografias</NavLink></li>
                    <li><NavLink to="/react-ecommerce/category/fotolibros">Libros</NavLink></li>
                </ul>
            </nav>
            <CartWidget />
        </div>
    )
}

export default NavBar;