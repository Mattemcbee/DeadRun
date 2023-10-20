import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Button,
  Modal,
  Label,
  FormGroup,
  ModalHeader, ModalBody
} from "reactstrap";
import '../App.css'

 
import { NavLink } from "react-router-dom";

import React from 'react';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <Navbar expand="md" sticky="top" className=" HeadBack">
      <NavbarBrand href="/" >
        <h1 className="HeaderColor ">DEAD RUN</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className="ms-5 float-start"
        style={{
          color: 'yellow', borderRadius: "10px",
          borderColor: '#EAC7C7', border: '5px'
        }} ><i className="fa fa-bars fa-md dark HeadColor" >=</i>
      </NavbarToggler>
      
      <Collapse isOpen={menuOpen} navbar>
              <Nav className="ms-auto  float-start" navbar  >

      <NavItem>
        <NavLink className="nav-link HeadColor" to="/Music">
          {/* <i className="fa fa-home fa-lg fontBasic" />  */}
          MUSIC
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link HeadColor" to="/Merch">
          {/* <i className="fa fa-home fa-lg fontBasic" />  */}
          MERCH
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link HeadColor" to="/Show">
          {/* <i className="fa fa-home fa-lg fontBasic" />  */}
          SHOWS
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link HeadColor" to="/Contact">
          {/* <i className="fa fa-home fa-lg fontBasic" />  */}
          CONTACT
        </NavLink>
      </NavItem>
        </Nav>

      </Collapse>
    </Navbar>
  );
};

export default Header;