import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './login.css';


export default function Login() {
    let Navigate = useNavigate()
    const [isShown, setIsShown] = useState(false);
    const [isErrorShown, setisErrorShown] = useState(false);

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    })


    const handleSubmit = async (e) => {

        try {
            
            e.preventDefault();
    
            let result = await fetch("http://localhost:5000/api/loginuser", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password,
                })
            });
            result = await result.json();
            if (!result.success) {
                alert("Please Enter the Details Correctly!!");
            }
            if (result.success) {
                // console.log(result)            
                localStorage.setItem("authtoken", result.AuthToken)
                console.log(localStorage.getItem("authtoken"))
            }
            if (result.success) {
                setTimeout(() => {
                    setIsShown(false);
                    Navigate("/");
                }, 2000);
                setIsShown(true);
            }

        } catch (error) {
            setisErrorShown(true)
        }

    }

    const onChange1 = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    };

    return (
        <div>
            {isShown &&
                <div id='loginSuccessScreenAnim' className="vh-100 d-flex justify-content-center align-items-center">
                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Login Successfull , Wellcome</h4>

                    </div>
                </div>

            }
            {isErrorShown &&
                <div id='loginSuccessScreenAnim' className="vh-100 d-flex justify-content-center align-items-center">
                    <div className="alert alert-danger" role="alert">
                        <h4 className="alert-heading">Some Error Occured at Backend!</h4><br />
                        <h4 className="alert-heading">try reloading the page or Wait some Time </h4><br />
                    </div>
                </div>

            }

            {!isShown &&
                <div className="vh-100 my-3 d-flex justify-content-center align-items-center ">

                    <div className="col-md-5 p-3  shadow-sm border rounded-5 border-primary bg-white">
                        <h2 className="text-center mb-4 text-primary">Login</h2>
                        <form onSubmit={handleSubmit}>


                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange1} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control border border-primary" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange1} />
                            </div>


                            <p className="small"><Link className="text-primary" to="/home">Forgot password?</Link></p>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Login</button>



                            </div>


                        </form>

                        <div className="mt-3">
                            <p className="mb-0  text-center">Don't have an account? <Link to="/signup" className="text-primary fw-bold">Sign Up</Link></p>
                        </div>

                    </div>
                </div>}



        </div>
    )
}
