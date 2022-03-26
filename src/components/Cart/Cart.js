import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.shoeDetail)
    const { img, name, price } = props.shoeDetail
    return (
        <div>
            <div className='cart shadow p-3 mb-5 bg-body rounded border-0 mb-2 w-75 mx-auto p-2 d-flex align-items-center'>
                <img width={120} src={img} alt="" />
                <div>
                    <h5 className='ps-3'>{name}</h5>
                    <h5 className='ps-3'>Price: ${price}</h5>
                </div>
            </div>
        </div>
    );
};

export default Cart;