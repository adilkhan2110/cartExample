import React from 'react';
import { useDispatch } from 'react-redux';
import { addProdectCart } from '../store/features/counterSlice';

function Product(props) {
    const { data } = props;
    const dispatch = useDispatch();

    const handleAddProduct = () => {
        dispatch(addProdectCart(data)); // Pass the object as an argument to addProdect
    };
    
    return (
        <div className='col-md-4'>
            <div className="card">
                <img className="card-img-top" src={`https://picsum.photos/id/${data.id}/300`} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.description}</p>
                    <button className="btn btn-primary" onClick={handleAddProduct}>
                        {data.price}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
