import { Home } from "./pages/home/Home";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Setting } from "./pages/setting/Setting";
import { SinglePage } from "./pages/single/SinglePage";
import { Write } from "./pages/write/Write";
import { TopBar } from "./components/topBar/TopBar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { Context } from "./context/Context";
import "react-toastify/dist/ReactToastify.css";
import RoutesManage from "./routes/routesManage";
import { Admins } from "./pages/admin/admin";
import NotFound from "./pages/nopage/NotFound";
function App() {

  const [cookies] = useCookies();
  const { user, dispatch } = useContext(Context);
  useEffect(() => {
    const verify = async () => {
      if (cookies.isUser) {
        dispatch({ type: "LOGIN_SUCCESS", payload: cookies.isUser })
      } else {
        dispatch({ type: "LOGOUT" });

      }
    }

    verify();

  }, [cookies.isUser, dispatch])

  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
          <Route path="/single/:id" element={<SinglePage />} />

          <Route element={<RoutesManage isAllowed={!!user} />}>
            {/* { any authenticated user can access this routes} */}
            <Route path="/setting" element={<Setting />} />
            <Route path="/write" element={<Write />} />
          </Route>

          {/* { only authenticated user with admin roles can access this route} */}
          <Route path="/admin" element={
            <RoutesManage isAllowed={!!(user && user.roles === "admin")}
              destination="/"
            >
              <Admins />
            </RoutesManage>}
          />



          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
