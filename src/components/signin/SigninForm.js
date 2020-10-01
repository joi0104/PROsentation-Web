import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import styles from 'components/signin/SigninForm.scss'
import Input from 'elements/Input.js'
import { signinAPI } from 'api/http.js'
import Button1 from 'elements/Button1.js'

const cx = classNames.bind(styles)

const SigninForm = ({ setHasCookie }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
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
      alert('로그인에 성공하였습니다.')
      setHasCookie(true)
      initForm()
      history.goBack()
    } catch {
      alert('로그인에 실패하였습니다.')
      initForm()
      history.goBack()
    }
  }

  return (
    <div className={cx('SigninForm')} onSubmit={onSubmit}>
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
      <Button1 title="로그인" onClick={onSubmit} />
    </div>
  )
}

export default SigninForm
