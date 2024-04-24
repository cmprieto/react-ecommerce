import { useState } from "react"
const ItemCount = () => {
    const [quantity, setQuantity] = useState(1);
    const [stock, setStock] = useState(8);

    const restar = () => {
        setQuantity(quantity > 1 ? quantity - 1 : quantity);
        /*  if (quantity > 1) {
             setQuantity(quantity - 1);
         } */
    }
    const sumar = () => {
        setQuantity(quantity < stock ? quantity + 1 : quantity);
        /* if (quantity < stock) {
            setQuantity(quantity + 1);
        } */
    }

    const onAdd = () => {
        setQuantity(quantity);
        alert(quantity)
    };

    return (
        <div className="countcontainer"><h4 className="rubik-800">ItemCount</h4>

            <div className="countcontainer--cantidad">
                <button className="countcontainer--cantidad--signo" onClick={restar}><p>-</p>
                </button>

                {/* <input type="text" value={quantity} onChange={(event) => console.log(event)} /> */}
                <p className="rubik--700">{quantity}</p>
                <button className="countcontainer--cantidad--signo" onClick={sumar}><p>+</p></button>
            </div>

            <button className="countcontainer--agregar" onClick={onAdd} >
                <p className="rubik--400">Add To Cart</p>
            </button>

            <p className="rubik--700">stock: {stock}</p>
        </div>
    )
}

export default ItemCount