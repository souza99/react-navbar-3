import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavBarElements";


const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img style={{width:'40px', borderRadius: '20px' }} src={require('../../image/logo.jpg')} alt='logo' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        Contact us
                    </NavLink>
                    <NavLink to="/sing-up" activeStyle>
                        Sing up
                    </NavLink>

                    {/* 2nd Nav */}
                    {/* <NavBtnLink to="/sing-up">Sing up</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/sing-up">Sing up</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default NavBar;