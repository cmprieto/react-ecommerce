import React from 'react';
import Router from "./app/routes";
import { ItemListContainer } from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";



const App = () => {

  const texto = "SALUDO POR PROPS a ItemListContainer";
  return (
    <div >
      <Router />

      {/*   <ItemListContainer saludo={texto} />
        <ItemDetailContainer /> */}

    </div>
  );
}

export default App;
