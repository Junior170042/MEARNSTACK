import { SinglePost } from "../single-post/SinglePost";
import "./post.css";

export const Post = () => {
  return (
    <>
      <div className="posts">
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
    </>
  );
};
