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
    <div
      className="bg-cover bg-center h-screen mt-20 text-center"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="pt-32">
        <div className="bg-[#3778B8] w-3/4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="">
            <h1 className="text-5xl text-white">Testimonials</h1>
            <p className="text-white">
              Dui viverra fermentum pulvinar penatibus at. Aliquet ut ultricies
              sem urna ut faucibus. Turpis fusce velit adipiscing odio
              consequat. Sed consequat nam vivamus quam ut viverra sed.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ml-24">
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
                <SplideSlide>
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
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
