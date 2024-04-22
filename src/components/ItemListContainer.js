import ItemCount from './ItemCount';

export const ItemListContainer = ({ saludo }) => {
    return (
        <div className='itemlistcontainer'>
            <h1 className='rubik-800'> {saludo}</h1>
            <ItemCount />


        </div>
    )
}
