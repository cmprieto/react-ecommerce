import Item from './Item';

const ItemList = ({ films }) => {
    return (
        <div className='itemlist'>
            {films ? films.map((item, i) => (<Item data={item} key={i} />)) : <p>vacio</p>}

        </div>
    )
}

export default ItemList;