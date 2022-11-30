import "./Home.css";
import { Header } from "../../components/header/Header";
import { Post } from "../../components/posts/Post";
import { SideBar } from "../../components/sidebar/SideBar";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <SideBar />
      </div>
    </>
  );
};
