import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImage from "../assets/images/hero.png"

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
            <div className="hero__img" style={{ background: 'red'}}>
              <img src={heroImage} alt='hero-img' className='w-100' />
            </div>
          </Col>
        </Row>
      </Container>
      </section>
    </Helmet>
  )
}

export default Home