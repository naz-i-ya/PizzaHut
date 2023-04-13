import React from 'react'
import Slider from "react-slick";

import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'

const TestimonialSlider = () => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
  return (
    <Slider {...settings}>
         <div>
        <p className="review__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quo deserunt numquam quae molestias illo tempore nulla. Quos architecto libero minima aut, modi dignissimos eum placeat ratione, nam iusto accusamus.
        </p>
        <div>
            <img src={ava01} alt="" />
        </div>
      </div>
      <div>
      <p className="review__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quo deserunt numquam quae molestias illo tempore nulla. Quos architecto libero minima aut, modi dignissimos eum placeat ratione, nam iusto accusamus.
        </p>
        <div>
            <img src={ava01} alt="" />
        </div>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  )
}

export default TestimonialSlider