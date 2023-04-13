import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImage from "../assets/images/"

const Home = () => {
  return (
    <Helmet title='Home'>
      <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImage} alt='hero-img' className='w-100' />
              <h1>IMAGE</h1>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
    </Helmet>
  )
}

export default Home