import React from 'react'

export default function Card(props) {

    let options = props.itemOptions
    let orderOptions = Object.keys(options)

    return (
        <div className="card my-5 mx-4 " style={{ width: '18rem' }}>

            <div className='p-2'>
                <img src={props.itemImage} className=" img-thumbnail" alt="..."     />
            </div>

            <div className="card-body">
                <h5 className="card-title">{props.itemName}</h5>
                <p className="card-text">{props.itemDescription}</p>

                <div className="d-flex flex-row my-3">

                    <a href="#" className=" btn btn-primary" style={{ width: '10rem', fontSize: '0.8rem' }}>Add to Cart</a>

                    <select className="mx-2 btn btn-outline-warning" id="" style={{ width: '6.5rem' }}>
                        {
                            orderOptions.map((data)=>{

                               return <option key={data} value={data}>{data}</option>
                            })
                        }
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
