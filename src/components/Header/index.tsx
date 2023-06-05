import { HeaderContainer, Navbar, NavbarItem } from "./styles";
import logo from '../../assets/logo.png'
import React from "react";

export default function Header() {
  return (
    <HeaderContainer>
      <span>contact@biko.com</span>

      <img src={logo} alt="Biko" />

      <Navbar>
        <NavbarItem href="#">About us</NavbarItem>
        <NavbarItem href="#">Benefits</NavbarItem>
        <NavbarItem href="#">Contact</NavbarItem>
      </Navbar>
    </HeaderContainer>
  )

}