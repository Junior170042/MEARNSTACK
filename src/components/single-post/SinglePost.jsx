import "./singlePost.css";
import { Link } from "react-router-dom";
export const SinglePost = ({ post }) => {
  return (
    <>
      <div className="singlePost">
        <img
          src={post.photo ? post.photo : "https://www.optum.com/health-articles/sites/default/files/styles/article_feature/public/images/NatureHeals_1200x800_3.jpg?itok=S4cxcQHz"}
          alt="Post"
          className="postImage"
        />
        <div className="postInfo">
          <div className="categories">
            {
              post.categories.map(cat =>
                <span className="postCategory" key={post._id}>
                  {cat}
                </span>

              )
            }
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
