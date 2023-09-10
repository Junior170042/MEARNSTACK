import { SwiperDemo } from "../swiper/Swiper";
import SwiperResponsive from "../swiper/SwiperResponsive";
import "./header.css";
export const Header = ({ posts, loading }) => {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">LIFE'S ON FIRE</span>
        </div>
        <div className={`headerImg ${posts.length === 0 | loading && "noSwiper"}`}>
          <div className="header-text">
            <h1>share your life with others and you will be able to know what people think about you!</h1>

          </div>
          {posts.length > 0 && !loading && <div className="header-swiper">
            <SwiperDemo posts={posts} />
          </div>}
        </div>

      </div>
      <div className="boxSwiper">
        <SwiperResponsive posts={posts} />
      </div>
    </>

  );
};
