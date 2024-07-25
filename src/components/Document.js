import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink} from "react-router-dom"
import "../styles/document.css"
import { MdDeleteOutline } from "react-icons/md";
import { RiUploadFill } from "react-icons/ri";
import { GiLinkedRings } from "react-icons/gi";
const Document = () => {
  return (
    <>
     <Container>
      <Row className='head-row'>
        <Col md="6">Supporting Document</Col>
        <Col md="3">Current document</Col>
        <Col md="3">
          Actions
        </Col>
      </Row>
      <Row className='doc-row'>
        <Col md="6">Block Plan showing existing water supply, plot and the location of proposed water supply connection. [mandatory]</Col>
        <Col md="3"><NavLink style={{color:"black"}}>Document.pdf</NavLink></Col>
        <Col md="3">
        <RiUploadFill className="doc-icon"/>
        <GiLinkedRings className="doc-icon"/>
        <MdDeleteOutline className="doc-icon"/>
        </Col>
      </Row>
      <Row className='doc-row'>
        <Col md="6">MPCB Consent(as necssary)</Col>
        <Col md="3"></Col>
        <Col md="3">
        <RiUploadFill className="doc-icon"/>
        <GiLinkedRings className="doc-icon"/>
        </Col>
      </Row>
      <Row className='doc-row'>
        <Col md="6">MPCB Consent(as necssary)</Col>
        <Col md="3"><NavLink style={{color:"black"}}>Document.pdf</NavLink></Col>
        <Col md="3">
        <RiUploadFill className="doc-icon"/>
        <GiLinkedRings className="doc-icon"/>
        <MdDeleteOutline className="doc-icon"/>
        </Col>
      </Row>
      <Row className='doc-row'>
        <Col md="6">Additional Documnets(if required)</Col>
        <Col md="3"></Col>
        <Col md="3">
        <RiUploadFill className="doc-icon"/>
        <GiLinkedRings className="doc-icon"/>
        </Col>
      </Row>
      <Row className='doc-row'>
        <Col md="6">Additional Documnets(if required)</Col>
        <Col md="3"></Col>
        <Col md="3">
        <RiUploadFill className="doc-icon"/>
        <GiLinkedRings className="doc-icon"/>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Document