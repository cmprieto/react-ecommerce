import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import asterixlogo from '../assets/imgs/asterix-logo2.png';
import tintilogo from '../assets/imgs/tintin-logo.webp';
/* import { useUserContext } from '../app/providers/userProvider'; */
import { getItems } from '../app/api';



export const ItemListContainer = ({ saludo, filtrado }) => {

    /*async mock inicial sin REACT CONTEXT
     const [products, setProducts] = useState([]);
        useEffect(() => {
            getProducts().then(data => { setProducts(data) });
        }, []); */
/*OBTENIENDO COMICS DEL CONTEXTO*/
/*     const {products}=useUserContext(); */

/*OBTENIENDO COMICS DE FIREBASE*/

        const [items, setItems] = useState([]);
        useEffect(() => {
            getItems().then(data => { setItems(data) });
        }, []); 

        console.log('datosFirebase', items);


    const filtraje = items.filter(item => (item.category === filtrado));

    return (
        <div className='itemlistcontainer' >
            {filtrado === 'asterix' && <div className='itemlistcontainer--logo'><img src={asterixlogo} alt='logo asterix' /></div>}
            {filtrado === 'tintin' && <div className='itemlistcontainer--logo'><img src={tintilogo} alt='logo tintin' /></div>}
            {filtrado ? <ItemList films={(filtraje)} /> : <ItemList films={(items)} />}
        </div>
    )
}
