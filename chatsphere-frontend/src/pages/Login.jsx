import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { loginRoute } from '../utils/APIRoutes';

const Login = () => {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if whatever is input is true
    if (handleValidation()) {
      // console.log("in validation", registerRoute)
      // destructure
      const { password, username } = values;
      const { data } = await axios.post(loginRoute, {
        username, password
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions)
      }
      if (data.status === true) {
        localStorage.setItem('chat-app-user', JSON.stringify(data.user))
        navigate('/');
      }

    }

  };
  // toast options declared for reusability
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: false,
    draggable: true,
    theme: "light",
  }
  useEffect(() => {
    if(localStorage.getItem('chat-app-user')) {
      navigate('/')
    }
  },[])

  const handleValidation = () => {
    const { password, username, } = values;
    if (password === "") {
      toast.error("Email and Password is required ...", toastOptions);
      return false
    } else if (username.length === "") {
      toast.error("Email and Password is required ...", toastOptions);
      return false
    }

    // returns true if conditions satisfied
    return true
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })

  }

  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <img src="https://visualpharm.com/assets/952/Weixing-595b40b85ba036ed117da5e9.svg" alt="logo" />
            <h1>ChatSphere</h1>
          </div>
          <input type="text" placeholder='Username' name='username' onChange={e => handleChange(e)}
            min="3" />

          <input type="password" placeholder='Password' name='password' onChange={e => handleChange(e)} />

          <button type='submit'>Login</button>
          <Link to="/register"><span>Don't have an account?</span></Link>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  )
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
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
        color: #fafafa;
        text-decoration: none;
        font-weight: bolder;
      }
    }
  }
`;



export default Login;
