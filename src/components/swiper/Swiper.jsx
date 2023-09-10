import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay } from "swiper";

// import required modules
import { EffectCards } from "swiper";

export const SwiperDemo = ({ posts }) => {

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
                    <img src={post.photo ? post.photo : ""}
                        className="swiper-img"
                        alt="swiperImg"
                    />
                    <p className="swiper-text">{post.title}</p>
                </SwiperSlide>)}


            </Swiper>
        </>
    )
}
