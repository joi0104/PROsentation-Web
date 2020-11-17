import React, { useContext } from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import style from './Analysis.scss'
import AmountContext from 'contexts/amount.js'
import Banner from 'elements/Banner.js'
import iconSpeed from 'assets/icons/icon-speed.png'
import iconAmount from 'assets/icons/icon-amount.png'
import iconPronunciation from 'assets/icons/icon-pronunciation.png'
import iconEmotion from 'assets/icons/icon-emotion.png'
import iconTopic from 'assets/icons/icon-topic.png'
import iconDependency from 'assets/icons/icon-dependency.png'
import Button from 'elements/Button.js'
import Button2 from 'elements/Button2.js'

const cx = classNames.bind(style)

const Analysis = ({ setMachingOK }) => {
  const { state } = useContext(AmountContext)
  return (
    <div className={cx('Analysis')}>
      <div className={cx('Analysis-wrapper')}>
        <Banner>나의 발표 분석 결과표</Banner>
        <div className={cx('features')}>
          <div className={cx('feature', 'speed')}>
            <img src={iconSpeed} alt="icon-speed" />
            <div className={cx('title-wrapper')}>
              <p className={cx('title')}>속도분석</p>
              <p className={cx('score')}>85점</p>
            </div>
            <div className={cx('graph')}></div>
            <div className={cx('feedback')}>
              <p>
                5페이지에서 음성 속도가 조금 빨라요. 너무 빠른 음성속도는
                전달력을 낮춰요.
              </p>
              <p>
                2페이지에서 음성 속도가 조금 느려요. 청중의 시선을 집중시키는
                부분이 맞는지 확인해볼까요?
              </p>
              <p>
                2페이지에서 음성 속도가 조금 느려요. 청중의 시선을 집중시키는
                부분이 맞는지 확인해볼까요?
              </p>
            </div>
          </div>
          <div className={cx('feature', 'amount')}>
            <img src={iconAmount} alt="icon-amount" />
            <div className={cx('title-wrapper')}>
              <p className={cx('title')}>분량분석</p>
              <p className={cx('score')}>85점</p>
            </div>
            <div className={cx('graph')}></div>
            <div className={cx('feedback')}>
              <p>
                5페이지에서 음성 속도가 조금 빨라요. 너무 빠른 음성속도는
                전달력을 낮춰요.
              </p>
              <p>
                2페이지에서 음성 속도가 조금 느려요. 청중의 시선을 집중시키는
                부분이 맞는지 확인해볼까요?
              </p>
              <p>
                2페이지에서 음성 속도가 조금 느려요. 청중의 시선을 집중시키는
                부분이 맞는지 확인해볼까요?
              </p>
            </div>
          </div>
          <div className={cx('feature', 'pronunciation')}>
            <img src={iconPronunciation} alt="icon-pronunciation" />
            <div className={cx('title-wrapper')}>
              <p className={cx('title')}>발음분석</p>
              <p className={cx('score')}>85점</p>
            </div>
            <div className={cx('graph')}></div>
            <div className={cx('feedback')}>
              <p>
                5페이지에서 음성 속도가 조금 빨라요. 너무 빠른 음성속도는
                전달력을 낮춰요.
              </p>
              <p>
                2페이지에서 음성 속도가 조금 느려요. 청중의 시선을 집중시키는
                부분이 맞는지 확인해볼까요?
              </p>
              <p>
                2페이지에서 음성 속도가 조금 느려요. 청중의 시선을 집중시키는
                부분이 맞는지 확인해볼까요?
              </p>
            </div>
          </div>
          <div className={cx('feature', 'emotion')}>
            <img src={iconEmotion} alt="icon-emotion" />
            <div className={cx('title-wrapper')}>
              <p className={cx('title')}>표정분석</p>
              <p className={cx('score')}>85점</p>
            </div>
            <div className={cx('graph')}></div>
            <div className={cx('feedback')}>
              <p>
                5페이지에서 음성 속도가 조금 빨라요. 너무 빠른 음성속도는
                전달력을 낮춰요.
              </p>
              <p>
                2페이지에서 음성 속도가 조금 느려요. 청중의 시선을 집중시키는
                부분이 맞는지 확인해볼까요?
              </p>
              <p>
                2페이지에서 음성 속도가 조금 느려요. 청중의 시선을 집중시키는
                부분이 맞는지 확인해볼까요?
              </p>
            </div>
          </div>
          <div className={cx('feature', 'topic')}>
            <img src={iconTopic} alt="icon-topic" />
            <div className={cx('title-wrapper')}>
              <p className={cx('title')}>주제추출</p>
              <p className={cx('score')}>85점</p>
            </div>
            <div className={cx('graph')}></div>
            <div className={cx('feedback')}>
              <p>
                5페이지에서 음성 속도가 조금 빨라요. 너무 빠른 음성속도는
                전달력을 낮춰요.
              </p>
              <p>
                2페이지에서 음성 속도가 조금 느려요. 청중의 시선을 집중시키는
                부분이 맞는지 확인해볼까요?
              </p>
              <p>
                2페이지에서 음성 속도가 조금 느려요. 청중의 시선을 집중시키는
                부분이 맞는지 확인해볼까요?
              </p>
            </div>
          </div>
          <div className={cx('feature', 'dependency')}>
            <img src={iconDependency} alt="icon-dependency" />
            <div className={cx('title-wrapper')}>
              <p className={cx('title')}>발표자료 의존도</p>
              <p className={cx('score')}>85점</p>
            </div>
            <div className={cx('graph')}></div>
            <div className={cx('feedback')}>
              <p>
                5페이지에서 음성 속도가 조금 빨라요. 너무 빠른 음성속도는
                전달력을 낮춰요.
              </p>
              <p>
                2페이지에서 음성 속도가 조금 느려요. 청중의 시선을 집중시키는
                부분이 맞는지 확인해볼까요?
              </p>
              <p>
                2페이지에서 음성 속도가 조금 느려요. 청중의 시선을 집중시키는
                부분이 맞는지 확인해볼까요?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('buttons')}>
        <Link className={cx('go-to')} to="/">
          <Button2>메인으로 돌아가기</Button2>
        </Link>
        <Button
          onClick={() => {
            setMachingOK(true)
          }}
        >
          전문가에게 피드백 받기
        </Button>
      </div>
    </div>
  )
}

export default Analysis
