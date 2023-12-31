import React from "react";

import { Card, Container, Button } from "react-bootstrap";

import fakePhoto from "../../assets/image/photo.png";
import "./card.css";

const Cards = () => {
  return (
    <Container>
      <Card className="border-0 rounded-0">
        <div className="p-3 d-md-flex justify-content-between">
          <div className="d-flex">
            <img
              src={fakePhoto}
              alt="photo profile"
              className="rounded-circle"
              style={{ width: 80, height: 80 }}
            />
            <div className="ms-3">
              <h5 className="text-black">Louis Tomlinson</h5>
              <p className="mb-1">Web developer</p>
              <div className="d-flex">
                <box-icon name="map" color="gray" animation="tada"></box-icon>
                <p className="ps-1">London, UK</p>
              </div>
              <div className="d-flex gap-2 flew-wrap flex-grow-1">
                <Button variant="warning" className="btn-sm px-3 text-white">
                  Next
                </Button>
                <Button variant="warning" className="btn-sm px-3 text-white">
                  React
                </Button>
                <Button variant="warning" className="btn-sm px-3 text-white">
                  Node
                </Button>
              </div>
            </div>
          </div>
          <div className="d-block d-md-flex align-items-md-center mt-3 mt-md-0">
            <Button className="btn-sm px-3 border-0 py-2 rounded-0 custom-button d-block mx-auto">
              Lihat Profile
            </Button>
          </div>
        </div>
        <hr className="mx-3" />
      </Card>
    </Container>
  );
};

export default Cards;
