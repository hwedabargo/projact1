import React from "react";
import {Form , Button , Col} from "react-bootstrap";
import'./Contact.css'
function Contact(){
    return(
 <div>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <img src="Logo.png" alt="logo"/>
   <br/>
   <h1>Contact</h1>
<Form className="content">
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>address select</Form.Label>
    <Form.Control as="select">
      <option>Benghazi</option>
      <option>Tripoli</option>
      <option>Tobruk</option>
      <option>Albuda</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>your Massage</Form.Label>
    <Form.Control as="textarea" placeholder="your Massage" rows={3} />
    <Col xs="auto" className="my-1">
      <Button type="submit">Submit</Button>
    </Col>
  </Form.Group>
</Form>
        </div>
    );
}
export default Contact;