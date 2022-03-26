import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Shoe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Shoe = (props) => {
    // console.log(props)
    const { name, price, img } = props.shoe;
    const { handleAddToCartBtn } = props
    return (
        <div>
            <Card className='shadow p-3 mb-5 bg-body rounded border-0' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <h4>{name}</h4>
                    <h5 className='my-4'>Price: ${price}</h5>
                    <Button onClick={() => handleAddToCartBtn(props.shoe)} variant="primary" className='addToCartBtn'>
                        Add to Cart
                        <FontAwesomeIcon className='ms-2' icon={faShoppingCart}></FontAwesomeIcon>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Shoe;