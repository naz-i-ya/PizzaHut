import React, {useState, useEffect} from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImage from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category";
import "../styles/home.css";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import products from "../assets/fakedata/products";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import ProductCard from "../components/UI/product-card/ProductCard";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, temporibus.",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, temporibus.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, temporibus.",
  },
];

const Home = () => {

  const[category, setCategory] = useState('ALL');
  const[allProducts, setAllProducts] = useState(products);

  useEffect(() => {

    if(category === "ALL"){
      setAllProducts(products);
    }

    if(category === "BURGER"){
      const filteredProducts = products.filter((item) => item.category === "Burger")
      setAllProducts(filteredProducts)
    }

    if(category === "PIZZA"){
      const filteredProducts = products.filter((item) => item.category === "Pizza")
      setAllProducts(filteredProducts)
    }

    if(category === "BREAD"){
      const filteredProducts = products.filter((item) => item.category === "Bread")
      setAllProducts(filteredProducts)
    }

  },[category])

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy Way To Make An Order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY...?</span> Just Wait
                  <br /> Food at <span>your door</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit odio sed explicabo!
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order Now<i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className="hero__service d-flex align-items-center gap-5 mt-3">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    No shipping chagrge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImage} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                We will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, voluptates?
              </p>
              <p className="feature__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum, omnis?
              </p>
            </Col>

            {featureData.map((item, index) => {
              return (
                <Col lg="4" md="4" key={index} className="mt-5">
                  <div className="feature__itemtext-center px-5 py-3">
                    <img src={item.imgUrl} alt="feature-img" className="mb-3" />
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button className={`all__btn ${category === 'ALL' ? 'foodBtnActive': ''}`}
                onClick={() => setCategory('ALL')}>All</button>

                <button className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodBtnActive': ''}`}
                onClick={() => setCategory('BURGER')}>
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('PIZZA')}>
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('BREAD')}>
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {
              allProducts.map((item) => (
                <Col lg='3' md='4' key={item.id} className='mt-5'>
              <ProductCard item={item}/>
            </Col>
              ))
            }
            
          </Row>
        </Container>
      </section>

      <section>
        
      </section>
    </Helmet>
  );
};

export default Home;
