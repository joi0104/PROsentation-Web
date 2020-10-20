import React, { useState, useRef } from 'react'
import classNames from 'classnames/bind'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import styles from 'components/signin/SigninForm.scss'
import Input from 'elements/Input.js'
import { signinAPI } from 'api/http.js'

const cx = classNames.bind(styles)

const SigninForm = ({ setHasCookie }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const msgRef = useRef()
  let history = useHistory()

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
      let res = await signinAPI(form)
      axios.defaults.headers.common['X-AUTH-TOKEN'] = res.data.token
      msgRef.current.style.visibility = 'hidden'
      initForm()
      history.goBack()
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
