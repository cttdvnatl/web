import React from "react";
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPhoneSquare,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import CustomDropDown from "./CustomDropDown";
import './style.css';


library.add(faPhoneSquare,faEnvelope)

const Navigation = () => (
            <Navbar className="navbar-expand-lg">
                <NavbarBrand href="#home">
                    <img src="/images/logo.png" alt="logo"/>
                </NavbarBrand>
                <div className="collapse navbar-collapse" id="theNavigationBar">
                    <Nav navbar className="mx-auto">
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/events">Events</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                            <CustomDropDown />
                    </Nav>
                    <div className="info">
                        <FontAwesomeIcon icon ="envelope"/><span className="email">Info@cttdvatl.org</span>
                        <FontAwesomeIcon icon ="phone-square"/><span className="phone">770-921-0077</span>
                    </div>
                </div>
            </Navbar>
    )
export default Navigation;