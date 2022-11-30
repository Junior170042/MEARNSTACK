import { PostDetail } from "../../components/detail/PostDetail";
import { SideBar } from "../../components/sidebar/SideBar";
import "./single.css";

export const SinglePage = () => {
  return (
    <>
      <div className="single">
        <PostDetail />
        <SideBar />
      </div>
    </>
  );
};
