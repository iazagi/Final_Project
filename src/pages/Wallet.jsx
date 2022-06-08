import React from 'react';
import CommonSection from '../components/ui/Common-Section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import '../Styles/wallet.css';

const wallet__data = [
  {
    title: 'Bitcoin',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Equasi aliquid sequi recusandae ',
    icon: 'ri-bit-coin-line',
  },
  {
    title: 'Coinbas',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Equasi aliquid sequi recusandae ',
    icon: 'ri-coin-line',
  },
  {
    title: 'metamask',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Equasi aliquid sequi recusandae ',
    icon: 'ri-money-cny-circle-line',
  },
  {
    title: 'Authereum',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Equasi aliquid sequi recusandae ',
    icon: 'ri-copper-coin-line',
  },
];

const Wallet = () => {
  return (
    <>
      <CommonSection title="Connect to wallet" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect to your wallet</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                  quasi aliquid sequi recusandae in nemo alias reiciendis ad! A
                  tenetur dolorem id placeat temporibus similique?
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg="3" mb="4" sm="6" key={index} className="mb-4">
                <div className="wallet__item">
                  <span>
                    <i className={item.icon}></i>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
