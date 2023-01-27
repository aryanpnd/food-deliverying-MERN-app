import React from 'react'
import {Link} from 'react-router-dom'


export default function Login() {
    return (
        <div>

            <h1>The Login Page</h1>
            <Link to='/home'>
                <button type="button" class="btn btn-primary">Primary</button>
            </Link>

        </div>
    )
}
