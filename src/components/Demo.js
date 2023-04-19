// import React, { useState, useEffect }  from 'react'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function Demo() {

//     const [cafe, setCafe] = useState("");
//     const [quantity, setQuantity] = useState(1);

//     const handleDecrement = (index) => {
//         if (quantity > 1) {
//             setQuantity(quantity - 1);
//         }
//     };
//     const handleIncrement = (index) => {
//         setQuantity(quantity + 1);
//     };

//     async function fetchData() {
//         await fetch("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099")
//             .then((res) => res.json())
//             .then((data) => setCafe(data));
//     }
//     useEffect(() => {
//         fetchData();
//     }, []);
//     console.log("cafe: ", cafe);

//     const result = cafe && cafe[0].table_menu_list.filter((data) => data.menu_category === "Salads and Soup");
//     //console.log("result: ", result && result[0].category_dishes.map((item) => item.dish_name));
//     const data = result && result[0].category_dishes.map((item) => item);
//     console.log("data: ", data);
//     const dishesData = data && data.map((data) => data);
//     console.log("dishesData: ", dishesData);

//   return (
//     <div>
//       <Container>
//       <Row>
//         <Col className='start'>
            
//         </Col>
//         <Col className='middle'>2 of 3</Col>
//         <Col className='end'>3 of 3</Col>
//       </Row>
//     </Container>
  
//     </div>
//   )
// }

// export default Demo