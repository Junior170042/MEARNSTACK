import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.newscientist.com/wp-content/uploads/2019/06/13111643/gettyimages-485057010.jpg?crop=4:3,smart&width=1200&height=900&upscale=true"
        alt="Header"
      />
    </div>
  );
};
