import { useUserContext } from "../app/providers/userProvider";
import { getPedidoById } from "../app/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { numPedido, resetearApp } = useUserContext();
  const [detallePedido, setDetallePedido] = useState([]);
  const numPedidoStr = numPedido.toString();

  const getPedido = async () => {
    const pedidos = await getPedidoById(numPedidoStr);
    setDetallePedido(pedidos);
    console.log("detallePedidoYusefez:", detallePedido);
    /*     queryPedido();  SINO SE HACE 2 VECES EL MISMO PROCESO*/
  };

  const queryPedido = () =>
    getPedidoById(numPedidoStr).then((res) => setDetallePedido(res));

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
      {detallePedido.customer ? (
        <div className="checkout--comprador">
          <h2>Pedido #: {numPedido}</h2>
          <p> Nombre:{detallePedido.customer.comprador}</p>
          <p>Teléfono:{detallePedido.customer.phone}</p>
          <p>Mail:{detallePedido.customer.mail}</p>
        </div>
      ) : null}
      <h2>Pronto recibirás en tu casa</h2>
      <div className="checkout--comics">
        {detallePedido.carrito &&
          detallePedido.carrito.map((detalle, key) => {
            return (
              <div key={detalle.id} className="checkout--comics--comic">
                <img src={detalle.foto} alt="portadas" />
              </div>
            );
          })}
      </div>
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
  );
};

export default Checkout;
