import React from 'react'
import Card from '../components/Card'
import Carousal from '../components/Carousal'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'

export default function Home() {


    const [foodCatagory, setFoodCatagory] = useState([])
    const [foodItems, setFoodItems] = useState([])
    const [itemSearch, setitemSearch] = useState("")

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

            <div className=''>
                <Navbar />

                {/* <Carousal /> */}

                <div className="container p-5 ">

                <div className=" " style={{ zIndex: "10" }}>
                    <div className="d-flex justify-content-center align-items-center" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setitemSearch(e.target.value)}} />
                        {/* <button className="btn btn-warning" type="submit">Search</button> */}

                    </div>
                </div>
                </div>


                <div className="row gx-0 px-4 d-flex justify-content-center align-items-center ">

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
                                                    items.CategoryName === data.CategoryName && (
                                                        items.name.toLowerCase().includes(itemSearch.toLowerCase())
                                                        )
                                                    ).map((filterItems) => {

                                                        return (
                                                            <Card key={filterItems._id} foodItems={filterItems} itemOptions={filterItems.options[0]} />
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
