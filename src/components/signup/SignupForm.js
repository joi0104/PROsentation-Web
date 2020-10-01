import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { useHistory } from 'react-router-dom'

import style from 'components/signup/SignupForm.scss'
import Input from 'elements/Input.js'
import { signupAPI } from 'api/http.js'

const cx = classNames.bind(style)

const SignupForm = () => {
  const [coincideCheck, setCoincideCheck] = useState(false)

  const [form, setForm] = useState({
    email: '',
    password: '',
    phone: '',
    username: '',
  })

  let history = useHistory()

  const initForm = () => {
    setForm({
      email: '',
      password: '',
      phone: '',
      username: '',
    })
  }

  const changeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const changePasswordCheck = (e) => {
    if (e.target.value === form.password) {
      setCoincideCheck(true)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (
      !form.email ||
      !form.password ||
      !form.phone ||
      !form.username ||
      !coincideCheck
    ) {
      return
    }
    try {
      await signupAPI(form)
      initForm()
      history.goBack()
    } catch {
      alert('회원가입에 실패하였습니다.')
    }
  }

  return (
    <form className={cx('SigninForm')} onSubmit={onSubmit}>
      <Input
        label={'이메일'}
        type={'email'}
        name={'email'}
        value={form.email}
        changeForm={changeForm}
      />
      <Input
        label={'비밀번호'}
        type={'password'}
        name={'password'}
        value={form.password}
        changeForm={changeForm}
      />
      <Input
        label={'비밀번호 확인'}
        type={'password'}
        name={'passwordCheck'}
        changeForm={changePasswordCheck}
      />
      <Input
        label={'닉네임'}
        type={'text'}
        name={'username'}
        value={form.username}
        changeForm={changeForm}
      />
      <Input
        label={'휴대폰 번호'}
        type={'tel'}
        name={'phone'}
        value={form.phone}
        changeForm={changeForm}
      />
      <button type="submit">회원가입</button>
    </form>
  )
}

export default SignupForm
