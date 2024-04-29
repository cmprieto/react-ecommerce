import { useParams } from 'react-router-dom';
import { ItemListContainer } from '../components/ItemListContainer';
import { Fragment } from 'react';

const Products = () => {
    const { id } = useParams();

    return (
        <Fragment>
            <ItemListContainer filtrado={id} />
        </Fragment>
    )
}

export default Products;