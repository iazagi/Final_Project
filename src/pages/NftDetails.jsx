import React from 'react';
import CommonSection from '../components/ui/Common-Section/CommonSection';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { NFT__DATA } from '../assets/data/data';
import LiveAuction from '../components/ui/Live-auction/LiveAuction';

const NftDetails = () => {
  const { id } = useParams();

  const singleNft = NFT__DATA.find((item) => item.id === id);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleNft.img} alt="img" className="w-100" />
            </Col>
            <Col lg="6">
              <div className="single__nft__content">
                <h2>{singleNft.title}</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default NftDetails;
