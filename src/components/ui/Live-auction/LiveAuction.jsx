import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

import img01 from '../../../assets/images/img-01.jpg';
import ava01 from '../../../assets/images/ava-01.png';

const LiveAuction = () =>{
    return <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-4'>
                    <div className='live__action__top d-flex align-items-center justify-content-between'>
                        <h3>Live Auction</h3>
                        <span><link to='./market'>EXplore more</link></span>
                    </div>
                </Col>
                <col lg='4'>
                    <div className='single__nft__card'>
                        <div className='nft__img'>
                            <img src={img01} alt='img' className='w-100'/>
                        </div>
                        <div className='nft__content'>
                            <h5 className='nft__title'>Travel Monkey</h5>
                            <div className='creator__info-wrapper'>
                                <div className='creator__img'>
                                    <img src={ava01} alt="img" className='w-100'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </col>
            </Row>
        </Container>
    </section>
}

export default LiveAuction;