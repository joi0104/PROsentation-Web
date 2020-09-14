import React, { useEffect, useRef } from "react"
import classNames from "classnames/bind"

import style from "./RecodingVideo.scss"

const cx = classNames.bind(style)

const RecodingVideo = () => {
  let mediaRecorder
  let recordedBlobs

  const gumVideo = useRef()
  const recordedVideo = useRef()
  const recordButton = useRef()
  const playButton = useRef()
  const downloadButton = useRef()

  const constraints = {
    audio: true,
    video: true,
  }

  const onRecord = () => {
    if (recordButton.current.textContent === "Start Recording") {
      console.log("start recoding")
      startRecording()
    } else {
      console.log("stop recoding")
      stopRecording()
      recordButton.current.textContent = "Start Recording"
      playButton.current.disabled = false
      downloadButton.current.disabled = false
    }
  }

  const onPlay = () => {
    console.log("onPlay")
    const superBuffer = new Blob(recordedBlobs, { type: "video/webm" })
    recordedVideo.current.src = null
    recordedVideo.current.srcObject = null
    recordedVideo.current.src = window.URL.createObjectURL(superBuffer)
    recordedVideo.current.controls = true
    recordedVideo.current.play()
  };

  const onDownload = () => {
    const blob = new Blob(recordedBlobs, { type: "video/webm" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.style.display = "none"
    a.href = url
    a.download = "test.webm"
    document.body.appendChild(a)
    a.click()
    setTimeout(() => {
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    }, 100)
  }

  const handleDataAvailable = (e) => {
    console.log("handleDataAvailable", e)
    if (e.data && e.data.size > 0) {
      recordedBlobs.push(e.data)
    }
  }

  const startRecording = () => {
    recordedBlobs = []
    let options = { mimeType: "video/webm;codecs=vp9,opus" }
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      console.error(`${options.mimeType} is not supported`)
      options = { mimeType: "video/webm;codecs=vp8,opus" }
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.error(`${options.mimeType} is not supported`)
        options = { mimeType: "video/webm" }
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
          console.error(`${options.mimeType} is not supported`)
          options = { mimeType: "" }
        }
      }
    }

    try {
      mediaRecorder = new MediaRecorder(window.stream, options)
    } catch (e) {
      console.error("Exception while creating MediaRecorder:", e)
      return
    }

    console.log(
      "Created MediaRecorder",
      mediaRecorder,
      "with options",
      options
    )
    recordButton.current.textContent = "Stop Recording"
    playButton.current.disabled = true
    downloadButton.current.disabled = true
    mediaRecorder.onstop = (event) => {
      console.log("Recorder stopped: ", event)
      console.log("Recorded Blobs: ", recordedBlobs)
    }
    mediaRecorder.ondataavailable = handleDataAvailable
    mediaRecorder.start()
    console.log("MediaRecorder started", mediaRecorder)
  }

  const stopRecording = () => {
    mediaRecorder.stop()
  }

  const handleSuccess = (stream) => {
    recordButton.current.disabled = false
    console.log("getUserMedia() got stream:", stream)
    window.stream = stream
    gumVideo.current.srcObject = stream
  }

  useEffect(() => {
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        handleSuccess(stream)
      } catch (e) {
        console.error("navigator.getUserMedia error:", e)
      }
    })()
  })

  return (
    <div className={cx("RecodingVideo")}>
      <video ref={gumVideo} playsInline autoPlay></video>
      <p>asdadas</p>
      <video ref={recordedVideo} playsInline></video>
      <div>
        <button ref={recordButton} onClick={onRecord} value={""}>
          Start Recording
        </button>
        <button ref={playButton} onClick={onPlay}>
          Play
        </button>
        <button ref={downloadButton} onClick={onDownload}>
          Download
        </button>
      </div>
    </div>
  )
}

export default RecodingVideo
