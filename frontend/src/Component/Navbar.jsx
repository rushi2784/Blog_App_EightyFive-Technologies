import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import style from "./Navbar.module.css"


function TopNavbar() {

    let token = ''
    const navigate = useNavigate()
    const [drop, setDrop] = useState(false)
    // const LogOut = () => {
    //     window.localStorage.clear()
    //     navigate("/login")

    //     window.location.reload()
    // }
    return (
        <div>
            <Navbar bg="dark" fixed="top" className='p-3' variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand style={{ cursor: "pointer", fontWeight: '700' }} onClick={() => navigate("/")}>Blog App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            {token != "" ? <>
                                <Nav.Link onClick={() => { setDrop(prv => !prv) }} className=" bg-light" id={style.img}>
                                    <img src='img\my.jpg' alt='userImg' />
                                </Nav.Link>
                                {drop ? <div id={style.dropDown_outer}>
                                    <Nav.Link id={style.dropDown} className='flex flex-col'>

                                        <p className='mt-1'>Profile</p>
                                        <p>Logout</p>

                                    </Nav.Link>

                                </div> : ""}</> : 
                                <>
                                <Nav.Link style={{ fontWeight: '600' }} className="rounded-3 me-3 bg-success text-light" onClick={() => navigate("/login")}   >SignIn</Nav.Link>
                                <Nav.Link style={{ fontWeight: '600' }} className="rounded-3 me-3 bg-light text-dark" onClick={() => navigate("/signup")}>SignUp</Nav.Link>
                                {/* <Nav.Link className="rounded-3 me-3 bg-danger text-white" onClick={LogOut}>LogOut</Nav.Link> */}
                            </>



                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopNavbar