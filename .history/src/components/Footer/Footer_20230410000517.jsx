import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from "../../assets/images/res-logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
          <div className="logo footer__logo text-start">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo magnam quisquam molestias dolore maiores distinctio.</p>
          </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h4>Delivery Time</h4>
           <ListGroup>
            <ListGroupItem className=''>
              <span>Sunday - Thursday</span>
              <p>10:00am - 11:00pm</p>
            </ListGroupItem>
            <ListGroupItem>
              <span>Friday - Saturday</span>
              <p>Off Day</p>
            </ListGroupItem>
           </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
          </Col>
          <Col lg='3' md='4' sm='6'>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer