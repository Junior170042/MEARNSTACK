import { Home } from "./pages/home/Home";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Setting } from "./pages/setting/Setting";
import { SinglePage } from "./pages/single/SinglePage";
import { Write } from "./pages/write/Write";
import { TopBar } from "./components/topBar/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useCookies } from 'react-cookie';
import axios from "axios";
import { Context } from "./context/Context";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "./baseUrl";
function App() {

  const [cookies] = useCookies([]);
  const { user, dispatch } = useContext(Context);

  useEffect(() => {

    const verify = async () => {
      if (!cookies.jwt) {
        dispatch({ type: "LOGIN_FAILURE" });
      } else {
        const { data } = await axios.post(baseUrl + "/user/token", {}, { withCredentials: true })
        if (data.status) {
          dispatch({ type: "LOGIN_SUCCESS", payload: data.user })
        } else if (localStorage.getItem("token")) {
          const idUser = JSON.parse(localStorage.getItem("token")).split("/")[1];
          const { data } = await axios.get(baseUrl + `/user/${idUser}`);
          if (data) {
            dispatch({ type: "LOGIN_SUCCESS", payload: data.user })
          }
        } else {
          dispatch({ type: "LOGIN_FAILURE" });
        }
      }
    }

    verify();

  }, [cookies, dispatch])

  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/setting" element={user ? <Setting /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Login />} />
          <Route path="/single/:id" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
