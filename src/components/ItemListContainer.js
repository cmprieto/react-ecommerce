import getProducts from '../services/getProducts';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';

export const ItemListContainer = ({ saludo, filtrado }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then(data => { setProducts(data) });
    }, []);
    const filtraje = products.filter(product => (product.category == filtrado));
    return (
        <div className='itemlistcontainer' >
            <h1 className='rubik-800'> {saludo}</h1>
            {filtrado ? <ItemList films={(filtraje)} /> : <ItemList films={(products)} />}
        </div>
    )
}
