import TestimonialCard from '../../UI/TestimonialCard/TestimonialCard';
import classes from './Testimonial.module.css';

import Slider from '../../UI/Slider/Slider';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

import testimonials from '../../DUMYY_DATA/Testimonials';

const Testimonial = () => {
  return (
    <div className="container relative mx-auto">
      <div className={classes.wrapper}>
        <h1>Testimonial</h1>
        <p>see what people say about our company</p>
        <div className={classes.underline}></div>

        <Swiper
          breakpoints={{
            220: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            720: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay
          navigation={true}
          className="mySwiper"
          effect="fade"
        >
          <div className={classes.testimonial}>
            {testimonials &&
              testimonials.map((testimonial) => {
                return (
                  <SwiperSlide key={testimonial.id}>
                    <TestimonialCard
                      img={testimonial.img}
                      name={testimonial.name}
                      destination={testimonial.destination}
                      description={testimonial.description}
                    />
                  </SwiperSlide>
                );
              })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
