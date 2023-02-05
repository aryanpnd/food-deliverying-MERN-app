import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'

export default function MyOrders() {

    const [orderData, setorderData] = useState({})


    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/auth/myOrderData", {
            // credentials: 'include',
            // Origin:"http://localhost:5000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })
    }

    useEffect(() => {
        fetchMyOrder()
    }, [])


    return (
        <>
            <Navbar />
            <div className="container w-100 ">
                <div className=" py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="">
                            <div className="card" style={{ borderRadius: '10px' }}>
                                <div className="card-header px-4 py-5">
                                    <h1 className="text-muted mb-0">Your Orders</h1>
                                </div>
                                <div className="card-body p-4" style={{ background: 'grey' }}>

                                    {orderData !== {} ? Array(orderData).map(data => {
                                        return (
                                            data.orderData ?
                                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                                    return (
                                                        item.map((arrayData) => {
                                                            return (
                                                                <div  >
                                                                    {arrayData.Order_date ? <div className='m-auto mt-5'>

                                                                        {data = arrayData.Order_date}
                                                                        <hr />
                                                                    </div> :

                                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                                <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                                                <div className="card-body">
                                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                                        <span className='m-1'>{arrayData.qty}</span>
                                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                                        <span className='m-1'>{data}</span>
                                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                                            ₹{arrayData.price}/-
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>



                                                                    }

                                                                </div>
                                                            )
                                                        })

                                                    )
                                                }) : ""
                                        )
                                    }) : ""}

                                    {/* {orderData !== {} ? Array(orderData).map(data => {
                                        return (
                                            data.orderData ?
                                            data.orderData.order_data.slice(0).reverse().map((item) => {
                                                    return (
                                                        item.map((arrayData) => {
                                                            return (
                                                                <>
                                                                    {
                                                                        arrayData.Order_date ? 

                                                                        <div className='m-auto mt-5'>
                                                                            <h4>{data = arrayData.Order_date}</h4>
                                                                            <hr />
                                                                        </div> :

                                                                            <div className="card shadow-4 border mb-2">
                                                                                <div className="card-body">
                                                                                    <div className="row">
                                                                                        <div className="col-md-2">
                                                                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp" className="img-fluid" alt="Phone" />
                                                                                        </div>
                                                                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                                                            <p className="text-muted mb-0">Samsung Galaxy</p>
                                                                                        </div>
                                                                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                                                            <p className="text-muted mb-0 small">White</p>
                                                                                        </div>
                                                                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                                                            <p className="text-muted mb-0 small">Capacity: 64GB</p>
                                                                                        </div>
                                                                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                                                            <p className="text-muted mb-0 small">Qty: 1</p>
                                                                                        </div>
                                                                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                                                            <p className="text-muted mb-0 small">$499</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
                                                                                    <div className="float-end">
                                                                                        <button className="btn btn-primary">Track Order</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>


                                                                    }
                                                                </>
                                                            )
                                                        })
                                                    )
                                                }) : <><h1>check1</h1></>
                                        )
                                    })

                                    
                                : <><h1>check1</h1></>} */}



                                    {/* <div className="d-flex justify-content-between pt-2">
                                        <p className="fw-bold mb-0">Order Details</p>
                                        <p className="text-muted mb-0"><span className="fw-bold me-4">Total</span> $898.00</p>
                                    </div> */}
                                    {/* <div className="d-flex justify-content-between pt-2">
                                        <p className="text-muted mb-0">Invoice Number : 788152</p>
                                        <p className="text-muted mb-0"><span className="fw-bold me-4">Discount</span> $19.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="text-muted mb-0">Invoice Date : 22 Dec,2019</p>
                                        <p className="text-muted mb-0"><span className="fw-bold me-4">GST 18%</span> 123</p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-5">
                                        <p className="text-muted mb-0">Recepits Voucher : 18KU-62IIK</p>
                                        <p className="text-muted mb-0"><span className="fw-bold me-4">Delivery Charges</span> Free</p>
                                    </div> */}

                                </div>

                                {/* <div className="card-footer border-0 px-4 py-5" style={{ backgroundColor: '#a8729a', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                                    <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
                                        paid: <span className="h2 mb-0 ms-2">$1040</span></h5>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
