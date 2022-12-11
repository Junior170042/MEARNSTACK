import { useEffect, useState } from "react";
import "./postDetail.css";
import axios from "axios";
import { Link } from "react-router-dom";
//import { useLocation } from "react-router-dom";
export const PostDetail = ({ post_id }) => {
  const [post, setPost] = useState({});
  /*
  wse can get the id from the url in the location object
  const location = useLocation();
  we split the path url into an array and we get the id from that array
  const _id = location.pathname.split('/')[2];*/

  useEffect(() => {
    const getSinglePost = async () => {
      const res = await axios.get("/post/" + post_id);
      setPost(res.data);


    }
    getSinglePost();
  }, [post_id])
  return (
    <div className="post-detail">

      <div className="detail-content">
        <img
          src={post.photo ? post.photo : "https://www.alro-group.com/wp-content/uploads/2014/12/placeholder.jpg"}
          alt="detail"
          className="detailImg"
        />
        <h1 className="detail-title">
          {post.title}
          <div className="edit-container">
            <i className="detail-icon fa-regular fa-pen-to-square"></i>
            <i className="detail-icon fa fa-trash"></i>
          </div>
        </h1>
        <div className="detail-info">

          <Link to={"/?user=" + post.username} className="link">
            <span className="detail-auther">
              Author: <b>{post.username}</b>
            </span>

          </Link>
          <span className="detail-date">
            <b>Date:</b> {post.createdAt}
          </span>
        </div>
        <p className="detail-text">
          {post.description}
        </p>
      </div>

    </div>
  );
};
