import { Button, PageHeader, Space } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { setLoginEmpty } from "../actions/login";
import { Home } from "../components/home/Home";
import Login from "../components/login/Login";
import Signup from "../components/signup/Signup";
import { getCookie } from "../cookieCreator";

const LoginSignupTemplate = () => {
  const location = useLocation();
  const loginType = location.pathname === "/login" ? "primary" : "secondary";
  const signupType = location.pathname === "/signup" ? "primary" : "secondary";

  const data = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(setLoginEmpty());

    navigate("/login");
  };

  useEffect(() => {
    if (!data?.loginSuccess) {
      navigate("/login");
    }
  }, [data]);

  useEffect(() => {
    if (!(getCookie("token") || data?.loginData?.access_token)) {
      console.log("hello");
      dispatch(setLoginEmpty());
      navigate("/login");
    }
  }, [getCookie("token")]);

  return (
    <>
      <PageHeader
        className="site-page-header"
        // onBack={() => null}
        title="Project Name"
        // subTitle="This is a subtitle"
        extra={[
          <div key={1}>
            <Space>
              {location.pathname !== "/login" &&
              location.pathname !== "/" &&
              location.pathname !== "/signup" ? (
                <Button key={4} onClick={logout} type={"primary"}>
                  <Link to="/login">logout</Link>
                </Button>
              ) : (
                <>
                  <Button key={2} type={loginType}>
                    {/* <Link to="/home">Login</Link> */}

                    <Link to="/login">Login</Link>
                  </Button>
                  <Button key={3} type={signupType}>
                    <Link to="/signup">SignUp</Link>
                  </Button>
                </>
              )}
            </Space>
          </div>,
        ]}
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default LoginSignupTemplate;
