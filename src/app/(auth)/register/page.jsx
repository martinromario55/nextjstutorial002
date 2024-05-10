import { register } from '@/lib/action'
import React from 'react'
import styles from './register.module.css'

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={register} className={styles.form}>
          <input type="text" placeholder="username" name="username" />
          <input type="email" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <input
            type="password"
            placeholder="Confirm password"
            name="passwordRepeat"
          />
          <button type="submit">Register</button>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
          <p>
            Or <a href="/">Go Back</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
