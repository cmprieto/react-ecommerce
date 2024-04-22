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
                    <ul>
                        <li><p className='rubik--800'>Home</p></li>
                        <li><p className='rubik--800'>Fotografias</p></li>
                        <li><p className='rubik--800'>Libros</p></li>
                    </ul>
                </nav></div>
            <div> </div>

            <p className="footer--copyright rubik--400">2024. Tiendas X-Todos los derechos reservados</p>

        </div >
    )
}

export default Footer;