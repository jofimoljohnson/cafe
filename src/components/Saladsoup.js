import React, { useState, useEffect } from "react";
// import FilteredDishes from "./FilteredDishes";
import Card from "react-bootstrap/Card";
// import {Col,Row} from 'react-bootstrap'
import { Button, Row, Col, Container, Form, Image } from "react-bootstrap";

function Saladsoup() {
    const [cafe, setCafe] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        setQuantity(quantity - 1);
    };
    const handleIncrement = () => {
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

    const result = cafe && cafe[0].table_menu_list.filter((data) => data.menu_category === "Salads and Soup");
    //console.log("result: ", result && result[0].category_dishes.map((item) => item.dish_name));
    const data = result && result[0].category_dishes.map((item) => item);
    console.log("data: ", data);
    const dishesData = data && data.map((data) => data);
    console.log("dishesData: ", dishesData);



    return (
        <div>
            {/* <h1>testing</h1>
             <h1>{item && item.dish_name}</h1>
            <h1>{ item && item.dish_price}</h1> */}

            {dishesData &&
                dishesData.map((item) => {
                                           
                    return (
                        <div>
                            <Card>
                                <Container fluid className="containers">
                                    <Row>
                                        <Col align="center">
                                            <Form className="firstform">
                                                <Form.Label>
                                                    <h5>{item.dish_name}</h5>
                                                </Form.Label>
                                                <Form.Label>
                                                    <h6>
                                                        {item.dish_currency} {item.dish_price}
                                                    </h6>
                                                </Form.Label>
                                                <Form.Label>
                                                    <p>{item.dish_description}</p>
                                                </Form.Label>
                                                <Form.Label>
                                                    <div className="input-group buttons" style={{ backgroundColor: "green", color: "white" }} >
                                                        <button type="button" onClick={handleDecrement} className="input-group-text" style={{ backgroundColor: "green", color: "white" }}>-</button>
                                                        <div className="form-control text-center"style={{ backgroundColor: "green", color: "white" }}>{quantity}</div>
                                                        <button type="button" onClick={handleIncrement} className="input-group-text" style={{ backgroundColor: "green", color: "white" }}> + </button>
                                                    </div>
                                                </Form.Label>
                                                <Form.Label>
                                                     availability
                                                </Form.Label>
                                            </Form>
                                        </Col>
                                        <Col align="center">
                                            <Form className="middle">
                                                <Form.Label>{item.dish_calories} calories</Form.Label>
                                            </Form>
                                        </Col>

                                        <Col align="center">
                                            <Form className="end">
                                                <Form.Label>
                                                    <img src={item.dish_image} alt="" />
                                                </Form.Label>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </div>
                    );
                })}
        </div>
    );
}

export default Saladsoup;

// {
//     <h1>{item && item.dish_id}</h1>
//                     <h1>{item && item.dish_name}</h1>
//                     <img src={item.dish_image}  />
//                     <h1>{item && item.dish_price}</h1> <br /><br />
// }
