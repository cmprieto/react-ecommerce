import { useUserContext } from "../app/providers/userProvider";
import Formulario from "./Formulario";
import ItemInCart from "./ItemInCart";
import { Link, useNavigate } from "react-router-dom";
import PurchaseDetail from "./PurchaseDetail";

const Cart = () => {
  const { carrito, removeCart, totalPrice, numPedido } = useUserContext();
  const navigate = useNavigate();
  const catalogo = () => {
    navigate("/react-ecommerce/");
  };

  return (
    <div className="cartContainer">
      <h1>CARRITO</h1>
      <div className="cartContainer--listItems">
        {carrito.length > 0 &&
          carrito.map((itemCarrito, i) => (
            <ItemInCart key={i} itemCarrito={itemCarrito} />
          ))}
        {carrito.length == 0 && (
          <div>
            <p>no hay articulos</p>
            <button onClick={catalogo}>¿Que cómic quiero?</button>
          </div>
        )}
      </div>
      <div className="cartContainer--total">
        {carrito.length > 0 && (
          <button onClick={removeCart}>Vaciar Carrito</button>
        )}
        {carrito.length > 0 && <p className="rubik--700">PRECIO TOTAL: {totalPrice()}€</p>}
      </div>
      {numPedido ? null: <Formulario />}
      {numPedido && <PurchaseDetail />}
    </div>
  );
};

export default Cart;
