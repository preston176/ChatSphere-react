import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if whatever is input is true
    if(handleValidation()) {
      // destructure
      const { password, confirmPassword, username, email } = values;
      const { data } = await axios.post()
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

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error("Password should be same for both fields ...", toastOptions);
      return false
    } else if (username.length < 3) {
      toast.error("Username should be more than 3 characters ...", toastOptions);
      return false
    }
    else if (password.length < 6) {
      toast.error("Password should be more than 6 characters ...", toastOptions);
      return false
    } else if (email === "") {
      toast.error("Email is required", toastOptions)
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
          <input type="text" placeholder='Username' name='username' onChange={e => handleChange(e)} />
          <input type="email" placeholder='Email' name='email' onChange={e => handleChange(e)} />
          <input type="password" placeholder='Password' name='password' onChange={e => handleChange(e)} />
          <input type="password" placeholder='Confirm password' name='confirmPassword' onChange={e => handleChange(e)} />
          <button type='submit'>Create Account</button>
          <Link to="/login"><span>Have an existing account?</span></Link>
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



export default Register
