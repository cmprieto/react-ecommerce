import { createContext, useState, useContext, useEffect } from 'react';
import getProducts from '../../services/getProducts';

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);


const UserProvider = ({ children }) => {
    /* LLAMADA A JSON PARA DESCARGAR INFO DE PRODUCTOS Y PONERLOS EN UN ESTADO GLOBAL */
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then(data => { setProducts(data) });
    }, []);


    return (
        <AppContext.Provider value={[products, setProducts]}>
            {children}
        </AppContext.Provider>
    );
}

export default UserProvider;