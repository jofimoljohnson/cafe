import React, { useState, useEffect } from "react";
// import FilteredDishes from "./FilteredDishes";

function Saladsoup() {
    const [cafe, setCafe] = useState("");

    async function fetchData() {
        await fetch("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099")
            .then((res) => res.json())
            .then((data) => setCafe(data));
    }
    useEffect(() => {
        fetchData();
    }, []);

    // console.log(cafe);

    const result = cafe && cafe[0].table_menu_list.filter((data) => data.menu_category === "Salads and Soup");
    //console.log("result: ", result && result[0].category_dishes.map((item) => item.dish_name));
    const data = result && result[0].category_dishes.map((item) => item);
    console.log("data: ",data);
    // const item =data.map((item)=>item)
    // console.log(item);

    const testing = data && data.map(item => item)
const dish = testing && testing.map((item)=>item)
console.log("dish" , dish[0]);




    return (
        <div>
            {/* <h1>testing</h1>
             <h1>{item && item.dish_name}</h1>
            <h1>{ item && item.dish_price}</h1> */}
        </div>
    );
}

export default Saladsoup;
