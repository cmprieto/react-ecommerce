import { Link } from 'react-router-dom';
import { useUserContext } from '../app/providers/userProvider';


const PurchaseDetail = () => {

    const { customer, numPedido } = useUserContext();
  return (
    <div className='purchase rubik--400'>
      <p className='rubik--700'>Nº de pedido: {numPedido}</p>
      <p>Tu nombre: {customer.comprador}</p>
      <p>Teléfono: {customer.phone}</p>
      <p>eMail: {customer.mail}</p>
      <Link to={`/react-ecommerce/checkout`}><button className='purchase--button'>Comprueba tu pedido</button></Link>
    </div>
  );
};

export default PurchaseDetail;
