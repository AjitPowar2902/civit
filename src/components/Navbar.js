import React from 'react'
import { Link } from "react-router-dom";
import '../styles/navbar.css'
import {Button, NavDropdown} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdNotifications } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className='nav'>
       <div className='leftside'>Civit Infra</div>
       <div className='rightside'>
        <Link to="/" className='nav-links'>Dashboard</Link>
        <NavDropdown title="Help" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>{/*  */}
            </NavDropdown>
            <NavDropdown title="Manage" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>{/*  */}
            </NavDropdown>
            <IoMdNotifications className='nav-link-icon' />
        <Button variant="outline-secondary">Logout</Button>
       </div>
    </nav>
  )
}

export default Navbar