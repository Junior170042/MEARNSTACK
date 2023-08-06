
import { useParams } from "react-router-dom";
import { PostDetail } from "../../components/detail/PostDetail";
import { Footer } from "../../components/foter/Footer";
import "./single.css";

export const SinglePage = () => {
  const { id } = useParams();
  return (
    <>
      <h1 className="singleText">Post informations</h1>
      <div className="single">
        <PostDetail post_id={id} />
      </div>
      <Footer />
    </>
  );
};
