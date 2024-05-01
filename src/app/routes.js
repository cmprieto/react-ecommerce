import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home';
import Products from '../pages/products';
import Product from '../pages/product';
import Cart from '../components/Cart';
import Layout from './Layout';
const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />} >
                <Route index path="/react-ecommerce" element={<Home />} />
                <Route path="/react-ecommerce/category/:id" element={<Products />} />
                <Route path="/react-ecommerce/item/:id" element={<Product />} />
                <Route path="/react-ecommerce/cart" element={<Cart />} />
                { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
                <Route path="*" element={<div>404</div>} />
            </Route >
        </Routes>
    </BrowserRouter>
);

export default Router;