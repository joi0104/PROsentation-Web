import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import style from 'pages/user/MyInfo.scss'
import Banner from 'elements/Banner.js'
import { getProfileAPI } from 'api/http.js'

const cx = classNames.bind(style)

const MyInfo = () => {
  const [user, setUser] = useState({
    email: '',
    username: '',
    phone: '',
  })
  useEffect(() => {
    ;(async () => {
      const res = await getProfileAPI()
      setUser(res.data)
    })()
  }, [])
  return (
    <div className={cx('MyInfo')}>
      <div className={cx('MyInfo-wrapper')}>
        <Banner>나의 정보</Banner>
        <div className={cx('MyInfo-contents')}>
          <div className={cx('MyInfo-profile')}>
            <div className={cx('MyInfo-content')}>
              <p className={cx('MyInfo-content-title')}>아이디</p>
              <p className={cx('MyInfo-content-des')}>{user.email}</p>
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
              <p className={cx('MyInfo-content-des')}>하나카드</p>
              <button className={cx('MyInfo-content-button')}>변경하기</button>
            </div>
            <div className={cx('MyInfo-content')}>
              <p className={cx('MyInfo-content-title')}>구매현황</p>
              <p className={cx('MyInfo-content-des')}>프리미엄 정기권</p>
              <button className={cx('MyInfo-content-button')}>해지하기</button>
            </div>
            <div className={cx('MyInfo-content')}>
              <p className={cx('MyInfo-content-title')}>결제일시</p>
              <p className={cx('MyInfo-content-des')}>abc</p>
            </div>
            <div className={cx('MyInfo-content')}>
              <p className={cx('MyInfo-content-title')}>회원탈퇴</p>
              <p className={cx('MyInfo-content-des')}>그런건 없습니다</p>
              <button className={cx('MyInfo-content-button')}>탈퇴하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyInfo
