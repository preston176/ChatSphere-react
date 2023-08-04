import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: false,
    draggable: true,
    theme: "light",
  };
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Please enter Email and Password...", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Please enter Email and Password...", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate("/");
      }
    }
  };

  return (
    <>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>chatsphere</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Log In</button>
          <span>
            Sign up <Link to="/register">Here</Link> if you don't have an account
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #111;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: #fff;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: .4rem;
      color: #fff;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #00d4ff;
        outline: none;
        box-shadow: 0px 1px 47px -3px rgba(0,212,255,0.75);
        transition: all 0.15s ease-in-out;
      }
      &:hover {
      
        border: 0.1rem solid #00d4ff;
        outline: none;
        box-shadow: 0px 1px 47px -3px rgba(0,212,255,0.75);
        transition: all 0.15s ease-in-out;
      }
    }
    button {
      background-color: rgba(0,212,255,0.75);
      color: #fff;
      padding: 1rem 2rem;
      border: none;
      font-weight: bolder;
      cursor: pointer;
      border-radius: .4rem;
      font-size: 1rem;
      text-transform: uppercase;
      &:hover{
       background-color: #00d9ff;
       color: #000;
       box-shadow: 0px 1px 47px -3px rgba(0,212,255,0.75);
       transition: all 0.15s ease-in-out;
      }
    }
    span {
      color: white;
      text-transform: uppercase;
      a {
        color: lightcyan;
        text-decoration: none;
        font-weight: bolder;
      }
    }
  }
`;
