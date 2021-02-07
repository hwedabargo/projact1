import React from "react";
import {Nav} from 'react-bootstrap';

const  AdminDashboard =()=>  {
    return(
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
<Nav justify variant="tabs" defaultActiveKey="/home">
<Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Admin
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/CreatePost">Creact</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Read</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">Gallery</Nav.Link>
  </Nav.Item>
 
</Nav>
        </div>
    );
}
export default AdminDashboard;