import "./postDetail.css";

export const PostDetail = () => {
  return (
    <div className="post-detail">
      <div className="detail-content">
        <img
          src="https://mymodernmet.com/wp/wp-content/uploads/2021/04/Nature-Sounds-For-Well-Being-03.jpg"
          alt="detail"
          className="detailImg"
        />
        <h1 className="detail-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="edit-container">
            <i className="detail-icon fa-regular fa-pen-to-square"></i>
            <i className="detail-icon fa fa-trash"></i>
          </div>
        </h1>
        <div className="detail-info">
          <span className="detail-auther">
            Author: <b>Something</b>
          </span>
          <span className="detail-date">
            <b>Date:</b> 1 hour ago
          </span>
        </div>
        <p className="detail-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa
          est, laudantium amet eaque corporis nisi autem nobis architecto
          eveniet praesentium cumque nihil. Eaque recusandae aliquid ipsa
          doloribus molestiae sequi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Illo ipsa est, laudantium amet eaque corporis nisi
          autem nobis architecto eveniet praesentium cumque nihil. Eaque
          recusandae aliquid ipsa doloribus molestiae sequi. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Illo ipsa est, laudantium amet
          eaque corporis nisi autem nobis architecto eveniet praesentium cumque
          nihil. Eaque recusandae aliquid ipsa doloribus molestiae sequi.
        </p>
      </div>
    </div>
  );
};
