import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { Button} from "react-bootstrap";
import "../styles/hero.css";
import { FiPrinter } from "react-icons/fi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoIosCheckbox } from "react-icons/io";
import TabLinks from "./TabLinks";

const Hero = () => {
  return (
    <>
      <div className="outer-cont">
      <div className="inner-cont">
          <div className="section">
            <HiOutlineHome />/ Ghatkopar Plot DM73 / Change In Water Supply
            Connection Size
          </div>
          <div className="main">
            <div className="main-nav">
              <div className="main-nav-leftside">
                Change in Water Supply Connection Size
              </div>
              <div className="main-nav -rightside">
                <Button className="btn" variant="outline-secondary">
                  Withdraw Application
                </Button>
                <Button className="btn" variant="outline-secondary">
                  <FiPrinter />
                </Button>
              </div>
            </div>
            <div className="main-second">
              <Container>
                <Row>
                  <Col>
                    <p className="light">Plot Number</p>
                    <h5 className="bold">X-1528</h5>
                  </Col>
                  <Col>
                    <p className="light">Industrial Area</p>
                    <h5 className="bold">Dummy Industrial Area</h5>
                  </Col>
                  <Col>
                    <p className="light">Application Status</p>
                    <h5 className="bold">
                      <IoIosCheckbox />
                      Approved
                    </h5>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </div>
            <div className="main-third">
              <Container>
                <Row>
                  <Col>
                    <p className="light">Applicant Name</p>
                    <h5 className="bold">Shridhar Chandra</h5>
                  </Col>
                  <Col>
                    <p className="light">Email</p>
                    <h5 className="bold">shridharchandra@gmail.com</h5>
                  </Col>
                  <Col>
                    <p className="light">Mobile Number</p>
                    <h5 className="bold">+91 9833956299</h5>
                  </Col>
                  <Col>
                    <Button className="btn" variant="outline-danger">
                      <p className="m-0 fs-6">Total Amount Due</p>
                      <h5 className="m-0 fs-6">₹ 2500</h5>
                    </Button>{" "}
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <TabLinks/>
        </div>
      </div>
      
       
    </>
  );
};

export default Hero;
