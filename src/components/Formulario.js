import { Fragment } from "react";
import { useUserContext } from '../app/providers/userProvider';



const Formulario = () => {

  const { subiraFirebase,customer,setCustomer } = useUserContext();

  return (
    <Fragment>
      Formulario
      <form>
        <input type="text" onChange={e => setCustomer({...customer, comprador: e.target.value})}/>
        <input type="number" onChange={e=>setCustomer({...customer, phone: e.target.value})}/>
        <input type="email" onChange={e=>setCustomer({...customer, mail: e.target.value})}/>

        {/* <button type="button" onClick={()=>createPedido({comprador, phone,mail})}>Enviar datos</button> */}
      
        <button type="button" onClick={()=>subiraFirebase()}>Enviar datos</button>
      
      </form>

{/*       {comprador} - {phone} -{mail} */}
    </Fragment>
  );
};

export default Formulario;
