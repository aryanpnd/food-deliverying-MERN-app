import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function Login() {

    let Navigate = useNavigate("/")

    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        geolocation: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({name: credentials.name,
            email: credentials.email,
            password: credentials.password,
            location: credentials.geolocation}))
        let result = await fetch("http://localhost:5000/api/createuser", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.geolocation
            })
        });
        result = await result.json();
        if (!result.success) {
            alert("Please Enter the Details Correctly!!");
        }
        if (result.success) {
            Navigate("/login")
        }
    }

    const onChange1 = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    };

    return (
        <div>

            <div className="vh-100 my-3 d-flex justify-content-center align-items-center ">

                <div className="col-md-5 p-3  shadow-sm border rounded-5 border-primary bg-white">
                    <h2 className="text-center mb-4 text-primary">SignUp</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label htmlFor="exampleInputName1" className="form-label">Name</label>
                            <input type="text" className="form-control border border-primary" id="exampleInputName1" aria-describedby="emailHelp" name='name' value={credentials.name} onChange={onChange1} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange1} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control border border-primary" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange1} />
                        </div>

                        <div className="col-auto" >
                            <label className="sr-only" htmlFor="inlineFormInputGroup">Address</label>
                            <div className="input-group border border-primary mb-2">
                                <div className="input-group-prepend ">
                                    <div className="input-group-text"><button className="btn btn-primary" >Get Location</button></div>
                                </div>
                                <input type="text" className="form-control " id="disabledInput" placeholder="Address" name='geolocation' value={credentials.geolocation} onChange={onChange1} />
                            </div>
                        </div>

                        <p className="small"><Link className="text-primary" to="/home">Forgot password?</Link></p>

                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary" >Sign up</button>
                        </div>

                    </form>

                    <div className="mt-3">
                        <p className="mb-0  text-center">Already have an account? <Link to="/login" className="text-primary fw-bold">Login</Link></p>
                    </div>

                </div>
            </div>

        </div>
    )
}