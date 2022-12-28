import { SinglePost } from "../single-post/SinglePost";
import "./post.css";

export const Post = ({ posts }) => {
  return (
    <>
      <div className={posts.length === 1 ? "singular" : "posts"}>
        {posts.map(p => <SinglePost key={p._id} post={p} />)}
      </div>
    </>
  );
};
