import React, { useState, useRef, useContext } from 'react'
import classNames from 'classnames/bind'
import axios from 'axios'

import styles from 'components/signin/SigninForm.scss'
import Input from 'elements/Input.js'
import { signinAPI } from 'api/http.js'
import UserContext from 'contexts/user.js'

const cx = classNames.bind(styles)

const SigninForm = ({ setHasCookie }) => {
  const { actions } = useContext(UserContext)
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const msgRef = useRef()

  const initForm = () => {
    setForm({
      email: '',
      password: '',
    })
  }

  const changeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      return
    }
    try {
      const res = await signinAPI(form)
      axios.defaults.headers.common['X-AUTH-TOKEN'] = res.data.token
      actions.setEmail(res.data.email)
      actions.setUsername(res.data.username)
      msgRef.current.style.visibility = 'hidden'
      initForm()
      setHasCookie(true)
    } catch {
      msgRef.current.style.visibility = 'visible'
    }
  }

  return (
    <form className={cx('SigninForm')} onSubmit={onSubmit}>
      <Input
        label="이메일"
        type="email"
        name="email"
        value={form.email}
        changeForm={changeForm}
      />
      <Input
        label="비밀번호"
        type="password"
        name="password"
        value={form.password}
        changeForm={changeForm}
      />
      <p className={cx('SigninForm-msg')} ref={msgRef}>
        이메일 또는 비밀번호가 올바르지 않습니다.
      </p>
      <button type="submit">로그인</button>
    </form>
  )
}

export default SigninForm
