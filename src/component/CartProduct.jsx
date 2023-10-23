import React from 'react';


function CartProduct(props) {
    const { data } = props;
     

    return (
        data && (
            <div className='col-md-4'>
                <div className="card">
                    <img className="card-img-top" src={`https://picsum.photos/id/${data.id}/300`} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.description}</p>
                        <button className="btn btn-primary">
                            {data.price}
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}

export default CartProduct;
