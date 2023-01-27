import React from 'react'
import Card from '../components/Card'
import Carousal from '../components/Carousal'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <div>

            <div >
                <Navbar />

                    <Carousal/>

                <div className="row gx-0">
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                    <div className="col"><Card /></div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}
