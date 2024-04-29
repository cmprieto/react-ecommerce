import NavBar from '../components/NavBar';
import { ItemListContainer } from '../components/ItemListContainer';
import Footer from '../components/Footer';
import { Fragment } from 'react';


const Home = () => {
    const texto = "SALUDO POR PROPS a ItemListContainer";

    return (
        <Fragment>
            <ItemListContainer saludo={texto} />
        </Fragment>
    )
}

export default Home;