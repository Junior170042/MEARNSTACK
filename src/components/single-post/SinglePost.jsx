import "./singlePost.css";
import { Link } from "react-router-dom";
export const SinglePost = ({ post }) => {

  const path = "https://blogappbackend-zutg.onrender.com/images/";
  return (
    <>

      <div className="singlePost">

        <img
          src={post.photo ? path + post.photo : path + "placeholder.png"}
          loading="lazy"
          alt="Post"
          className="postImage"
        />
        <div className="postInfo">
          <div className="categories">


            <span className="postCategory">
              {post.categories[0]}
            </span>



          </div>

          <Link to={`/single/${post._id}`} className="link">
            <span className="postTitle">{post.title}</span>
          </Link>
          <hr />
          <span className="postDate"> {new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDescription">
          {post.description}
        </p>
      </div>

    </>
  );
};
