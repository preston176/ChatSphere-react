import { Link } from 'react-router-dom';
import styled from 'styled-components'
const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form")
  }
const handleChange = (e) => {
  
}

  return (
    <FormContainer>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="brand">
          <img src="" alt="logo" />
          <h1>ChatSphere</h1>
        </div>
        <input type="text" placeholder='Username' name='username' onChange={e => handleChange(e)} />
        <input type="email" placeholder='Email' name='email' onChange={e => handleChange(e)} />
        <input type="password" placeholder='Password' name='password' onChange={e => handleChange(e)} />
        <input type="password" placeholder='Confirm password' name='confirmPassword' onChange={e => handleChange(e)} />
        <button type='submit'>Create User</button>
        <Link to="/login"><span>already have an account ?</span></Link>
      </form>
    </FormContainer>
  )
}

const FormContainer = styled.div``;

export default Register
