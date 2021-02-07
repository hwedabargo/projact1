import React from "react";
// import {Navbar,Nav,Form } from "react-bootstrap";
import { FaHeart , FaCartArrowDown} from 'react-icons/fa';
import {CardGroup,Card } from "react-bootstrap";
import "./Gallery.css";
function Gallery(){
      
  
    return(
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1>Products</h1>
          <p style={{fontSize:"50px"}}>cheese cake</p>
   <div className="CardGroup">
<CardGroup >
  <Card>
    <Card.Img variant="top" src="imggallery/cheesecake/Cherries.png" />
    <Card.Body>
      <Card.Title>Cherries</Card.Title>
      <Card.Text>
      Cold cheesecake with sauce <strong>Cherries</strong> .
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <div className="price"> price :</div><div className="icon"><FaHeart size="25"/>   <FaCartArrowDown size="25"/></div></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/cheesecake/Hazelnut.png" />
    <Card.Body>
      <Card.Title>Hazelnut</Card.Title>
      <Card.Text>
      Cold cheesecake with sauce <strong>Hazelnut</strong>.
      </Card.Text>
    </Card.Body>
    <Card.Footer><small className="text-muted">
      <div className="price"> price :</div><div className="icon"><FaHeart size="25"/>   <FaCartArrowDown size="25"/></div></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/cheesecake/Lotus.png" />
    <Card.Body>
      <Card.Title>Lotus</Card.Title>
      <Card.Text>
      Cold cheesecake with sauce <strong>Lotus</strong>.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">
      <div className="price"> price :</div><div className="icon"><FaHeart size="25"/>  <FaCartArrowDown size="25"/> </div></small>
    </Card.Footer>
  </Card>
</CardGroup>
<br/>
<br/>
<CardGroup>
  <Card>
    <Card.Img variant="top" src="imggallery/cheesecake/Pistachio.png" />
    <Card.Body>
      <Card.Title>Pistachio</Card.Title>
      <Card.Text>
      Mini cheesecake cold with sauce <strong>Pistachio</strong>.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">
      <div className="price"> price :</div><div className="icon"><FaHeart size="25"/>   <FaCartArrowDown size="25"/></div></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/cheesecake/lamon.jpg" />
    <Card.Body>
      <Card.Title>lamon</Card.Title>
      <Card.Text>
      Mini cheesecake cold with sauce <strong>lamon</strong>.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">
      <div className="price"> price :</div><div className="icon"><FaHeart size="25"/>   <FaCartArrowDown size="25"/></div></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/cheesecake/Blueberry.png" />
    <Card.Body>
      <Card.Title>Blueberry</Card.Title>
      <Card.Text>
      Cold cheesecake with sauce <strong>Blueberry</strong>
.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">
      <div className="price"> price :</div><div className="icon"><FaHeart size="25"/>   <FaCartArrowDown size="25"/></div></small>
    </Card.Footer>
  </Card>
</CardGroup>
<br/>
    <h1>cupcake</h1>
    <br/>
    <CardGroup >
  <Card>
    <Card.Img variant="top" src="imggallery/cupcake/cup1.png" />
    <Card.Body>
      <Card.Title>Peanut cupcake</Card.Title>
      <Card.Text>
      Cup cake with cream and filling <strong>Peanut</strong>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">
      <div className="price"> price :</div><div className="icon"><FaHeart size="25"/>   <FaCartArrowDown size="25"/></div></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/cupcake/cup2.png" />
    <Card.Body>
      <Card.Title>Chocolate cupcake</Card.Title>
      <Card.Text>
      Cup cake with cream and filling <strong>Chocolate</strong>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">
      <div className="price"> price :</div><div className="icon"><FaHeart size="25"/>   <FaCartArrowDown size="25"/></div></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/cupcake/cup3.png" />
    <Card.Body>
      <Card.Title>Cupcake red berries</Card.Title>
      <Card.Text>
      Cup cake with cream and filling <strong> red berries</strong>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">
      <div className="price"> price :</div><div className="icon"><FaHeart size="25"/>   <FaCartArrowDown size="25"/></div></small>
    </Card.Footer>
  </Card>
</CardGroup>
<br/>
<br/>
<CardGroup>
  <Card>
    <Card.Img variant="top" src="imggallery/cupcake/cup4.png" />
    <Card.Body>
      <Card.Title>Red velvet cupcake</Card.Title>
      <Card.Text>
      Cup cake with cream  <strong> Red velvet </strong>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">
      <div className="price"> price :</div><div className="icon"><FaHeart size="25"/>   <FaCartArrowDown size="25"/></div></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/cupcake/cup5.png" />
    <Card.Body>
      <Card.Title>Lotus cupcake</Card.Title>
      <Card.Text>
      Cup cake with cream and filling <strong>Lotus</strong>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">
      <div className="price"> price :</div><div className="icon"><FaHeart size="25"/>   <FaCartArrowDown size="25"/></div></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/cupcake/cup6.png" />
    <Card.Body>
      <Card.Title>Vanilla cup cake</Card.Title>
      <Card.Text>
      Cup cake with cream and filling <strong>Vanilla</strong>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">
      <div className="price"> price :</div><div className="icon"><FaHeart size="25"/>   <FaCartArrowDown size="25"/></div></small>
    </Card.Footer>
  </Card>
</CardGroup>
<br/>
<br/>
    <h1>Moosecake</h1>
    <br/>
<br/>
<CardGroup>
  <Card>
    <Card.Img variant="top" src="imggallery/Mousecake/img1.png" />
    <Card.Body>
      <Card.Title>Chocolate Moosecake</Card.Title>
      <Card.Text>
      Cup cake with cream  <strong> Chocolate </strong>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">
      <div className="price"> price :</div><div className="icon"><FaHeart size="25"/>   <FaCartArrowDown size="25"/></div></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/Mousecake/img2.png" />
    <Card.Body>
      <Card.Title>Chocolate Moosecake</Card.Title>
      <Card.Text>
      Mini Chocolate Moosecakewith cream and filling <strong>Moosecake</strong>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">
      <div className="price"> price :</div><div className="icon"><FaHeart size="25"/>   <FaCartArrowDown size="25"/></div></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="imggallery/Mousecake/img3.png" />
    <Card.Body>
      <Card.Title>Chocolate Moosecake</Card.Title>
      <Card.Text>
      Moosecake with cream and filling <strong>Chocolate</strong>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">
      <div className="price"> price :</div><div className="icon"><FaHeart size="25"/>   <FaCartArrowDown size="25"/></div></small>
    </Card.Footer>
  </Card>
  <br/>
</CardGroup>
</div>

  </div>
    );
}
export default Gallery;