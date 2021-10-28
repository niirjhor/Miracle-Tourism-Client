import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import useFirbase from '../../../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirbase();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='nav-section' variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> <span className='text-warning'>Miracle </span>Tourism Ltd</Navbar.Brand>

                    <Nav className="me-auto px-3">
                        <NavLink className='navlists'
                            to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "white"

                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink className='navlists'
                            to="/orderplaced"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "white"
                            }}
                        >
                            Orders placed
                        </NavLink>
                        <NavLink className='navlists'
                            to="/myorders"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "white"
                            }}
                        >
                            My Orders
                        </NavLink>
                        <NavLink className='navlists'
                            to="/manageallorders"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "white"
                            }}
                        >
                            Manage All Orders
                        </NavLink>
                        <NavLink className='navlists'
                            to="/addnewservice"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "white"
                            }}
                        >
                            Add New Service
                        </NavLink>

                        {user?.email ?
                            <Button className='ms-5' onClick={logOut} variant="light">Logout</Button> :
                            <NavLink className='navlists'
                                to="/login"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white"
                                }}
                            >
                                Login or Register
                            </NavLink>}
                        <Navbar.Text className='ms-5'>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
