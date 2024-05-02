import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import restClient from "restClient";
import wave from "assets/wave.svg";

import Form from "components/login/Form";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data: response } = await restClient({
        method: "POST",
        url: "/auth/login",
        data: {
          email,
          password,
        },
      });

      if ((response.status = "success")) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        navigate("/select-organization");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/select-organization");
  }, []);

  return (
    <>
      <Form {...{ email, password, setEmail, setPassword, onSubmitHandler }} />
      <img src={wave} alt="" />
    </>
  );
}

export default Login;
