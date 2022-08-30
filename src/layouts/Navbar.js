import React from 'react'

import { signout, useAuth } from '../services/firebase'

import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const curUser = useAuth()

    const handleLogout = () => {
        if(window.confirm("Are you sure ?")){
            signout().then((res) => {
                alert("Logged out")
                navigate("/")
            })
        }
    }

    return (
        <div className="alert alert-light shadow-sm" style={{height: "80px"}}>
            <div className="container d-flex justify-content-between">
                {
                    curUser 
                    ? <Link to="/home" className="h2 my-1 fw-bold text-decoration-none text-dark">🥴 Meme Nation 🤪</Link>
                    : <Link to="/" className="h2 my-1 fw-bold text-decoration-none text-dark">🥴 Meme Nation 🤪</Link>
                }
                { 
                    curUser
                    ? <button type='button' className='btn btn-danger fw-bold' onClick={handleLogout}>
                        Log out
                    </button>
                    : <></> 
                }
            </div>
        </div>
    )
}

export default Navbar