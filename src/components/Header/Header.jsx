import React, { useRef, useEffect } from 'react';
import './header.css';
import { Container } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

const NAV__LINKS = [
  {
    display: 'home',
    url: '/home',
  },
  {
    display: 'Market',
    url: '/Market',
  },
  {
    display: 'Create',
    url: '/Create',
  },
  {
    display: 'Contact',
    url: '/Contact',
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('header__shrink');
      } else {
        headerRef.current.classList.remove('header_shrink');
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('active__menu');

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex gap-2 align-item-center">
              <span>
                <i className="ri-fire-fill"></i>
              </span>
              NFTs
            </h2>
          </div>
          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {NAV__LINKS.map((item, i) => (
                <li className="nav__item" key={i}>
                  <NavLink to={item.url}>{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__right d-flex align-item-center gap-5">
            <button className="btn d-flex gap-2 align-item-center">
              <Link to="./wallet">
                <span>
                  <i className="ri-wallet-line"></i>
                </span>
                Connect Wallet
              </Link>
            </button>

            <span className="mobile_menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
