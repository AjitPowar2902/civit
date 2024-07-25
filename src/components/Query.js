import React from "react";
import "../styles/query.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {NavLink} from "react-router-dom"
import Stack from "react-bootstrap/Stack";
const Query = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-secondary" style={{ width: "150px" }}>
                Ask a Query
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Stack gap={1}>
        <div className="p-2">
          <Stack direction="horizontal" gap={3}>
            <div className="p-0">
              {" "}
              <h6 className="m-0">My Query</h6>
            </div>
            <div className="p-2 ms-auto"></div>
            <div className="p-2">10 June 2024</div>
          </Stack>

          <p className="fs-6 fw-light">
            Is there any industrial land available in Ahemadnagar for next IT
            Units?
          </p>
        </div>
        <div className="p-2">
        <Stack direction="horizontal" gap={3}>
            <div className="p-0">
              {" "}
              <h6 className="m-0">MIDC Reply</h6>
            </div>
            <div className="p-2 ms-auto"></div>
            <div className="p-2">10 June 2024</div>
          </Stack>
          <p className="fs-6 fw-light">
            Yes, Industrial land is available in Ahemadnagar for new IT units.
            Please visit our regional office or our online portal for detailed
            information and the application process.
          </p>
        </div>
      </Stack>
      <Stack gap={1} className="query-down">
        <div className="p-2">
        <Stack direction="horizontal" gap={3}>
            <div className="p-0">
              {" "}
              <h6 className="m-0">Query from MIDC</h6>
            </div>
            <div className="p-2 ms-auto"></div>
            <div className="p-2 ">10 June 2024</div>
          </Stack>
          <p className="fs-6 fw-light">
            Lands letter of authority form is missing fot the given plot. Please
            sahre that with the MIDC teams as soon as possible for the semaless
            process.
          </p>
        </div>
        <div className="p-2">
          <h6 className="mb-1">Reply</h6>
          <p className="fs-6 fw-light">No reply from your side.<NavLink className="fw-bold" style={{color:"black"}}> Enter Reply</NavLink></p>
        </div>
      </Stack>
    </>
  );
};

export default Query;
