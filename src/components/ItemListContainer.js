import ItemCount from './ItemCount';
import ItemList from './ItemList';
import getProducts from '../services/getProducts';
import { useEffect, useState } from 'react';


export const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => { setProducts(data) });
    }, []);

    return (
        <div className='itemlistcontainer'>
            <h1 className='rubik-800'> {saludo}</h1>

            <ItemCount />
            <ItemList films={products} />
        </div>
    )
}
