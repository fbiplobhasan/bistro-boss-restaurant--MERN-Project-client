import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
// import required modules
import { Navigation } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-12 px-4 md:px-20">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((author) => (
          <SwiperSlide key={author._id}>
            <div className="flex flex-col items-center p-6 bg-base-200 rounded-lg text-center">
              <div>
                <p className="text-4xl"><FaQuoteLeft /></p>
              </div>
              <Rating
                style={{ maxWidth: 180 }}
                value={author.rating}
                readOnly
              />
              <p className="mt-4 mb-2 text-gray-700">{author.details}</p>
              <h1 className="text-xl text-orange-400 font-semibold">
                {author.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
