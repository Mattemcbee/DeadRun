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

import { NavLink } from "react-router-dom";

import React from 'react';


const Header = () => {

  return (
    <Navbar expand="lg" sticky="top" className=" ">
      <NavbarBrand >
        <h1 className="HeaderColor ">DEAD RUN</h1>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;