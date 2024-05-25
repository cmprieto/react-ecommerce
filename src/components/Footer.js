import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer--address">
                <h4>Empresa</h4>
                <p> 400 University Drive Suite 200 Coral <br />Gables,<br />
                    FL 33134 USA</p>
            </div>
            <div className="footer--menu">
                <h4>Links</h4>
                <nav className='footer--menu--links'>
                    <ul className='rubik--800'>
                        <li><NavLink to="/react-ecommerce">Home</NavLink></li>
                        <li ><NavLink to="/react-ecommerce/category/asterix">Astérix</NavLink></li>
                        <li><NavLink to="/react-ecommerce/category/tintin">Tintin</NavLink></li>

                    </ul>
                </nav></div>
            <div> </div>

            <p className="footer--copyright rubik--400">2024. Carlos Prieto - Todos los derechos reservados</p>

        </div >
    )
}

export default Footer;