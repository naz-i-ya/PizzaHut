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
              <h5>Easy Way To Make An Order</h5>
              <h1><span>Hungry...?</span> Just Wait Food <span>at your door</span></h1>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odio sed explicabo!</p>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img" >
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