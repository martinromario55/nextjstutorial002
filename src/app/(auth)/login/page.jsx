import { handleGithubLogin, login } from '@/lib/action'
import React from 'react'

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with GitHub</button>
      </form>

      <form action={login}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
