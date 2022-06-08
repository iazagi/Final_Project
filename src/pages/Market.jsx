import React, { useState } from 'react';
import CommonSection from '../components/ui/Common-Section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import NftCard from '../components/ui/Nft-card/NftCard';
import { NFT__DATA } from '../assets/data/data';
import '../Styles/market.css';

const Market = () => {
  const [data, setData] = useState(NFT__DATA);

  const handleCategory = () => {};

  const handleItems = () => {};

  /// ================== sort data by high mid and low rate =======

  const handleSort = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'High') {
      const filterData = NFT__DATA.filter((item) => item.currentBid >= 6);
      setData(filterData);
    }
    if (filterValue === 'Mid') {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 5 && item.currentBid < 6
      );
      setData(filterData);
    }
    if (filterValue === 'Low') {
      const filterData = NFT__DATA.filter((item) => item.currentBid < 4.99);
      setData(filterData);
    }
  };

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
                    <option value="High">High Rate</option>
                    <option value="Mid">Mid Rate</option>
                    <option value="Low">Low Rate</option>
                  </select>
                </div>
              </div>
            </Col>

            {data?.map((item) => (
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
