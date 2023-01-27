import React from 'react'

export default function Card() {
    return (
        <div className="card my-5 mx-5 " style={{ width: '18rem' }}>

            <div className='p-2'>
                <img src="https://static.toiimg.com/photo/msid-87930581/87930581.jpg" className="card-img-top" alt="..." />
            </div>
            
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                <div className="d-flex flex-row my-3">

                    <a href="#" className=" btn btn-primary" style={{ width: '10rem', fontSize: '0.8rem' }}>Add to Cart</a>

                    <select className="mx-2 btn btn-outline-warning" id="" style={{ width: '6.5rem' }}>
                        <option value="half">half</option>
                        <option value="full">full</option>
                    </select>

                </div>

                <div className="d-flex flex-row my-2">
                    <select className="mx-2 btn btn-outline-danger" id="" style={{ width: '4rem' }}>
                        {
                            Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value="i+1">{i + 1 + "x"}</option>

                                )
                            })
                        }
                    </select>

                    <div className="container d-inline">
                        Total price :
                    </div>
                </div>


            </div>
        </div>
    )
}
