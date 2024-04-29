import ItemCount from './ItemCount';
const ItemDetail = ({ detalle }) => {

    return (
        <div className="itemdetail">
            <img src={detalle.articulo.foto} />
            <div className='itemdetail--description'>
                <div className='itemdetail--description--count'>
                    <h2>{detalle.articulo.title}</h2>
                    <h3>{detalle.articulo.description}-{detalle.articulo.price}€</h3>
                    <ItemCount estoc={detalle.articulo.stock} />
                </div>
            </div>


        </div>
    )
}

export default ItemDetail