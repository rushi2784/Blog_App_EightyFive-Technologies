import React from 'react'
import TopNavbar from '../../Component/Navbar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './All.module.css'
import { SingupUser } from '../../Redux/AuthReducer/action';

function SignUp() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false);
    let dispatch = useDispatch()
    let navigate = useNavigate()

    const handleClick = () => setShow(!show);


    const SubmitForm = (e) => {
        e.preventDefault()

        const payload = {
            name,
            email,
            password
        }
        console.log(payload)
        dispatch(SingupUser(payload))
            .then((res) => {
               
                if (res.type == "SINGUP_SUCCESS") {

                    setName("")
                    setEmail("")
                    setPassword("")
                    alert("Singup Success")
                    navigate("/signin")

                }
                else if (res.payload.response.status == 403) {

                    alert("User already exists")

                }
                else {
                    alert("Try again")
                }

            })
    }

    return (
        <div>
            <TopNavbar />
            <div style={{ marginTop: "8rem" }}>


                <div className='pb-4 container center_div col-md-4 border border-dark rounded-3 mt-5'>
                    <h1 className='text-center mt-5 '>SignUp</h1>
                    <Form onSubmit={SubmitForm} className='mt-3 p-5' >

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                value={name} required
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Enter Name" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={email}
                                maxLength="30" required
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>

                            <Form.Control
                                value={password}
                                minLength="6" required
                                onChange={(e) => setPassword(e.target.value)}
                                type={show ? 'text' : 'password'}
                                placeholder="Password" />

                            <div id={styles.showBtn} onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </div>
                        </Form.Group>

                        <Button className='col-md-12 mt-3 ' variant="primary" type="submit">
                            SignUp
                        </Button>
                        <Button onClick={() => navigate("/signin")} style={{ marginLeft: '48%' }} variant="link"> Have an account? singin</Button>
                    </Form>
                </div>

            </div>
        </div>
    )
}

export default SignUp
