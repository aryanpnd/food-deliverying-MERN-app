import React, { useState, useEffect } from 'react'
import { useRef } from 'react';
import { useDispatchCart, useCart } from '../components/ContextReducer'


export default function Card(props) {

    let dispatch = useDispatchCart();
    let data = useCart();


    let options = props.itemOptions
    let orderOptions = Object.keys(options)

    const [quantity, setQuantity] = useState("1")
    const [size, setSize] = useState("");

    const handleAddToCart = async () => {
        let food = []
        for (const item of data) {
            if (item.id === props.foodItems._id) {
                food = item;
                break
            }
        }
        if (food !== []) {
            if (food.size === size) {
                await dispatch({
                    type: "UPDATE", id: props.foodItems._id, price: finalPrice, qty: quantity,
                })
                return
            }
            else if (food.size === size) {

                await dispatch({
                    type: "ADD",
                    img: props.foodItems.img,
                    id: props.foodItems._id,
                    name: props.foodItems.name,
                    price: finalPrice,
                    qty: quantity,
                    size: size
                })
                return
            }
        }
        await dispatch({
            type: "ADD",
            img: props.foodItems.img,
            id: props.foodItems._id,
            name: props.foodItems.name,
            price: finalPrice,
            qty: quantity,
            size: size
        })

        console.log(data);
        console.log(quantity);
    }


    const priceRef = useRef()
    let finalPrice = quantity * parseInt(options[size])

    useEffect(() => {
        setSize(priceRef.current.value)

    }, [])


    return (
        <div className="card my-5 mx-3 " style={{ width: '18rem' }}>


            <img src={props.foodItems.img} className=" img-thumbnail" alt="..." style={{ height: '200px', objectFit: "fill" }} />


            <div className="card-body">
                <h5 className="card-title">{props.foodItems.name}</h5>
                {/* <p className="card-text">{props.itemDescription}</p> */}
                <hr />
                <div className="d-flex flex-row my-3">


                    <select className="mx-2 btn btn-outline-warning" id="" style={{ width: '6.5rem' }} onChange={(e) => setSize(e.target.value)} ref={priceRef}>
                        {
                            orderOptions.map((data) => {

                                return <option key={data} value={data}>{data}</option>
                            })
                        }
                    </select>

                    <select className="mx-2 btn btn-outline-danger" id="" style={{ width: '4rem' }} onChange={(e) => setQuantity(e.target.value)}>
                        {
                            Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1 + "x"}</option>

                                )
                            })
                        }
                    </select>
                </div>

                <div className="d-flex flex-row my-2">
                    <button className=" btn btn-primary" style={{ width: '10rem', fontSize: '0.8rem' }} onClick={handleAddToCart}>Add to Cart</button>

                    <div className="container d-inline  text-success">
                        <h4 >{`₹${finalPrice}`}</h4>

                    </div>
                </div>


            </div>
        </div>
    )
}
