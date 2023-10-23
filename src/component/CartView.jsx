import React from 'react'
import { useSelector } from 'react-redux';
import Product from './Product';
import CartProduct from './CartProduct';

function CartView() {
    const dataValue = useSelector((data) => data.counter);
    



    return (
        <>
            <div className="container">
                <div className="row">
                    {dataValue?.map((data, index) => (
                        <CartProduct data={data} key={index} />
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default CartView