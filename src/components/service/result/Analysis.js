import React, { useContext } from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Line, Pie } from 'react-chartjs-2'
import ReactWordcloud from 'react-wordcloud'

import style from './Analysis.scss'
import AmountContext from 'contexts/amount.js'
import Banner from 'elements/Banner.js'
import iconSpeed from 'assets/icons/icon-speed.png'
import iconAmount from 'assets/icons/icon-amount.png'
import iconPronunciation from 'assets/icons/icon-pronunciation.png'
import iconEmotion from 'assets/icons/icon-emotion.png'
import iconGesture from 'assets/icons/icon-gesture.png'
import iconTopic from 'assets/icons/icon-topic.png'
import iconDependency from 'assets/icons/icon-dependency.png'
import Button from 'elements/Button.js'
import Button2 from 'elements/Button2.js'
import pic1 from 'assets/images/1.png'
import pic2 from 'assets/images/2.png'
import pic3 from 'assets/images/3.png'
import Tmp from './Tmp.js'

const cx = classNames.bind(style)

const Analysis = ({ setMachingOK }) => {
  const { state } = useContext(AmountContext)
  const tmp = Tmp

  const amountData = {
    labels: Object.keys(state.amount),
    datasets: [
      {
        data: Object.values(state.amount),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  }

  const emotionData = {
    datasets: [
      {
        data: tmp.emotion.map((e) => e.confidence),
        backgroundColor: [
          'rgba(61, 217, 255, 0.4)',
          'rgba(58, 111, 242, 0.4)',
          'rgba(3, 198, 234, 0.4)',
          'rgba(84, 115, 222, 0.4)',
          'rgba(140, 170, 216, 0.4)',
          'rgba(135, 147, 255, 0.4)',
          'rgba(44, 177, 206, 0.4)',
          'rgba(3, 234, 206, 0.4)',
        ],
        borderColor: [
          'rgba(61, 217, 255, 1)',
          'rgba(58, 111, 242, 1)',
          'rgba(3, 198, 234, 1)',
          'rgba(84, 115, 222, 1)',
          'rgba(140, 170, 216, 1)',
          'rgba(135, 147, 255, 1)',
          'rgba(44, 177, 206, 1)',
          'rgba(3, 234, 206, 0.4)',
        ],
        borderWidth: 1,
      },
    ],
    labels: ['행복', '화난', '근심', '놀람', '슬픔', '논박', '혼란', '침착'],
  }

  const wordCloudData = tmp.word_cloud.map((e) => {
    return { text: e.word, value: e.count }
  })

  return (
    <div className={cx('Analysis')}>
      <div className={cx('Analysis-wrapper')}>
        <Banner>나의 발표 분석 결과표</Banner>
        <div className={cx('features')}>
          <div className={cx('blank')} />
          <div className={cx('feature', 'speed')}>
            <img src={iconSpeed} alt="icon-speed" />
            <div className={cx('title-wrapper')}>
              <p className={cx('title')}>속도분석</p>
            </div>
            <div className={cx('graph')}>
              <p className={cx('graph-title')}>1분에 말한 어절 수</p>
              <p className={cx('data')}>{tmp.speed.rate} 어절</p>
              <p className={cx('graph-des')}>
                스피치 전문가가 설정한 최적의 말속도로 분석해드려요.
              </p>
            </div>
            <div className={cx('feedback')}>
              <p>- {tmp.speed.feedback}</p>
            </div>
          </div>
          <div className={cx('feature', 'time-amount')}>
            <img src={iconAmount} alt="icon-amount" />
            <div className={cx('title-wrapper')}>
              <p className={cx('title')}>분량분석</p>
            </div>
            <div className={cx('graph', 'time')}>
              <p className={cx('graph-title')}>총 발표 분량</p>
              <div className={cx('data-wrapper')}>
                <div className={cx('current')}>
                  <p className={cx('data')}>
                    {moment(state.totalAmount * 1000).format('mm:ss')}
                  </p>
                  <p className={cx('data-des')}>실제 발표 시간</p>
                </div>
                <div className={cx('goal')}>
                  <p className={cx('data')}>
                    {moment(state.time * 1000).format('mm:ss')}
                  </p>
                  <p className={cx('data-des')}>목표 발표 시간</p>
                </div>
              </div>
            </div>
            <div className={cx('graph', 'amount')}>
              <p className={cx('graph-title')}>각 페이지별 발표 분량</p>
              <Line
                data={amountData}
                options={{
                  legend: {
                    display: false,
                  },
                  scales: {
                    yAxes: [
                      {
                        display: false,
                      },
                    ],
                  },
                }}
              />
            </div>
          </div>
          <div className={cx('feature', 'pronunciation')}>
            <img src={iconPronunciation} alt="icon-pronunciation" />
            <div className={cx('title-wrapper')}>
              <p className={cx('title')}>발음분석</p>
            </div>
            <div className={cx('graph')}>
              <p className={cx('graph-title')}>발음의 정확도</p>
              <p className={cx('data')}>{tmp.pronunciation.rate}%</p>
              <progress
                className={cx('progress')}
                value={tmp.pronunciation.rate}
                max={100}
              />
              <p className={cx('graph-des')}>
                정확도가 좋지 않았던 부분은 아래에서 말씀드릴게요.
              </p>
            </div>
            <div className={cx('feedback')}>
              {tmp.pronunciation.low.map((e) => (
                <p>
                  - {moment(e.time * 1000).format('mm분ss초')}: {e.forword}
                  <span> {e.word} </span>
                  {e.backword}
                </p>
              ))}
            </div>
          </div>
          <div className={cx('blank')} />
          <div className={cx('feature', 'emotion')}>
            <img src={iconEmotion} alt="icon-emotion" />
            <div className={cx('title-wrapper')}>
              <p className={cx('title')}>표정분석</p>
            </div>
            <div className={cx('graph')}>
              <p className={cx('graph-title')}>표정 감정 비율</p>
              <Pie
                data={emotionData}
                height={300}
                options={{
                  legend: {
                    labels: {
                      boxWidth: 20,
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className={cx('feature', 'pose')}>
            <img src={iconGesture} alt="icon-gesture" />
            <div className={cx('title-wrapper')}>
              <p className={cx('title')}>자세 분석</p>
            </div>
            <div className={cx('graph')}>
              <p className={cx('graph-title')}>바르지 않은 자세</p>
              <div className={cx('data-wrapper')}>
                <img src={pic1} alt="pic1" />
                <img src={pic2} alt="pic2" />
                <img src={pic3} alt="pic3" />
              </div>
            </div>
          </div>
          <div className={cx('feature', 'word-cloud')}>
            <img src={iconTopic} alt="icon-topic" />
            <div className={cx('title-wrapper')}>
              <p className={cx('title')}>주제추출</p>
            </div>
            <div className={cx('graph')}>
              <p className={cx('graph-title')}>최다 언급 단어</p>
              <ReactWordcloud words={wordCloudData} />
            </div>
            <div className={cx('feedback')}>
              <p>
                AI가 추출한 발표영상에서 많이 언급된 단어들은 위와 같아요.
                주제와 연관된 단어들이 많이 언급되는게 좋아요.
              </p>
            </div>
          </div>
          <div className={cx('feature', 'dependency')}>
            <img src={iconDependency} alt="icon-dependency" />
            <div className={cx('title-wrapper')}>
              <p className={cx('title')}>발표자료 의존도</p>
            </div>
            <div className={cx('graph')}>
              <p className={cx('graph-title')}>발표자료 의존도</p>
              <p className={cx('data')}>{tmp.dependency.rate}%</p>
              <progress
                className={cx('progress')}
                value={tmp.dependency.rate}
                max={100}
              />
              <p className={cx('graph-des')}>
                발표한 내용이 얼마나 발표자료를 의존했는지 측정해요.
              </p>
            </div>
            <div className={cx('feedback')}>
              <p>
                발표자료를 얼마나 의존해서 발표했는가를 수치로 표현해줘요.
                의존도 수치는 참고목적으로 활용 해주세요.
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
