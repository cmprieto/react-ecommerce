import { ItemListContainer } from "../components/ItemListContainer";
import { Fragment } from "react";
import SEO  from "../services/SEO/SEO";
const Home = () => {
  return (
    <Fragment>
      <SEO
        title="Tintin y Asterix | App por Carlos Prieto"
        description="Es una ecommerce realizada con React, donde vendemos cómics de Astérix y de Tintin"
        keywords="asterix,tintin, obelix, comics, venta de comics de asterix, venta comics de tintin"
        name="Carlos Prieto"
        type="website"
        image="https://cmprieto.github.io/react-ecommerce/static/media/t_a.82f6b73197ed4ece40aa.jpg"
      />
      <ItemListContainer />
    </Fragment>
  );
};

export default Home;
