import React from 'react'
import classNames from 'classnames/bind'

import style from './StartPreparation.scss'
import CheckItems from 'components/service/preparation/checkItems/CheckItems.js'

const cx = classNames.bind(style)

const StartPreparation = ({ setCheckItemsOK }) => {
  return (
    <div className={cx('StartPreparation')}>
      <p className={cx('description')}>
        이제부터 다음과 같이 발표를 위한 준비를 해보겠습니다.
      </p>
      <p className={cx('description')}>준비 시작하기 버튼을 눌러주세요.</p>

      <CheckItems pptUploadOK={false} micTestOK={false} camTestOK={false} />
      <button
        className={cx('button')}
        type="button"
        onClick={() => {
          setCheckItemsOK(true)
        }}
      >
        준비 시작하기
      </button>
    </div>
  )
}

export default StartPreparation
