import React from 'react';
import './stepSection.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const STEP__DATA = [
  {
    title: 'setup your wallet',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, ratione',
    icon: 'ri-wallet-line',
  },
  {
    title: 'Create your collection',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, ratione',
    icon: 'ri-layout-masonry-line',
  },
  {
    title: 'Add your NFTs',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, ratione',
    icon: 'ri-image-add-fill',
  },
  {
    title: 'List them from sale',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, ratione',
    icon: 'ri-list-check',
  },
];

const stepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Create and sell your NFTs</h3>
          </Col>
          {STEP__DATA.map((item, i) => (
            <Col lg="3" md="4" sm="6" className="mb-4" key={i}>
              <div className="single__step__item">
                <span>
                  <i className={item.icon}></i>
                </span>
                <div className="single__step__content">
                  <h5 className="mb-0">
                    <Link to="./wallet">{item.title}</Link>
                  </h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default stepSection;
