import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>

      <form>
        <h1>Login</h1>
        <input required type="text" placeholder='username' />
        <input required type="password" placeholder='password' />
        <button>Login</button>
        <p>error message</p>
        <span>Don't you have an account <Link to="/register">Register</Link></span>
      </form>

    </div>
  )
}

export default Login