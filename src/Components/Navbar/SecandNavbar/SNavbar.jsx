import React from "react";
import {Navbar,Nav,Form } from "react-bootstrap";
import {Carousel} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF , faTwitter , faInstagram , faSnapchat} from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
// import {Link} from 'react-router-dom';
import './SNavbar.css';

function SNavbar() {
  //This line explains how to document and run social media logos using fontawesome
  library.add(faFacebookF , faTwitter ,faInstagram ,faSnapchat  ); 
    return (
    <div className="SNavbar">
    <Navbar variant="light" style={{backgroundColor:"#white"}}>
    <Nav className="mr-auto">
      <Nav.Link href="https://www.facebook.com/sugarcoffeemakecheesecak/"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></Nav.Link>
      <Nav.Link href="https://www.instagram.com/sugarcoff14/"><FontAwesomeIcon icon={['fab', 'instagram']} /></Nav.Link>
      <Nav.Link href="#Get Direction"><FontAwesomeIcon icon={['fab', 'snapchat']} /></Nav.Link>
      <Nav.Link href="#Get Direction"><FontAwesomeIcon icon={['fab', 'twitter']} mask={['fas', 'circle']} /></Nav.Link>
     </Nav>
     <Nav >
      <Nav.Link to href="#updates">updates</Nav.Link>
      <Nav.Link  to href="#favorite">favorite</Nav.Link>
      <Nav.Link to href="#Gallery">Gallery</Nav.Link>
      <Nav.Link to href="#About us">About us</Nav.Link>
      <Nav.Link to href="#Contact">Contact</Nav.Link>
      </Nav>
     <div className="content" >
    {/* <Navbar.Brand href="#home"><img src="logo.png" alt="Facebooklogo"/></Navbar.Brand> */}
</div>
     <Form inline>
    <Nav className="mr-auto">
      <Nav.Link href="#Call Now">Call Now</Nav.Link>
      <Nav.Link href="https://www.google.com/maps/@32.0951607,20.0979697,14z">Get Direction</Nav.Link>
       {/* <Navbar.Brand href="#home"><FontAwesomeIcon icon={['fas', 'user']} /></Navbar.Brand> */}
     </Nav>
    </Form>
   </Navbar>
   <br/>
   <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="slid1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="slid2.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slid3.png"
          alt="Third slide"
        />
      </Carousel.Item>
      </Carousel>
</div>
  );
}

export default SNavbar;