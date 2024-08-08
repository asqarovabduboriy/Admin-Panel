import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [loading, setLoading] = useState(false)

  const handleLogin = e => {
    e.preventDefault()
    let user = {username, password}
    setLoading(true)

    axios 
      .post('https://fakestoreapi.com/auth/login', user) 
      .then(res => {
        console.log(res.data)
        toast.success("welcome")
        localStorage.setItem("x-auth-token", res.data.token)
        navigate("/admin/create")
      })
      .catch(err => {
        console.log(err);
        toast.error("username or password is incorrect")
      })
      .finally(() => setLoading(false))
  }

  return (
    <div  className="login">
      <form onSubmit={handleLogin} action="" className="form_login">
      <h2>Login</h2>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name=""
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name=""
        />
        <button disabled={loading}>{loading ? "Loading..." : "Log in"}</button>
      </form>
    </div>
  );
};

export default memo(Login);
