
import { useParams } from "react-router-dom";
import { PostDetail } from "../../components/detail/PostDetail";
import { SideBar } from "../../components/sidebar/SideBar";
import "./single.css";

export const SinglePage = () => {
  const { id } = useParams();
  return (
    <>
      <div className="single">
        <PostDetail post_id={id} />
        <SideBar />
      </div>
    </>
  );
};
