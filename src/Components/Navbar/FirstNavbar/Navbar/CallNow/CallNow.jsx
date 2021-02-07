import React from 'react';
import { Card, Container,Row,Col ,Nav} from "react-bootstrap";
import {FaClock , FaRoute} from 'react-icons/fa';
import './CallNow.css'
function CallNow() {

    return(

        <div>
         <br/>
         <br/>
<Container>
  <Row>
    <Col><img src="1.png" alt="logo"/></Col>
    <Col><img src="2.png" alt="logo"/></Col>
  </Row>
  </Container>
  <br/>
  <br/>
  <Card className="callcard">
  <Card.Body>
  <Container>
  <Row>
    <Col><FaClock size="50"/><br/>
    <br/>
    <strong>work hours</strong>
<div className="days">
<strong>Saturday: </strong>From 09:00 AM to 10:00 PM<br/>
<strong>Sunday:</strong> From 09:00 AM to 10:00 PM<br/>
<strong>Monday:</strong> from 09:00 AM to 10:00 PM<br/>
<strong>Tuesday:</strong> from 09:00 AM to 10:00 PM<br/>
<strong>Wednesday:</strong> from 09:00 AM to 10:00 PM<br/>
<strong>Thursday:</strong> From 09:00 AM to 10:00 PM<br/>
<strong>Friday:</strong> From 00:01 PM to 10:00 PM</div>
    </Col>
    <Col></Col>
    <Col><FaRoute  size="50"/><br/>
    <br/>
    <Nav.Link to href="https://goo.gl/maps/CBxV3MzRGuxK73nK7"><img src="googlemap.png" alt="logo" /></Nav.Link></Col>
  </Row>
</Container>
  </Card.Body>
</Card>
        </div>
    );
    
}
export default CallNow;