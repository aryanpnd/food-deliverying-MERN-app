import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'



export default function Login() {
    let Navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = async (e) => {
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
            Navigate("/");
        }
    }

    const onChange1 = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    };

    return (
        <div>

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
                            <button type="submit" className="btn btn-primary" >Login</button>
                        </div>

                    </form>

                    <div className="mt-3">
                        <p className="mb-0  text-center">Don't have an account? <Link to="/signup" className="text-primary fw-bold">Sign Up</Link></p>
                    </div>

                </div>
            </div>

        </div>
    )
}
