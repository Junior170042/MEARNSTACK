import { SinglePost } from "../single-post/SinglePost";
import "./post.css";

export const Post = ({ posts, loading, error }) => {
  return (
    <>
      {(!loading && posts.length > 0) && <h1 className="head-titles">Latest posts</h1>}
      <div className={posts.length === 1 ? "singular" : "posts"}>
        {posts.map(p => <SinglePost key={p._id} post={p} />)}
      </div>

      {!loading && (error || posts.length === 0) && <div className="no-fetch"><h1>Sorry, We can not find any post in this moment! Try later.</h1></div>}
    </>
  );
};
