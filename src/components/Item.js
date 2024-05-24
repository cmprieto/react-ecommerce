import { Fragment, useState } from "react";
import {  NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Item = (props) => {
  const { item } = useState(props.data);
  const location = useLocation();
  return (
    <Fragment>
    <NavLink
      to={`/react-ecommerce/item/${props.data.id}`}
      state={{ articulo: props.data }} style={{textDecoration:'none'}}
    >
      <div className="item">
        <img src={props.data.foto} alt="imagen producto {props.data.id}"></img>
        <div className="item--text">
          <h5 className="rubik--800">{props.data.title}</h5>
          <p className="rubik--700">{props.data.description}</p>
        </div>

        {/* <Link to={`/react-ecommerce/item/${props.data.id}`} state={{ articulo: props.data }} > */}
        <button className="item--button">
          <p className="rubik--700">Ver más</p>
        </button>
        {/*     </Link> */}
        {console.log(props.data)}
      </div>{" "}
    </NavLink>
    </Fragment>
  ); 
};

export default Item;
