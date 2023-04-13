import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from "../../assets/images/res-logo.png";
import '../../styles/footer.css' 

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
            <h5 className='footer__title'>Delivery Time</h5>
           <ListGroup className='delivery__item-list'>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Sunday - Thursday</span>
              <p>10:00am - 11:00pm</p>
            </ListGroupItem>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Friday - Saturday</span>
              <p>Off Day</p>
            </ListGroupItem>
           </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
          <h5 className='footer__title'>Contact</h5>
           <ListGroup className='delivery__item-list'>
           <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Location: Barkas , Chandrayangutta, Hyderabad.</span>
            </ListGroupItem>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Phone: 7****54***8 </span>
            </ListGroupItem>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Email: naziya@gmail.com</span>
            </ListGroupItem>
           </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Newsletter</h5>
            <p>Subscribe Our Newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder='Enter your Email' />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer