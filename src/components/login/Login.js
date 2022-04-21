import { Form, Input, Button, Checkbox, Card, message } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setLoginEmpty, setLoginValues } from "../../actions/login";
import { setRememberMe } from "../../actions/rememberMe";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.login);

  const onFinish = (values) => {
    dispatch(setLoginValues(values));
    // dispatch(setRememberMe(values.remember));
  };

  useEffect(() => {
    if (data?.loginSuccess?.access_token) {
      message.success("Logged in");
      navigate("/home");
    } else if (data?.loginFailed?.status === 401) {
      message.error(`${data.loginFailed.message}`);
      navigate("/login");
      dispatch(setLoginEmpty());
    }
  }, [data]);

  // useEffect(() => {
  //   if (data?.loginSuccess?.access_token) {
  //     console.log("here");
  //     navigate("/login");
  //   }
  // }, []);

  const onFinishFailed = (errorInfo) => {};

  return (
    <>
      <div className="container">
        <Card style={{ width: 500, margin: "auto", marginTop: "150px" }}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Login;
