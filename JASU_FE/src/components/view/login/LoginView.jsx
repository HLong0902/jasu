import React from 'react'
import './login.scss'
export default function LoginView() {
  return (
    <div>
      <div className="login">
        <header className="login__header">
          <h2><svg className="icon">
            <use href="#icon-lock" />
          </svg>Đăng nhập</h2>
        </header>
        <form action="#" className="login__form" method="POST">
          <div>
            <label htmlFor="email">E-mail address</label>
            <input type="email" id="email" name="email" placeholder="mail@address.com" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="password" />
          </div>
          <div>
            <input className="button" type="submit" value="Sign In" />
          </div>
        </form>
      </div>
    </div>
  )
}