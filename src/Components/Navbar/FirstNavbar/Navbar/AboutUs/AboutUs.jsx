import React from "react";
import { Card ,Container,Row,Col} from "react-bootstrap";
import {FaWeixin ,FaCashRegister,FaPeopleCarry} from 'react-icons/fa'
import './AboutUs.css';

function AboutUs(){
    return(

   <div>
    <br/>
    <br/>
   <br/>
   <br/>
  <Container>
  <Row>
  <Col>
    <div id="RightSide">
    <Card className="Cardright">
    <h1 style={{textAlign:"center"}}>About Us</h1>
    <Card.Body>We are working on an online store project for Coffee specializing in selling many types of
               sweets, at first the focus will be on one type, then after testing the brand we will expand.
               We want the store to be simple, its goal is to help the customer order directly<br/>
                without distraction.</Card.Body>
   </Card>
    </div>
    <br/>
    <br/>
    <h2>"Advantages of the store"</h2>

    <div id="RightSide">
    <Card className="Cardright">
    <h4 style={{textAlign:"center"}}>Communicate with you</h4>
    <Card.Body id="icon"><FaWeixin size="100"/></Card.Body>
   </Card>
    </div>
    <br/>
    <br/>
    <div id="RightSide">
    <Card className="Cardright">
    <h4 style={{textAlign:"center"}}>Payment options</h4>
    <Card.Body id="icon"><FaCashRegister size="100" /></Card.Body>
   </Card>
    </div>
    <br/>
    <br/>
    <div id="RightSide">
    <Card className="Cardright">
    <h4 style={{textAlign:"center"}}>Fast delivery</h4>
    <Card.Body id="icon"><FaPeopleCarry size="100"/></Card.Body>
   </Card>
    </div>
    </Col>
  <Col> 
    <div id="LiftSide">
    <Card className="Cardlift">
      <h1>Collage Bakery Menu</h1>
   <Card.Body><img src="Cake Photo Collage Bakery Menu.png" alt="logo"/></Card.Body>
   </Card>
    </div>
    </Col>
    </Row>
    </Container>
    <br/>
    <br/>
    <br/>

        </div>
    );
}
export default AboutUs;