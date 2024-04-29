import { useState } from "react";
import { Link } from "react-router-dom";
const ItemCount = ({ estoc }) => {
    const [quantity, setQuantity] = useState(1);
    //DESAPARECER AÑADIR CARRITO
    const [visible, setVisible] = useState(true);
    const changeVisibility = () => setVisible(false);

    const restar = () => {
        setQuantity(quantity > 1 ? quantity - 1 : quantity);
    }
    const sumar = () => {
        setQuantity(quantity < estoc ? quantity + 1 : quantity);
    }

    const onAdd = () => {
        setQuantity(quantity);
        changeVisibility();
        alert(quantity);
    };

    return (
        <div className="countcontainer"><h4 className="rubik-800">ItemCount</h4>

            <div className="countcontainer--cantidad">
                <button className="countcontainer--cantidad--signo" onClick={restar}><p>-</p>
                </button>
                <p className="rubik--700">{quantity}</p>
                <button className="countcontainer--cantidad--signo" onClick={sumar}><p>+</p></button>
            </div>

            {visible ? <button className="countcontainer--agregar" onClick={onAdd} >
                <p className="rubik--400">Add To Cart</p>
            </button> : <Link to={`/react-ecommerce/cart`}><button className="countcontainer--agregar"><p>Terminar compra</p></button></Link>}

            {visible && <p className="rubik--700">stock: {estoc}</p>}
        </div >
    )
}

export default ItemCount