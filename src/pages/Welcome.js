import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {

    return (
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/5/58/Reddit_logo_new.svg" alt="" width="250"/>
            <h1 className="display-5 text-danger fw-bold">Welcome to Meme Nation</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    A meme is an idea, behavior, or style that spreads by means of imitation from person to person within a culture and often carries symbolic meaning representing a particular phenomenon or theme.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to="/login" className='btn btn-danger btn-lg text-decoration-none text-light w-25'>LOGIN</Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome