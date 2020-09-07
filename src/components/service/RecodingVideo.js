import React, { useEffect, useRef } from "react";
import classNames from "classnames/bind";

import style from "components/service/RecodingVideo.scss";

const cx = classNames.bind(style);

const RecodingVideo = () => {
  let mediaRecorder;
  let recordedBlobs;

  const recordButton = useRef();
  const playButton = useRef();
  const downloadButton = useRef();
  const recordedVideo = useRef();
  const gumVideo = useRef();

  const constraints = (window.constraints = {
    audio: false,
    video: true,
  });

  const onRecord = (e) => {
    if (recordButton.current.textContent === "녹화 시작") {
      startRecording();
    } else {
      stopRecording();
      recordButton.current.textContent = "녹화 시작";
      playButton.current.disabled = false;
      downloadButton.current.disabled = false;
    }
  };

  const onPlay = () => {
    const superBuffer = new Blob(recordedBlobs, { type: "video/webm" });
    recordedVideo.current.src = null;
    recordedVideo.current.srcObject = null;
    recordedVideo.current.src = window.URL.createObjectURL(superBuffer);
    recordedVideo.current.controls = true;
    recordedVideo.current.play();
  };

  const onDownload = () => {
    const blob = new Blob(recordedBlobs, { type: "video/webm" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "test.webm";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  };

  const handleDataAvailable = (e) => {
    console.log("handleDataAvailable", e);
    if (e.data && e.data.size > 0) {
      recordedBlobs.push(e.data);
    }
  };

  function startRecording() {
    recordedBlobs = [];
    let options = { mimeType: "video/webm;codecs=vp9,opus" };
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      console.error(`${options.mimeType} is not supported`);
      options = { mimeType: "video/webm;codecs=vp8,opus" };
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.error(`${options.mimeType} is not supported`);
        options = { mimeType: "video/webm" };
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
          console.error(`${options.mimeType} is not supported`);
          options = { mimeType: "" };
        }
      }
    }

    try {
      mediaRecorder = new MediaRecorder(window.stream, options);
    } catch (e) {
      console.error("Exception while creating MediaRecorder:", e);
      alert(`Exception while creating MediaRecorder: ${JSON.stringify(e)}`);
      return;
    }

    console.log(
      "Created MediaRecorder",
      mediaRecorder,
      "with options",
      options
    );

    recordButton.current.textContent = "녹화 중지";
    playButton.current.disabled = true;
    downloadButton.current.disabled = true;
    mediaRecorder.onstop = (event) => {
      console.log("Recorder stopped: ", event);
      console.log("Recorded Blobs: ", recordedBlobs);
    };

    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start();
    console.log("MediaRecorder started", mediaRecorder);
  }

  const stopRecording = () => {
    mediaRecorder.stop();
  };

  const handleSuccess = (stream) => {
    console.log("getUserMedia() got stream:", stream);
    window.stream = stream;
    gumVideo.current.srcObject = stream;
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        handleSuccess(stream);
      })
      .catch((e) => {
        console.error("navigator.getUserMedia error:", e);
        alert(`navigator.getUserMedia error:${e.toString()}`);
      });
  });

  return (
    <div className={cx("RecodingVideo")}>
      <video ref={gumVideo} playsInline autoPlay></video>
      <video ref={recordedVideo} playsInline></video>

      <div>
        <button ref={recordButton} onClick={onRecord}>
          Start Recording
        </button>
        <button ref={playButton} disabled onClick={onPlay}>
          Play
        </button>
        <button ref={downloadButton} disabled onClick={onDownload}>
          Download
        </button>
      </div>

      <div>
        <h4>Media Stream Constraints options</h4>
        <p>
          Echo cancellation: <input type="checkbox" id="echoCancellation" />{" "}
        </p>
      </div>
    </div>
  );
};

export default RecodingVideo;
