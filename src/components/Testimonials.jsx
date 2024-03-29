import React, { useEffect } from "react";
import back from "../assets/background.svg";
import Swiper, { Navigation, Pagination } from "swiper";
import TestimonialCard from "./TestimonialCard";
// import Swiper and modules styles
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "swiper/css";
import { testimonials } from "./Testimonial";

const Testimonials = () => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      new Swiper(".swiper-container", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 8,
        autoplay: {
          delay: 8000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
    });
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 ml-24">
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
          speed: 400,
          drag: true,
          autoplay: true,
          gap: "2rem",
          arrows: false,
          pagination: false,
          breakpoints: {
            640: {
              perPage: 1,
              gap: "1rem",
            },
            768: {
              perPage: 2,
              gap: "1rem",
            },
            1024: {
              perPage: 3,
              gap: "1rem",
            },
          },
        }}
      >
        {testimonials.map((product) => (
          <SplideSlide className="h-[500px] text-[#000]">
            <TestimonialCard
              name={product.name}
              message={product.message}
              title={product.title}
              image={product.image}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Testimonials;
