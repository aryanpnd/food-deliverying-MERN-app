import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useDispatchCart, useCart } from '../components/ContextReducer'
library.add(faShoppingCart);

export default function Navbar() {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.removeItem("authtoken")
        navigate("/login")
    }
    let data = useCart();

    return (

        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>


                    <Link className="navbar-brand" to="/">Food Corner</Link>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>


                            {/* {
                                (localStorage.getItem('authtoken')) ?

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">My Orders</Link>
                                    </li>
                                    :
                                    ""
                            } */}

                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>

                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li> */}


                        </ul>


                    </div>

                    {
                        (!localStorage.getItem('authtoken')) ?
                            <div>

                                <Link className='' to="/login">

                                    <button to="" className="btn btn-outline-success mx-2" type="submit">Login</button>

                                </Link>

                                <Link className='' to="/signup">

                                    <button to="" className="btn btn-outline-success mx-2" type="submit">Sign Up</button>

                                </Link>
                            </div>
                            :
                            <div className='my-2'>
                                
                                    <Link className="btn btn-outline-dark mx-2 " to="/cart"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> <i class="fa-solid fa-cart-shopping"><span>{data.length}</span></i>
                                    </Link>

                                    <Link className="btn btn-outline-warning mx-2" to="/myOrders"> My Orders</Link>

                                    <button className="btn btn-outline-danger mx-2" onClick={handleLogout}>Logout</button>
                            </div>

                    }



                </div>
            </nav>

        </div>

    )
}
