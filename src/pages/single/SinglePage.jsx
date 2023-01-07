
import { useParams } from "react-router-dom";
import { PostDetail } from "../../components/detail/PostDetail";
import { Footer } from "../../components/foter/Footer";
import { SideBar } from "../../components/sidebar/SideBar";
import "./single.css";

export const SinglePage = () => {
  const { id } = useParams();
  return (
    <>
      <div className="single">
        <h1>Post informations</h1>
        <PostDetail post_id={id} />
        <SideBar />
      </div>
      <Footer />
    </>
  );
};
