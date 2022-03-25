import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Shoe from '../Shoe/Shoe';
import './Shop.css'

const Shop = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setShoes(data))
    }, [])

    return (
        <div>
            <Row>
                <Col className='text-center px-0' sm={9}>
                    <h3 className='py-3'>All Shoes</h3>
                    <div className='shoe-container'>
                        {
                            shoes.map(shoe => <Shoe
                                key={shoe.id}
                                shoe={shoe}
                            ></Shoe>)
                        }
                    </div>
                </Col>
                <Col className='border cart-container' sm={3}>
                    <div className='details'>
                        <h4 className='py-3 text-center'>Cart</h4>
                        {

                        }
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Shop;