import getProducts from '../services/getProducts';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import asterixlogo from '../assets/imgs/asterix-logo2.png';
import tintilogo from '../assets/imgs/tintin-logo.webp';

export const ItemListContainer = ({ saludo, filtrado }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then(data => { setProducts(data) });
    }, []);
    const filtraje = products.filter(product => (product.category == filtrado));
    return (
        <div className='itemlistcontainer' >
            {filtrado === 'asterix' && <div className='itemlistcontainer--logo'><img src={asterixlogo} alt='logo asterix' /></div>}
            {filtrado === 'tintin' && <div className='itemlistcontainer--logo'><img src={tintilogo} alt='logo tintin' /></div>}
            {filtrado ? <ItemList films={(filtraje)} /> : <ItemList films={(products)} />}
        </div>
    )
}
