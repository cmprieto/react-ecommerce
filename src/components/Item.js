import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Item = (props) => {
    const [item, setItems] = useState(props.data);
    const location = useLocation();
    return (
        <div className="item">
            <img src={props.data.foto} alt="imagen producto {props.data.id}"></img>
            <div className="item--text">
                <h2>{props.data.title}</h2>
                <h3>{props.data.description}</h3>
            </div>

            <Link to={`/react-ecommerce/item/${props.data.id}`} state={{ articulo: props.data }} >
                <button className="item--button">Ver más</button>
            </Link>
            {console.log(props.data)}
        </div >
    )
}

export default Item;


