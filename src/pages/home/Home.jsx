import "./Home.css";
import { Header } from "../../components/header/Header";
import { Post } from "../../components/posts/Post";
import { SideBar } from "../../components/sidebar/SideBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import SideBarPost from "../../components/sidebarpost/SideBarPost";
import { Footer } from "../../components/foter/Footer";
import { baseUrl } from "../../baseUrl";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  console.log(baseUrl);
  useEffect(() => {
    const getPost = async () => {
      const resp = await axios.get(baseUrl + '/post' + search, { sort: { timestamp: -1 } });
      setPosts(resp.data);
    }
    getPost();

  }, [search])

  return (
    <>
      <Header posts={posts} />
      <div className="home" >
        <h1 className="head-titles">Our news later!</h1>
        <Post posts={posts} />
        <div className={!search ? "flex-side" : "home-side"}>
          <SideBar posts={posts} />

          {
            posts.length !== 1 &&
            <SideBarPost />
          }
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
};
