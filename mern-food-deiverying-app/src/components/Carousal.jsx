import React from 'react'


export default function Carousal() {

    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" style={{objectFit:"contain !important"}}>

            <div className="carousel-indicators" >
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>



            <div className="carousel-inner" id='carouselForStyle' >

                <div className="carousel-caption " style={{ zIndex: "10" }}>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-warning" type="submit">Search</button>

                    </form>
                </div>

                <div className="carousel-item active" >
                    <img  src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100 h-0" alt="..." style={{ filter: "brightness(60%)" }} />

                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100 h-0" alt="..." style={{ filter: "brightness(60%)" }} />

                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900x700/?cake" className="d-block w-100 h-0" alt="..." style={{ filter: "brightness(60%)" }} />

                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
