import { styled } from "@stitches/react";

export const HeaderContainer = styled('div', {
  padding: '0 3rem',
  backgroundColor: 'black',
  display: "flex",
  justifyContent: "space-between",
  height: '90px',
  alignItems: 'flex-end',
  fontSize: '1.25rem',

  'img': {
    objectFit: 'contain',
  },
})

export const Navbar = styled('div', {
  display: "flex",
  gap: '1.5rem',
})

export const NavbarItem = styled('a', {
  textDecoration: 'none',
  fontSize: '1.25rem',
  position: 'relative',
  padding: '0 7px',

  '&:after': {
    content: "",
    position: "absolute",
    backgroundColor: '#BBBBBB',
    height: '3px',
    width: 0,
    left: 0,
    bottom: '-10px',
    transition: '0.4s',
  },

  '&:hover': {
    color: 'white',
  },

  '&:hover:after': {
    width: '100%',
  }
})