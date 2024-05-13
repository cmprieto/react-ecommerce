import { createContext, useState, useContext, useEffect } from 'react';
import getProducts from '../../services/getProducts';

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);
const UserProvider = ({ children }) => {
    /* LLAMADA A JSON PARA DESCARGAR INFO DE PRODUCTOS Y PONERLOS EN UN ESTADO GLOBAL */
    const [products, setProducts] = useState([]);
    const [carrito, setCarrito] = useState([]);
    useEffect(() => {
        getProducts().then(data => { setProducts(data) });
    }, []);


    

    // HELPERS
    //METODOS PARA ACTUALIZAR CARRITO 
    //1.-AÑADIR ITEM A CARRITO (PRODUCTO Y CANTIDAD)- addItem(item,quantity)

    const addItem = (item, quantity) => {
        console.log('item_Context', item);
        console.log('quantityContext', quantity);
        const newCart = carrito.filter(products => products.id !== item.id);
        newCart.push({ ...item, cantidad: quantity })
        setCarrito(newCart);
        /*   setState([...state, { ...item, cantidad: newQuantity }]); */
    };

    const removeCart = () => setCarrito([]);

    /*   const isInCart = (id) => {
        return Cart.find(product => product.id === id) ? true : false;
      } */

    const deleteItem = (id) => {
        setCarrito(carrito.filter(product => product.id !== id));
    }

    const totalPrice = () => {
        return carrito.reduce((prev, act) => prev + act.cantidad * act.price, 0);
    }

    const totalProducts = () => (
        carrito.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0)
    );


    return (
        <AppContext.Provider value={{ products, setProducts, carrito, setCarrito, addItem, removeCart, deleteItem, totalPrice, totalProducts }}>
            {children}
        </AppContext.Provider>
    );
}

export default UserProvider;