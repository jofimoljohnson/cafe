
import React, { useState, useEffect } from "react";
// import FilteredDishes from "./FilteredDishes";
import Card from "react-bootstrap/Card";
// import {Col,Row} from 'react-bootstrap'
import { Button, Row, Col, Container, Form, Image } from "react-bootstrap";
import Header from "./Header";

function Saladsoup() {
    const [cafe, setCafe] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = (index) => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleIncrement = (index) => {
        setQuantity(quantity + 1);
    };

    async function fetchData() {
        await fetch("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099")
            .then((res) => res.json())
            .then((data) => setCafe(data));
    }
    useEffect(() => {
        fetchData();
    }, []);
    console.log("cafe: ", cafe);

    const result = cafe && cafe[0].table_menu_list.filter((data) => data.menu_category === "Salads and Soup");
    //console.log("result: ", result && result[0].category_dishes.map((item) => item.dish_name));
    const data = result && result[0].category_dishes.map((item) => item);
    console.log("data: ", data);
    const dishesData = data && data.map((data) => data);
    console.log("dishesData: ", dishesData);

    return (
        <div>
            <Header quantity={quantity} />
            {dishesData &&
                dishesData.map((item, index) => {
                    console.log("index :", index);
                    return (
                        <div>
                            <Container fluid className="containers">
                                <Row>
                                    <Col className="start">
                                        <h5>{item.dish_name}</h5>
                                        <h6>
                                            {item.dish_currency} {item.dish_price}
                                        </h6>
                                        <p>{item.dish_description}</p>
                                        <Form.Label>
                                            <div
                                                className="input-group buttons"
                                                style={{ backgroundColor: "green", color: "white" }}
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() => handleDecrement(index)}
                                                    className="input-group-text"
                                                    style={{ backgroundColor: "green", color: "white" }}
                                                >
                                                    -
                                                </button>
                                                <div
                                                    className="form-control text-center"
                                                    style={{ backgroundColor: "green", color: "white", width: "10px" }}
                                                >
                                                    {quantity}
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => handleIncrement(index)}
                                                    className="input-group-text"
                                                    style={{ backgroundColor: "green", color: "white" }}
                                                >
                                                    {" "}
                                                    +{" "}
                                                </button>
                                            </div>
                                        </Form.Label>

                                        <h6>
                                            {" "}
                                            {item.dish_Availability ? (
                                                <Form.Label>dish is available</Form.Label>
                                            ) : (
                                                <Form.Label>dish is not available</Form.Label>
                                            )}
                                        </h6>
                                    </Col>


                                    <Col className='middle'>
                                        <h6>{item.dish_calories} calories</h6>
                                    </Col>


                                    <Col className='end'>
                                    <img src={item.dish_image} alt="" />
                                    </Col>



                                </Row>
                            </Container>
                        </div>
                    );
                })}
        </div>
    );
}  

export default Saladsoup;



