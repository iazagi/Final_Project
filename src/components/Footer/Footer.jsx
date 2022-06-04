import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
const MY__ACOUNT = [
    {
        display: 'Auter profile',
        url: './seller-profile'
    },
    {
        display: 'Creat Item',
        url: './create'
    },
    {
        display: 'Collection',
        url: './market'
    },
    {
        display: 'Edit Profile',
        url: './edit-profile'
    },
];
const RESOURCE = [
    {
        display: 'Help Center',
        url: '#'
    },
    {
        display: 'Partner',
        url: '#'
    },
    {
        display: 'Community',
        url: '#'
    },
    {
        display: 'Activity',
        url: '#'
    },
];

const COMPANY = [
    {
        display: 'About',
        url: '#'
    },
    {
        display: 'Career',
        url: '#'
    },
    {
        display: 'Ranking',
        url: '#'
    },
    {
        display: 'Contact Us',
        url: './contact'
    },
];

const Footer = () => {
    return( 
    <footer className="footer">
        <Container>
           <Row>
              <Col lg='3'  md='6' sm='6'>
                    <div className="logo">
                        <h2 className="d-flex gap-2 align-item-center">
                        <span><i className="ri-fire-fill"></i></span>NFTs</h2>
                        <p>Lorem ipsum dolor, sit amet
                             consectetur adipisicing elit.
                             Facilis eos officiis deleniti 
                             voluptatem quas laborum
                             
                        </p>
                    </div>
                </Col>
               <Col lg='2'  md='6' sm='6'>
                   <h5>My Acount</h5>
                   <ListGroup className="list__group">
                       {
                           MY__ACOUNT.map((item, i)=>(
                               <ListGroupItem key={i} className="list__item">
                                   <Link to={item.url}>{item.display}</Link>
                               </ListGroupItem>
                               
                           ))}
                   </ListGroup>
               </Col>
               <Col lg='2'  md='6' sm='6'>
                   <h5>RESOURCE</h5>
                   <ListGroup className="list__group">
                       {
                           RESOURCE.map((item, i)=>(
                               <ListGroupItem key={i} className="list__item">
                                   <Link to={item.url}>{item.display}</Link>
                               </ListGroupItem>  
                           ))}
                   </ListGroup>
               </Col>
               <Col lg='2'  md='6' sm='6'>
                   <h5>COMPANY</h5>
                   <ListGroup className="list__group">
                       {
                           COMPANY.map((item, i)=>(
                               <ListGroupItem key={i} className="list__item">
                                   <Link to={item.url}>{item.display}</Link>
                               </ListGroupItem>      
                           ))}
                   </ListGroup>
                </Col>
               <Col lg='2'  md='6' sm='6'>
                   <h5>Newsletter</h5>
                   <input type="text" className="newsletter" placeholder="Email"></input>
                   <div className="social__links d-flex gap-3 align-item-center">
                       <span><Link to="#"><i className="ri-facebook-box-fill"></i></Link></span>
                       <span><Link to="#"><i className="ri-instagram-fill"></i></Link></span>
                       <span><Link to="#"><i className="ri-twitter-fill"></i></Link></span>
                       <span><Link to="#"><i className="ri-telegram-line"></i></Link></span>
                       <span><Link to="#"><i className="ri-discord-line"></i></Link></span>
                   </div>
               </Col>
               <Col lg="12" className="mt-4 text-center">
               <p className="copyrigths">Copyrigths 2022, Devloped by israel azagi</p>
               </Col>              
            </Row>
        </Container>
     </footer>
    );
}

export default Footer;