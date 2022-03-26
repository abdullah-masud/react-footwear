import React, { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';

import Cart from '../Cart/Cart';
import Shoe from '../Shoe/Shoe';
import './Shop.css'

const Shop = () => {
    const [shoes, setShoes] = useState([]);
    const [shoeDetails, setShoeDetails] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setShoes(data))
    }, [])

    const handleAddToCartBtn = (shoe) => {
        let newShoesDetails = [...shoeDetails, shoe];
        if (newShoesDetails.length <= 4) {
            setShoeDetails(newShoesDetails)
        }

        document.getElementById("choose-one-btn").style.display = "block";
        document.getElementById("choose-again-btn").style.display = "block";
    }


    const handleChooseOne = (cartDetails) => {
        const emptyArrayOfId = [];
        let randomNum
        for (const cartDetail of cartDetails) {
            emptyArrayOfId.push(parseInt(cartDetail.id));
            randomNum = emptyArrayOfId[Math.floor(Math.random() * emptyArrayOfId.length)];
            console.log(cartDetail.id)
            if (randomNum === parseInt(cartDetail.id)) {
                // console.log("hello")
                setShoeDetails([cartDetail])
            }
        }
        // console.log(emptyArray);
    };

    console.log(shoeDetails);




    return (
        <div>
            <Row>
                <Col className='text-center px-0 shop-container' sm={9}>
                    <h3 className='py-3'>All Shoes</h3>
                    <div className='shoe-container'>
                        {
                            shoes.map(shoe => <Shoe
                                key={shoe.id}
                                shoe={shoe}
                                handleAddToCartBtn={handleAddToCartBtn}
                            ></Shoe>)
                        }
                    </div>
                </Col>
                <Col className='border border-3 cart-container' sm={3}>
                    <div className='details'>
                        <h4 className='py-3 text-center'>Cart</h4>
                        {
                            shoeDetails.map(shoeDetail => <Cart
                                key={shoeDetail.id}
                                shoeDetail={shoeDetail}
                            ></Cart>)

                        }
                        <div className='d-flex mx-5 cart-buttons'>
                            <Button onClick={() => handleChooseOne(shoeDetails)} variant="primary" id='choose-one-btn' className='choose-one-btn mx-auto'>
                                Choose one
                            </Button>
                            <Button variant="primary" id='choose-again-btn' className='choose-again-btn mx-auto'>
                                Choose again
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Shop;
