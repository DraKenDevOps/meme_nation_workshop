import React,{useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import { signin } from '../services/firebase'

import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const [value, setValue] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()

        signin(value.email ,value.password).then((res) => {
            console.log(res)
            alert("Log in success")
            navigate("/home")
        }).catch((err) => {
            alert("Log in error")
            console.log(err)
        })   
    }

    return (
        <Container>
            <Row>
                <div className="col-md-4 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-center mb-4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Reddit_logo_new.svg" alt="" width="200"/>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <input type="email" name="email" className="form-control mb-3" placeholder="Enter email" onChange={handleChange} required/>
                                <input type="password" name="password" className="form-control mb-3" placeholder="Enter password" onChange={handleChange} required/>
                                <button type="submit" className="btn btn-danger w-100 text-light">
                                    LOGIN <i className="fas fa-sign-in-alt"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default Login