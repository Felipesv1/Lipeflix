import React from "react";
import styled from "styled-components";
import{
  Link
}
from "react-router-dom";



const Nav = styled.nav`

background:black;
border:1px solid white;
display: flex;
justify-content: space-evenly;
align-items: center;
width:100%;
height:5rem;

a{
    text-decoration:none;
    font-family:  'Bebas Neue', cursive;
    color:white ;
}
`
const TitleNav = styled.h3`

font-family:  'Bebas Neue', cursive;
font-size:2rem;
color: red;

`

export default function Header() {
  return (
    <Nav>
        <div>
        <TitleNav>LIPEFLIX</TitleNav>
        </div>
    <Link to="">
      <h3>Home</h3>
    </Link>
    <Link to="/Movies">
      <h3>Movies</h3>
    </Link>
    <Link to="/Series">
      <h3>Series</h3>
    </Link>
    </Nav>
  );
}