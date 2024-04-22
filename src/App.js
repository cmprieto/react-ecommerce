import { ItemListContainer } from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  const texto = "SALUDO POR PROPS a ItemListContainer";
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer saludo={texto} />
      <Footer />
    </div>
  );
}

export default App;
