import React from 'react'


export default function Carousal() {

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner" id='carouselForStyle'>

                <div className="carousel-caption " style={{ zIndex: "10" }}>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-warning" type="submit">Search</button>

                    </form>
                </div>

                <div className="carousel-item active" >
                    <img src="https://source.unsplash.com/random/900x700/?burger" className=" w-100 object-fit-cover" alt="..." style={{ filter: "brightness(60%)" }} />

                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900x700/?pizza" className=" w-100 object-fit-cover" alt="..." style={{ filter: "brightness(60%)" }} />

                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900x700/?cake" className=" w-100 object-fit-cover" alt="..." style={{ filter: "brightness(60%)" }} />

                </div>

            </div>
        </div>
    )
}
