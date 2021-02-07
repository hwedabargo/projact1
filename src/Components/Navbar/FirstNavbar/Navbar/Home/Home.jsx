import React from "react";
import {Carousel} from "react-bootstrap";
import './Home.css';
function Home() { 
  // library.add(faFacebookF , faTwitter ,faInstagram ,faSnapchat ,faUser ); 
    return (
   <div className="FNavbar" >
     <br/>
     <br/>
     <br/>
   <div className="Carousel">
   <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="imgslid/slid1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="imgslid/slid2.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="imgslid/slid3.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="imgslid/slid4.png"
          alt="Third slide"
        />
      </Carousel.Item>
      </Carousel>
      </div>
 <div>

  <br />
  <br />
</div>
</div>

  );
}

export default Home;