import { createContext, useState, useContext, useEffect } from "react";
import getProducts from "../../services/getProducts";
import { createPedido } from "../api";
import { serverTimestamp } from "firebase/firestore";

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);
const UserProvider = ({ children }) => {
  /* LLAMADA A JSON PARA DESCARGAR INFO DE PRODUCTOS Y PONERLOS EN UN ESTADO GLOBAL */
  const [products, setProducts] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [customer, setCustomer] = useState({ comprador:"", phone:"", mail:"" });
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  // HELPERS
  //METODOS PARA ACTUALIZAR CARRITO
  //1.-AÑADIR ITEM A CARRITO (PRODUCTO Y CANTIDAD)- addItem(item,quantity)

  const addItem = (item, quantity) => {
    console.log("item_Context", item);
    console.log("quantityContext", quantity);
    const newCart = carrito.filter((products) => products.id !== item.id);
    newCart.push({ ...item, cantidad: quantity });
    setCarrito(newCart);
    /*   setState([...state, { ...item, cantidad: newQuantity }]); */
  };

  const removeCart = () => setCarrito([]);

  /*   const isInCart = (id) => {
        return Cart.find(product => product.id === id) ? true : false;
      } */

  const deleteItem = (id) => {
    setCarrito(carrito.filter((product) => product.id !== id));
  };

  const totalPrice = () => {
    return carrito.reduce((prev, act) => prev + act.cantidad * act.price, 0);
  };

  const totalProducts = () =>
    carrito.reduce(
      (acumulador, productoActual) => acumulador + productoActual.cantidad,
      0
    );

  //METODO COSECHA PROPIA. RECIBE DATOS FORMULARIO Y LOS LLEVA A BBDD

  const subiraFirebase = () => {
  /*   alert(111111111); */
    const precioTotal=totalPrice();

    const datosPedido={customer,precioTotal,date: serverTimestamp()};
    
    console.log(datosPedido);
    createPedido(datosPedido);   //ENVIAR DATOS A FIRESTORE
    
    console.log("customer", customer);
    console.log('totalprice',precioTotal);

  };

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        carrito,
        setCarrito,
        addItem,
        removeCart,
        deleteItem,
        totalPrice,
        totalProducts,
        customer,
        setCustomer,
        subiraFirebase,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default UserProvider;
