import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import style from 'pages/user/MyInfo.scss'
import iconUser from 'assets/icons/icon-user.png'
import { getProfileAPI } from 'api/http.js'
import iconTagProfile from 'assets/icons/icon-tag-profile.png'
import ErrorPopup from 'components/ErrorPopup.js'

const cx = classNames.bind(style)

const MyInfo = () => {
  const [error, setError] = useState(null)
  const [user, setUser] = useState({
    email: '',
    username: '',
    phone: '',
  })

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getProfileAPI()
        setUser(res.data)
      } catch (error) {
        setError(error)
      }
    })()
  }, [])

  return (
    <div className={cx('MyInfo')}>
      {error ? <ErrorPopup error={error} /> : null}
      <div className={cx('MyInfo-wrapper')}>
        <div className={cx('MyInfo-title')}>
          <img src={iconTagProfile} alt="icon-tag-profile" />
          <img src={iconUser} alt="icon-user" />
          <p>안녕하세요. {user.username} 님.</p>
          <p>회원님의 개인정보는 다음과 같아요.</p>
        </div>
        <div className={cx('MyInfo-contents')}>
          <div className={cx('MyInfo-profile')}>
            <div className={cx('MyInfo-content')}>
              <p className={cx('MyInfo-content-title')}>아이디</p>
              <p className={cx('MyInfo-content-des')}>{user.email}</p>
              <button className={cx('no-button')} disabled />
            </div>
            <div className={cx('MyInfo-content')}>
              <p className={cx('MyInfo-content-title')}>비밀번호</p>
              <button className={cx('MyInfo-content-button')}>변경하기</button>
            </div>
            <div className={cx('MyInfo-content')}>
              <p className={cx('MyInfo-content-title')}>닉네임</p>
              <p className={cx('MyInfo-content-des')}>{user.username}</p>
              <button className={cx('MyInfo-content-button')}>변경하기</button>
            </div>
            <div className={cx('MyInfo-content')}>
              <p className={cx('MyInfo-content-title')}>휴대전화</p>
              <p className={cx('MyInfo-content-des')}>{user.phone}</p>
              <button className={cx('MyInfo-content-button')}>변경하기</button>
            </div>
          </div>
          <div className={cx('MyInfo-premium')}>
            <div className={cx('MyInfo-content')}>
              <p className={cx('MyInfo-content-title')}>구매정보</p>
              <p className={cx('MyInfo-content-des')}>
                신한카드 4364-2007-****-****
              </p>
              <button className={cx('MyInfo-content-button')}>변경하기</button>
            </div>
            <div className={cx('MyInfo-content')}>
              <p className={cx('MyInfo-content-title')}>구매현황</p>
              <p className={cx('MyInfo-content-des')}>프리미엄 1회권</p>
              <button className={cx('MyInfo-content-button')}>해지하기</button>
            </div>
            <div className={cx('MyInfo-content')}>
              <p className={cx('MyInfo-content-title')}>결제일시</p>
              <p className={cx('MyInfo-content-des')}>2020-10-01</p>
              <button className={cx('no-button')} disabled />
            </div>
            <div className={cx('MyInfo-content')}>
              <p className={cx('MyInfo-content-title')}>회원탈퇴</p>
              <p className={cx('MyInfo-content-des')}>
                정말로 탈퇴하시게요? ㅠㅠ
              </p>
              <button className={cx('MyInfo-content-button')}>탈퇴하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyInfo
