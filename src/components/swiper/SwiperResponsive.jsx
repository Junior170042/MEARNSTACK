import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiperStyle.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function SwiperResponsive({ posts }) {
    const path = "http://localhost:5000/images/";
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[Pagination, Autoplay]}
                className={posts.length === 1 ? "singleSwiper" : "swiperResponsive"}>

                {posts.length > 0 && posts.map(post => <SwiperSlide key={post._id}>
                    <img src={post.photo ? path + post.photo : path + "placeholder.png"}
                        className="swiperResImg"
                        alt="swiperImg"
                    />
                    <h3 className="swiperResText">{post.categories[0]}</h3>
                </SwiperSlide>)}


            </Swiper>
        </>
    );
}
