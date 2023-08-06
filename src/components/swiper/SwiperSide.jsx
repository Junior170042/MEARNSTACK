import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function SwiperSide() {
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                className="swiperSide"
            >
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbsHbvdOlYjdM4M7c1C7OMYwW4_RF7-njX1Q&usqp=CAU" alt="swiper" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_860462652_396419.jpg" alt="swiper" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://socialscienceeducation.unn.edu.ng/wp-content/uploads/sites/168/2018/05/social-sciences.jpg" alt="swiper" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/id/1185621229/es/foto/j%C3%B3venes-empresarios-en-el-cargo.jpg?s=612x612&w=0&k=20&c=Xa4-ZZusUIZ9pxoJbfhx_SpSBmyDb4ASQm332TxIENM=" alt="swiper" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
