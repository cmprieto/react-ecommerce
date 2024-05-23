import { Fragment } from "react";
import { useUserContext } from '../app/providers/userProvider';

const Formulario = () => {
  const { subiraFirebase,customer,setCustomer } = useUserContext();
  
  return (
    <Fragment>
      <form className="formulario">
        <input type="text" placeholder="nombre" onChange={e => setCustomer({...customer, comprador: e.target.value})}/>
        <input type="number" placeholder="teléfono" onChange={e=>setCustomer({...customer, phone: e.target.value})}/>
        <input type="email" placeholder="mail" onChange={e=>setCustomer({...customer, mail: e.target.value})}/>
        <button type="button" onClick={()=>subiraFirebase()}>Enviar datos</button>
      </form>
    </Fragment>
  );
};

export default Formulario;
