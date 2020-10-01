import React, { useRef, useState } from 'react'
import classNames from 'classnames/bind'

import style from 'elements/Input.scss'

const cx = classNames.bind(style)

const Input = ({ label, name, type, value, changeForm }) => {
  const inputRef = useRef()
  const msgRef = useRef()
  const [validCheck, setVaildCheck] = useState(true)

  const invalidMsg = {
    email: '이메일 형식이 올바르지 않습니다.',
    password: '비밀번호는 8~20자 이내로 입력해주세요.',
    passwordCheck: '동일한 비밀번호를 입력해주세요.',
  }

  const onChange = (e) => {
    if (e.target.validity.valid) {
      msgRef.current.style.visibility = 'hidden'
    } else {
      msgRef.current.style.visibility = 'visible'
    }
    changeForm(e)
  }

  return (
    <div className={cx('Input')}>
      <label>{label}</label>
      <input
        required
        ref={inputRef}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <p ref={msgRef}> {invalidMsg[name]} </p>
    </div>
  )
}

export default Input
