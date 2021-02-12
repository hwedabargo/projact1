import React from 'react';
import './NavbarMain.css';
import {Navbar,Nav,Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF  , faInstagram , faSnapchat} from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
const  NavbarMain =( login , logout ,isAuth )=>{
    library.add(faFacebookF  ,faInstagram ,faSnapchat ,faUser); 
    return(

        <div>
  <Navbar id="fixednav" variant="dark" bg="dark" style={{color:"brown"}}>
    <Nav className="mr-auto">
    <Navbar.Brand href="AdminDashboard" ><button onClick={()=>isAuth?logout():login()}>{isAuth?'Logout':'Login'}<FontAwesomeIcon icon={['fas', 'user']} /></button></Navbar.Brand>
      <Nav.Link href="https://www.facebook.com/sugarcoffeemakecheesecak/"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></Nav.Link>
      <Nav.Link href="https://www.instagram.com/sugarcoff14/"><FontAwesomeIcon icon={['fab', 'instagram']} /></Nav.Link>
      <Nav.Link href="https://www.snapchat.com/add/coffeesugar2020"><FontAwesomeIcon icon={['fab', 'snapchat']} /></Nav.Link>
      {/* <Nav.Link href="#Get Direction"><FontAwesomeIcon icon={['fab', 'twitter']} mask={['fas', 'circle']} /></Nav.Link> */}
      <FontAwesomeIcon icon={["coffee"]} />
    <FontAwesomeIcon icon={['fab','faheart']}/> 
    <FontAwesomeIcon icon={['fab','facartplus']}/>
     </Nav>
     <div className="content" >
    {/* <Navbar.Brand href="#home"><img src="logo.png" alt="Facebooklogo"/></Navbar.Brand> */}
</div>
     <Form inline>
    <Nav className="mr-auto">
    <Nav >
       <Nav.Link exact to href="/">Home</Nav.Link>
      {/* <Nav.Link to href="Updates">Updates</Nav.Link>
      <Nav.Link  to href="favorite">favorite</Nav.Link> */}
      <Nav.Link to href="Gallery">Gallery</Nav.Link>
      <Nav.Link to href="AboutUs">About us</Nav.Link>
      <Nav.Link to href="Contact">Contact</Nav.Link>
      </Nav>
      <Nav.Link href="CallNow">Call Now</Nav.Link>
      <Nav.Link href="https://goo.gl/maps/CBxV3MzRGuxK73nK7">Get Direction</Nav.Link>
       {/* <Navbar.Brand href="#home"><FontAwesomeIcon icon={['fas', 'user']} /></Navbar.Brand> */}
     </Nav>
    </Form>
   </Navbar>
        </div>
    );
}

export default NavbarMain;