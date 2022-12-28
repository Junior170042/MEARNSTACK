import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay } from "swiper";

// import required modules
import { EffectCards } from "swiper";

export const SwiperDemo = ({ posts }) => {
    const path = "http://localhost:5000/images/";
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                effect={"cards"}
                grabCursor={true}
                modules={[Autoplay, EffectCards]}
                className="mySwiper"
            >
                {posts.length > 0 && posts.map(post => <SwiperSlide key={post._id}>
                    <img src={post.photo ? path + post.photo : path + "placeholder.png"}
                        className="swiper-img"
                        alt="swiperImg"
                    />
                    <p className="swiper-text">{post.title}</p>
                </SwiperSlide>)}


            </Swiper>
        </>
    )
}
