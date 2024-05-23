import { Link } from 'react-router-dom';
import { useUserContext } from '../app/providers/userProvider';


const PurchaseDetail = () => {

    const { customer, totalPrice,numPedido } = useUserContext();
  return (
    <div className='purchase rubik--400'>
      <p>Tu número de pedido es: {numPedido}</p>
      <p>Nombre del cliente: {customer.comprador}</p>
      <p>Teléfono: {customer.phone}</p>
      <p> Email: {customer.mail}</p>
      <Link to={`/react-ecommerce/checkout`}><button className='purchase--button'>Comprueba tu pedido</button></Link>
    </div>
  );
};

export default PurchaseDetail;
