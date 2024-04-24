import Item from './Item';

const ItemList = ({ films }) => {
    return (
        <div><p>ItemList</p>
            {films.map((peliculas, i) => <h2 key={i} className='rubik-700'>{peliculas.title}-{peliculas.description}</h2>)}
            <Item></Item>
        </div>

    )
}

export default ItemList