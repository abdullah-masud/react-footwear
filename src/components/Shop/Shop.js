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
        // console.log(shoe)
        // console.log(shoeDetails)
        let newShoesDetails = [...shoeDetails, shoe];

        // console.log(newShoesDetails.length)


        const emptyArray = [];
        // console.log(newShoesDetails)

        for (const newShoeDetail of newShoesDetails) {
            emptyArray.push(parseInt(newShoeDetail.id))

        }
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
            if (randomNum === parseInt(cartDetail.id)) {
                // console.log("hello")
                setShoeDetails([cartDetail])
            }
        }
    };

    const handleChooseAgain = () => {
        setShoeDetails([])
        document.getElementById("choose-one-btn").style.display = "none";
        document.getElementById("choose-again-btn").style.display = "none";
    }





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
                <Col className='border-left-2  cart-container' sm={3}>
                    <div className='details'>
                        <h4 className='py-3 text-center'>Cart Details</h4>
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
                            <Button onClick={handleChooseAgain} variant="primary" id='choose-again-btn' className='choose-again-btn mx-auto'>
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
