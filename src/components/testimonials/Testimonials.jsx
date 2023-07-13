import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

//import swiper
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "vaibhavi1",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dignissimos corporis voluptates quisquam magnam dicta magni tempore! Quas, eos harum.",
  },
  {
    avatar: AVTR2,
    name: "vaibhavi2",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dignissimos corporis volupta,tes quisquam magnam dicta magni tempore! Quas, eos harum.",
  },
  {
    avatar: AVTR3,
    name: "vaibhavi3",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dignissimos corporis voluptates quisquam magnam dicta magni tempore! Quas, eos harum.",
  },
  {
    avatar: AVTR4,
    name: "vaibhavi4",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dignissimos corporis voluptates quisquam magnam dicta magni tempore! Quas, eos harum.",
  },
];
const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avator one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;
