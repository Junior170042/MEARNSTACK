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
import Spinner from "../../loading/Spinner";


export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  const { search } = useLocation();
  const endPoint = baseUrl + '/post' + search
  useEffect(() => {
    setLoading(true);
    const getPost = async () => {
      try {
        const resp = await axios.get(endPoint, { sort: { timestamp: -1 } });
        setPosts(resp.data);
        setLoading(null)
      } catch (error) {
        setLoading(null)
        setError(true)
      }

    }
    getPost();

  }, [endPoint])

  return (
    <>
      <Header posts={posts} loading={loading} />
      <div className="home" >
        {

          loading && <div className="spinnerContent"><Spinner /></div>
        }
        <Post posts={posts} error={error} loading={loading} />
        <div className={!search ? "flex-side" : "home-side"}>
          {!loading && <SideBar posts={posts} />}
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
