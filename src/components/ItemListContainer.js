import ItemCount from './ItemCount';
import ItemList from './ItemList';
import getProducts from '../services/getProducts';
import { useEffect, useState } from 'react';


export const ItemListContainer = ({ saludo }) => {
    const [list, setList] = useState();
    useEffect(() => {
        getProducts().then(data => { console.log(data) });
        getProducts().then(data => { setList(data) });
    }, []);
    return (
        <div className='itemlistcontainer'>
            <h1 className='rubik-800'> {saludo}</h1>
            <ItemCount />

            <ItemList />
        </div>
    )
}
