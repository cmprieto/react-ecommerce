import { useUserContext } from "../app/providers/userProvider";
import { getPedidoById } from "../app/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { numPedido, resetearApp, totalPrice } = useUserContext();
  const [detallePedido, setDetallePedido] = useState([]);
  const numPedidoStr = numPedido.toString();

  const getPedido = async () => {
    const pedidos = await getPedidoById(numPedidoStr);
    setDetallePedido(pedidos);
    console.log("detallePedidoYusefez:", detallePedido);
    /*     queryPedido();  SINO SE HACE 2 VECES EL MISMO PROCESO*/
  };
  /* 
  const queryPedido = () =>
    getPedidoById(numPedidoStr).then((res) => setDetallePedido(res)); */

  useEffect(() => {
    getPedido();
  }, []);

  console.log("detallePedido", detallePedido);
  const navigate = useNavigate();
  const irHome = () => {
    navigate("/react-ecommerce");
  };
  return (
    <div className="checkout">
      <div>
        {detallePedido.customer ? (
          <div className="checkout--comprador">
            <p className="rubik--800">Pedido nº: {numPedido}</p>
            <p> Nombre: {detallePedido.customer.comprador}</p>
            <p>Teléfono: {detallePedido.customer.phone}</p>
            <p>Mail: {detallePedido.customer.mail}</p>
            <p>Subtotal: {totalPrice()} €</p>
            <p>Gastos de envío: 15 €</p>
            <p className="rubik--800">Total: {totalPrice() + 15} €</p>
          </div>
        ) : null}

        <div className="checkout--button">
          {numPedido ? (
            <button onClick={resetearApp} className="purchase--button">
              Resetea el pedido
            </button>
          ) : (
            <button onClick={irHome} className="purchase--button">
              Vuelve al catálogo
            </button>
          )}
        </div>
      </div>
      <div className="checkout--comics">
        <h5 className="rubik--800">Summary</h5>
        {detallePedido.carrito &&
          detallePedido.carrito.map((detalle, key) => {
            return (
              <div key={detalle.id} className="checkout--comics--comic">
                <img src={detalle.foto} alt="portadas" />
                <div className="checkout--comics--comic--text">
                  <p className="rubik--800">{detalle.title}</p>
                  <p className="rubik--800">
                    {detalle.price * detalle.cantidad} €
                  </p>
                </div>
              </div>
            );
          })}
        <div className="checkout--comics--total">
          <p>SUBTOTAL: {totalPrice()} €</p>
          <p>GASTOS DE ENVÍO: 15 €</p>
          <p className="rubik--800">TOTAL: {totalPrice() + 15} €</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
