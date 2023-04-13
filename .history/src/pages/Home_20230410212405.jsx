import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImage from "../assets/images/hero.png"
import '../styles/hero-section.css'

const Home = () => {
  return (
    <Helmet title='Home'>
      <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <h5 className='mb-3'>Easy Way To Make An Order</h5>
              <h1 className='mb-4 hero__title'><span>HUNGRY...?</span> Just Wait<br/> Food at <span>your door</span></h1>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odio sed explicabo!</p>

              <div className="hero__btns">
                <button className='order__btn'>Order Now</button>
              </div>
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