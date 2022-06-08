import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/ui/Common-Section/CommonSection';
import NftCard from '../components/ui/Nft-card/NftCard';
import img from '../assets/images/img-01.jpg';
import avatar from '../assets/images/ava-01.png';
import '../Styles/create.css';

const item = {
  id: '04',
  title: 'Guard',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.',
  imgUrl: img,
  creator: 'ziveuch',
  creatorImg: avatar,
  currentBid: 7.89,
};

const Create = () => {
  return (
    <>
      <CommonSection title="Create Item" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Priview Item</h5>
              <NftCard item={item} />
            </Col>

            <Col lg="8" md="8" sm="6">
              <div className="create__item">
                <form>
                  <div className="form__input">
                    <lable htmlFor="">upload File</lable>
                    <input
                      type="file"
                      placeholder="Browse"
                      className="upload__input"
                    />
                  </div>

                  <div className="form__input">
                    <lable htmlFor="">Price</lable>
                    <input
                      type="number"
                      placeholder="Enter price for one Item (ETH)"
                    />
                  </div>

                  <div className="form__input">
                    <lable htmlFor="">Minimum bid</lable>
                    <input type="number" placeholder="Enter minimum bid" />
                  </div>

                  <div
                    className="d-flex align-items-center 
                  "
                  >
                    <div className="form__input w-50">
                      <lable htmlFor="">starting Date</lable>
                      <input type="date" />
                    </div>

                    <div className="form__input w-50">
                      <lable htmlFor="">Expertion date</lable>
                      <input type="date" />
                    </div>
                  </div>

                  <div className="form__input">
                    <lable htmlFor="">Title</lable>
                    <input type="text" placeholder="Enter Title" />
                  </div>

                  <div className="form__input">
                    <lable htmlFor="">Description</lable>
                    <textarea
                      name=""
                      id=""
                      rows="6"
                      placeholder="Enter Description"
                      className="w-100"
                    ></textarea>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
