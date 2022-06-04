import React from "react";
import './header.css';
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

const NAV__LINKS = [
    {
        display: "home",
        url:'/home'
    },
    {
        display: "Market",
        url:'/Market'
    },
    {
        display: "Create",
        url:'/Create'
    },
    {
        display: "Contact",
        url:'/Contact'
    },
    
]

const Header = () => {
    return(
        <header className="header">
            <Container>
                <div className="navigation">
                    <div className="logo">
                        <h2 className="d-flex gap-2 align-item-center">
                        <span><i className="ri-fire-fill"></i></span>NFTs</h2>
                    </div>
                    <div className="nav__menu">
                        <ul className="nav__list">
                            {
                                NAV__LINKS.map((item, i)=> (
                                    <li className="nav__item" key={i}>
                                        <NavLink to={item.url}>{item.display}</NavLink>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="nav__right d-flex align-item-center gap-5">
                        <button className="btn d-flex gap-2 align-item-center"><Link to="./wallet">
                            <span><i className="ri-wallet-line"></i></span>Connect Wallet</Link></button>
                        
                        <span className="mobile_menu"><i className="ri-menu-line"></i></span>
                    </div>
                    
                </div>
            </Container>
        </header>
    );
}

export default Header;