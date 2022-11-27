import { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

async function getUserData(login: string, password: string) {
  const [user, setUser] = useState({});

  return await fetch(
    "http://localhost:8888/profile" +
      new URLSearchParams({
        login,
        password,
      })
  )
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
}

function validateLogin(params: object):void {
  console.log(params);
}

function Login() {

  const [login, password] = ["", ""];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login">Login</label>
        <input type="text" id="login" placeholder="Login" ref="login" />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" placeholder="password" ref="password" />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default Login;
