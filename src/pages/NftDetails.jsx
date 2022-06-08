import React from 'react';
import CommonSection from '../components/ui/Common-Section/CommonSection';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { NFT__DATA } from '../assets/data/data.js';
import LiveAuction from '../components/ui/Live-auction/LiveAuction';
import '../Styles/nft-details.css';
import { Link } from 'react-router-dom';

const NftDetails = () => {
  const { id } = useParams();

  const oneNft = NFT__DATA.find((item) => item.id === id);

  return (
    <>
      <CommonSection title={oneNft.title} />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={oneNft.imgUrl} alt="img" className="w-100" />
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="single__nft__content">
                <h2>{oneNft.title}</h2>
                <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                  <div className="d-flex align-items-center gap-4 single__nft-seen">
                    <span>
                      <i className="ri-eye-line"></i>234
                    </span>
                    <span>
                      <i className="ri-heart-line"></i>1234
                    </span>
                  </div>

                  <div className="d-flex align-items-center gap-2 single__nft-more">
                    <span>
                      <i className="ri-send-plane-line"></i>
                    </span>
                    <span>
                      <i className="ri-more-2-line"></i>
                    </span>
                  </div>
                </div>

                <div className="nft__creator d-flex gap-3 align-items-center">
                  <div className="creator__img">
                    <img src={oneNft.creatorImg} alt="img" className="w-100" />
                  </div>
                  <div className="creator__detail">
                    <p>Created by</p>
                    <h6>{oneNft.creator}</h6>
                  </div>
                </div>

                <p className="my-4">{oneNft.desc}</p>
                <button className="singleNft-bid-btn d-flex gap-3 align-items-center w-100">
                  <i className="ri-shopping-bag-line"></i>
                  <Link to="/wallet">Place a Bid</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <LiveAuction />
    </>
  );
};
export default NftDetails;
