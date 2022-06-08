import React from 'react';
import CommonSection from '../components/ui/Common-Section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import NftCard from '../components/ui/Nft-card/NftCard';
import { NFT__DATA } from '../assets/data/data';
import '../Styles/market.css';

const Market = () => {
  const handleCategory = () => {};

  const handleItems = () => {};

  const handleSort = () => {};

  return (
    <>
      <CommonSection title={`Market Placed`} />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="market__product__filter d-flex align-items-center justify-content-between">
                <div className="filter__left d-flex align-items-center gap-5">
                  <div className="all__category__filter">
                    <select onChange={handleCategory}>
                      <option>All Categories</option>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domian-name">Domian name</option>
                      <option value="virtual">Vertual</option>
                      <option value="trending-card">trending</option>
                    </select>
                  </div>

                  <div className="all__items__filter">
                    <select onChange={handleItems}>
                      <h6>All Items</h6>
                      <option>all Items</option>
                      <option value="single-item">Single Item</option>
                      <option value="bundle">Bundle</option>
                    </select>
                  </div>
                </div>
                <div className="filter__right">
                  <select onChange={handleSort}>
                    <option>Sort By</option>
                    <option value="single-item">High Rate</option>
                    <option value="bundle">Mid Rate</option>
                    <option value="bundle">Low Rate</option>
                  </select>
                </div>
              </div>
            </Col>

            {NFT__DATA.map((item) => (
              <Col lg="3" md="4" sm="6" className="md-5" key={item.id}>
                <NftCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;
