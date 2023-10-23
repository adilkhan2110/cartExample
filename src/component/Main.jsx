

import React, { useState } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { addProdect } from '../store/features/SliceViewProduct';

const Main = () => {

    const productsData = useSelector((data) => data.viewProduct);
    const dispatch = useDispatch()

    const [addProduct, setAddProduct] = useState(false)

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');



    const generateRandomId = () => {
        const min = 1; // Minimum value for a 9-digit number
        const max = 99; // Maximum value for a 9-digit number
        const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
     
        return randomId.toString();
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'price':
                setPrice(value);
                break;
            default:
                break;
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        let data = {
            id: generateRandomId(),
            name: name,
            description: description,
            price: price,
        }

        dispatch(addProdect(data));
        setAddProduct(false)
        setName()
        setDescription()
        setPrice()
    };

    return (
        <>
            <div className="row">
                <div className="col-12 text-end mb-3">
                    <button className='btn  '> <Link to="/cart">View Cart</Link></button>
                    <button className='btn' onClick={() => setAddProduct(true)}>Add To Cart</button>


                </div>
                {productsData?.map((data, index) => (
                    <Product data={data} key={index} />
                ))
                }
            </div>


            <Modal isOpen={addProduct}

                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}
                onRequestClose={() => setAddProduct(false)}>
                <div className="head">
                    <h2>Add Details </h2>
                    <button onClick={() => setAddProduct(false)}>X</button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dic">description</label>
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            value={description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            className="form-control"
                            type="text"
                            name="price"
                            value={price}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-5">
                        Submit
                    </button>
                </form>



            </Modal>


        </>
    );
};

export default Main;