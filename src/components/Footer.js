import { NavLink } from 'react-router-dom';
import TintinAsterix from '../assets/imgs/t_a.jpg';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer--address">
                <h4>Tintin&Asterix Academy</h4>
                <p>Plaça Letamendi 12 <br />Barcelona,<br />
                    08023</p>
            </div>
            <div className="footer--menu">
                <nav className='footer--menu--links'>
                    <ul className='rubik--800'>
                        <li><NavLink to="/react-ecommerce">Home</NavLink></li>
                        <li ><NavLink to="/react-ecommerce/category/asterix">Astérix</NavLink></li>
                        <li><NavLink to="/react-ecommerce/category/tintin">Tintin</NavLink></li>

                    </ul>
                </nav></div>
            <div className='footer--menu--img'> <img src={TintinAsterix} alt='imghome'/></div>

            <p className="footer--copyright rubik--400">2024. Carlos Prieto - Todos los derechos reservados</p>

        </div >
    )
}

export default Footer;