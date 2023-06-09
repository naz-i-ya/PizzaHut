import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImage from "../assets/images/hero.png"
import '../styles/hero-section.css'
import { Link } from 'react-router-dom'
import Category from '../components/UI/category/Category'

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

              <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                <button className='order__btn d-flex align-items-center justify-content-between'>Order Now<i className="ri-arrow-right-s-line"></i></button>
                <button className='all__foods-btn'><Link to='/foods'>See all foods</Link></button>
              </div>

              <div className='hero__service d-flex align-items-center gap-5 mt-3'>
                <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i className="ri-car-line"></i></span> No shipping chagrge</p>
                <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i className="ri-shield-check-line"></i></span>{" "}100% secure checkout</p>
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
      <section className='pt-0'>
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle'>What we serve</h5>
              <h2 className='feature__title'>Just sit back at home</h2>
              <h2 className='feature__title'>We will <span>take care</span></h2>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home