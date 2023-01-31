import React from 'react'
import Card from '../components/Card'
import Carousal from '../components/Carousal'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'

export default function Home() {


    const [foodCatagory, setFoodCatagory] = useState([])
    const [foodItems, setFoodItems] = useState([])

    const loadData = async () => {

        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
        })

        response = await response.json();
        setFoodCatagory(response[1])
        setFoodItems(response[0])


        // console.log(response[0],response[1]);
    }

    useEffect(() => {
        loadData()
    }, [])



    return (
        <div>

            <div >
                <Navbar />

                <Carousal />

                <div className="row gx-0">

                    {
                        foodCatagory !== [] ?

                            foodCatagory.map((data) => {

                                return (
                                    <>
                                        <hr />
                                        <div key={data._id} className="my-3 d-flex justify-content-center align-items-center">
                                            <h3>{data.CategoryName}</h3>
                                        </div>

                                        <hr />

                                        {
                                            foodItems !== [] ?

                                                foodItems.filter((items) =>
                                                    items.CategoryName === data.CategoryName).map((filterItems) => {

                                                        return (
                                                            <Card itemName={filterItems.name} itemImage={filterItems.img} itemDescription={filterItems.description} itemOptions={filterItems.options[0]} />
                                                        )
                                                    })
                                                :
                                                <div class="spinner-border text-primary" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>

                                        }
                                    </>
                                )
                            })
                            :
                            <div class="spinner-border text-primary" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>

                    }

                </div>
            </div>

            <Footer />
        </div>
    )
}
