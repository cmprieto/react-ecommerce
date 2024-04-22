import logo from '../assets/perfil.jpg';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div className='header'>
            <img src={logo} className='header--logo' alt='logoWeb' />
            <nav className='header--menu'>
                <ul>
                    <li><p className='rubik--800'>Home</p></li>
                    <li><p className='rubik--800'>Fotografias</p></li>
                    <li><p className='rubik--800'>Libros</p></li>
                </ul>
            </nav>
            <CartWidget />
        </div>
    )
}

export default NavBar;