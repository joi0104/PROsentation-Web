import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'

import style from './RecordingVideo.scss'
import Popup from 'components/service/recording/Popup'
import Button from 'elements/Button.js'
import Stopwatch from 'components/service/recording/Stopwatch.js'

const cx = classNames.bind(style)

let mediaRecorder
let recordedBlobs

const RecordingVideo = ({
  recordingON,
  setRecordingON,
  setRecordingOK,
  serviceId,
  setVideo,
}) => {
  const gumVideo = useRef()
  const [popup, setPopup] = useState(false)

  const constraints = {
    audio: true,
    video: true,
  }

  const onRecord = async () => {
    if (!recordingON) {
      await startRecording()
      await setRecordingON(true)
    } else {
      await stopRecording()
      await setRecordingON(false)
      setPopup(true)
    }
  }

  const startRecording = () => {
    recordedBlobs = []
    let options = { mimeType: 'video/webm;codecs=vp9,opus' }
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      console.error(`${options.mimeType} is not supported`)
      options = { mimeType: 'video/webm;codecs=vp8,opus' }
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.error(`${options.mimeType} is not supported`)
        options = { mimeType: 'video/webm' }
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
          console.error(`${options.mimeType} is not supported`)
          options = { mimeType: '' }
        }
      }
    }

    try {
      mediaRecorder = new MediaRecorder(window.stream, options)
    } catch (e) {
      console.error('Exception while creating MediaRecorder:', e)
      return
    }

    console.log('Created MediaRecorder', mediaRecorder, 'with options', options)
    mediaRecorder.onstop = (event) => {
      console.log('Recorder stopped: ', event)
      console.log('Recorded Blobs: ', recordedBlobs)
    }
    mediaRecorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        recordedBlobs.push(e.data)
      }
    }
    mediaRecorder.start()
    console.log('MediaRecorder started', mediaRecorder)
  }

  const stopRecording = () => {
    mediaRecorder.stop()
  }

  useEffect(() => {
    ;(async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        window.stream = stream
        gumVideo.current.srcObject = stream
      } catch (err) {
        console.log(err)
      }
    })()
  })

  return (
    <div className={cx('RecordingVideo')}>
      <video ref={gumVideo} playsInline autoPlay />
      <Stopwatch state={recordingON} />
      {recordingON ? (
        <Button onClick={onRecord}>발표 완료하기</Button>
      ) : (
        <Button onClick={onRecord}>발표 시작하기</Button>
      )}
      {popup ? (
        <Popup
          recordedBlobs={recordedBlobs}
          setRecordingOK={setRecordingOK}
          setPopup={setPopup}
        />
      ) : null}
    </div>
  )
}

export default RecordingVideo
