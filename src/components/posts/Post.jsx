import { SinglePost } from "../single-post/SinglePost";
import "./post.css";

export const Post = ({ posts, loading }) => {
  return (
    <>
      {!loading && <h1 className="head-titles">Latest posts</h1>}
      <div className={posts.length === 1 ? "singular" : "posts"}>
        {posts.map(p => <SinglePost key={p._id} post={p} />)}
      </div>
    </>
  );
};
