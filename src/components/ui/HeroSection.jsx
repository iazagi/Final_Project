import React from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import {Link} from 'react-router-dom';
import './heroSection.css';
import heroimg from '../../assets/images/hero.jpg';


const HeroSection = () => {
    return <section className='hero__section'>
        <Container>
            <Row>
                <Col lg='6' md='6' >
                    <div className='hero__content'>
                            <h2>discover rare digital art and collect <span>sell extraordinary</span>NFTs</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugit ex quibusdam? Expedita accusamus nisi autem quidem, sit eaque consectetur!</p>
                        <div className="hero__btns d-flex align-items-center gap-4">
                                <button className='explore__btn d-flex align-items-center gap-2'><i className="ri-rocket-line"></i><Link to='./market'>Explore</Link></button>
                                <button className='create__btn d-flex align-items-center gap-2'><i className="ri-ball-pen-line"></i><Link to='./create'>Create</Link></button>
                        </div>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div>
                        <img src={heroimg} alt='img' className='w-100' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default HeroSection;