import React from 'react'
import '../../Assets/Global.css'
import {Button,Form,Col,Row,Card,Breadcrumb,ListGroup,Badge,InputGroup,ProgressBar} from 'react-bootstrap';

export default function RegistrationProgress({property,contact,variantFirst,variantSecond,check}) {
  return (
   <>
   <div className="row" style={{paddingTop:'8px'}}>
          <div className="col-md-6">
          <ProgressBar style={{width:"100%",height:"5px"}} now={property}   variant={variantFirst}/>
            </div>
            <div className="col-md-6">
            <ProgressBar style={{width:"100%",height:"5px"}} now={contact}   variant={variantSecond}/>
            </div>
            </div>

       
        <div className="row">
          <div className="col-md-6">
          <Form>
      <Form.Check
        type="radio"
        id="property-details"
        name="property-details"
        label="Property Details"
        className='summarylabel custom-radio'
        disabled
        checked={check === 1 || check === 2}
      />
    </Form>
         
            </div>
            <div className="col-md-6">
            <Form>
      <Form.Check
        type="radio"
        id="property-details"
        name="property-details"
        label="Plot/Unit Contact Information"
        className='summarylabel custom-radio'
        checked={check === 2}
        disabled
      />
    </Form>
             
            </div>
            </div>
   </>
  )
}
