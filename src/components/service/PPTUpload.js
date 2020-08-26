import React, { useRef, useState } from "react";
import WebViewer from "@pdftron/webviewer";
import classNames from "classnames/bind";

import style from "components/service/PPTUpload.scss";

const cx = classNames.bind(style);

const PPTUpload = ({ setIsPPTUpload }) => {
  const viewer = useRef(null);
  const [uploadOK, setUploadOK] = useState(false);

  function handleUpload() {
    WebViewer(
      {
        path: "/lib",
        initialDoc:
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      },
      viewer.current
    ).then((instance) => {
      const input = document.getElementById("file_upload");
      const file = input.files[0];
      try {
        instance.loadDocument(file, { filename: file.name });
      } catch {
        handleError(Error("다른 파일을 업로드해주세요."));
      }
      handleSuccess(instance);
    });
  }

  function handleSuccess(instance) {
    instance.disableFeatures([
      "Measurement",
      "Annotations",
      "Ribbons",
      "Download",
      "FilePicker",
      "LocalStorage",
      "NotesPanel",
      "Print",
      "Redaction",
      "TextSelection",
      "TouchScrollLock",
      "Copy",
      "MultipleViewerMerging",
      "ThumbnailMerging",
      "ThumbnailReordering",
      "PageNavigation",
      "MouseWheelZoom",
    ]);
    instance.disableElements([
      "header",
      "leftPanel",
      "searchPanel",
      "viewControlsOverlay",
      "menuOverlay",
      "pageNavOverlay",
      "toolsOverlay",
      "searchOverlay",
      "annotationPopup",
      "annotationStylePopup",
      "toolStylePopup",
      "stylePopup",
      "textPopup",
      "contextMenuPopup",
      "signatureModal",
      "printModal",
      "loadingModal",
      "errorModal",
      "passwordModal",
    ]);
    setUploadOK(true);
    handleMsg("업로드 완료!");
  }

  function handleError(error) {
    handleMsg(error.message);
  }

  function handleMsg(msg) {
    const msgElement = document.querySelector("#msg");
    msgElement.innerHTML = `<p>${msg}</p>`;
  }

  function goNext() {
    if (uploadOK) {
      setIsPPTUpload(true);
    } else {
      alert("발표자료를 업로드 해주세요!");
    }
  }

  return (
    <div className={cx("PPTUpload")}>
      <input
        type="file"
        id="file_upload"
        name="file_upload"
        accept=".pdf"
        onChange={handleUpload}
      />
      <div className="webviewer" ref={viewer} style={{ height: "30vh" }}></div>
      <p id="msg">발표자료를 업로드 해주세요.</p>
      <button onClick={goNext}>다음</button>
    </div>
  );
};

export default PPTUpload;
