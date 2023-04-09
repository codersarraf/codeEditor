import React from 'react'
import {AppBar, Toolbar, styled } from "@mui/material";
import '../Header/header.css'
// import Codepen from '../logo/codepen.jpg'
import CodePen_logo from '../logo/CodePen_logo.png'
const Headerwrapper = styled(AppBar)`
    background: #060606;
    height : 8VH;
    
`

function Header() {
  return (
    // <div id='header'>
        <Headerwrapper position='static'>
            <Toolbar>
                <img id='logo' src={CodePen_logo} alt="logo" />
            </Toolbar>
        </Headerwrapper>
    // </div>
  )
}

export default Header