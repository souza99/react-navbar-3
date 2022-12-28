import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavBarElements";


const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>OLA</h1>
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
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/sing-up">Sing up</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default NavBar;