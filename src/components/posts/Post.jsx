import { SinglePost } from "../single-post/SinglePost";
import "./post.css";

export const Post = ({ posts }) => {
  return (
    <>
      <div className="posts">
        {posts.map(p => <SinglePost key={p._id} post={p} />)}
      </div>
    </>
  );
};
