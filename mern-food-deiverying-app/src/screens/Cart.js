import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useDispatchCart, useCart } from '../components/ContextReducer'
import { useState } from 'react'
import './Screens.css';

export default function Cart() {

    // const navigate = useNavigate();

    let dispatch = useDispatchCart();
    let data = useCart();

    const [orderPlacedAnim, setorderPlacedAnimAnim] = useState(true)

    if (data.length === 0) {

        return (
            <div id='loginSuccessScreenAnim' className="vh-100 d-flex justify-content-center align-items-center">

                <div className="alert alert-warning" role="alert">
                    <h4 className="alert-heading">Your Cart is empty</h4>
                    <Link to="/" type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Add Something to your Cart</Link>
                </div>
            </div>
        )
    }




    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("userEmail")
        let response = await fetch("http://localhost:5000/api/orderData",
            {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    order_data: data,
                    email: userEmail,
                    order_date: new Date().toDateString()
                })
            }
        )
        console.log("Order Response", response)
        if (response.status === 200) {
            setorderPlacedAnimAnim(false)
            setTimeout(() => {
                dispatch({ type: "DROP" })
            }, 3000);
        }

    }

    let totalPrice = data.reduce((total, food) => total + food.price, 0)

    // let totalCartItemsVar = parseInt(data.map((food,index)=>(index+1)))

    return (
        <>

            <div className="h-100 gradient-custom">
                <Navbar />

                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart - {data.length} items</h5>
                                </div>


                                {
                                    data.map((food, index) => (
                                        <div className="card-body">
                                            {/* Single item */}
                                            <div className="row">
                                                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                    {/* Image */}
                                                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                        <img src={food.img} className="w-100" alt="Blue Jeans Jacket" />
                                                        <a href="#!">
                                                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                                                        </a>
                                                    </div>
                                                    {/* Image */}
                                                </div>
                                                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                    {/* Data */}
                                                    <p><strong>{food.name}</strong></p>
                                                    <p>Quantity : {food.qty}</p>
                                                    <p>Size : {food.size}</p>
                                                    <p>Price : {food.price}</p>

                                                    <button type="button" className="btn btn-danger btn-sm mb-2col-lg-5 col-md-6 mb-4 mb-lg-0 " data-mdb-toggle="tooltip" title="Move to the wish list" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>Remove
                                                    </button>

                                                    {/* Data */}
                                                </div>

                                            </div>
                                            {/* Single item */}

                                            <hr className="my-4" />

                                            {/* Single item */}
                                        </div>
                                    ))
                                }



                            </div>


                        </div>
                        <div className="col-md-4 ">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Order Details</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Products
                                            <span>{`₹${totalPrice}`}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                            <span>₹50</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                            </div>
                                            <span><strong>{`₹${totalPrice + 50}`}</strong></span>
                                        </li>
                                    </ul>
                                    <button onClick={handleCheckOut} type="button" className="btn btn-primary btn-lg btn-block">
                                        Go to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {orderPlacedAnim ? "" : <div id='OrderSuccessScreenAnim' className="alert alert-success fixed-bottom m-5 " role="alert">
                    <h4 className="alert-heading">Your Order has been placed!!</h4>
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to="/home" type="button" className="btn btn-primary btn-lg btn-block mx-2">
                            Go to Home
                        </Link>
                        <Link type="button" className="btn btn-warning btn-lg btn-block mx-2" to="/myOrders">
                            Go to My Orders
                        </Link>
                    </div>
                </div>}

            </div>
        </>
    )
}
