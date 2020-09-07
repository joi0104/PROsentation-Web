import React, { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";
import classNames from "classnames/bind";

import style from "components/service/RecodingPPT.scss";

const cx = classNames.bind(style);

const RecodingPPT = () => {
  const viewer = useRef(null);

  function handleUpload() {
    WebViewer(
      {
        path: "/lib",
        initialDoc:
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      },
      viewer.current
    ).then((instance) => {
      try {
        const file = document.getElementById("file_upload").files[0];
        instance.loadDocument(file, { filename: file.name });
      } catch {
        handleError(Error("다른 파일을 업로드해주세요."));
      }
      handleSuccess(instance);
    });
  }

  function handleError(error) {
    alert(error.message);
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
      // "pageNavOverlay",
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
  }
  return (
    <div className={cx("RecodingPPT")}>
      <input
        type="file"
        id="file_upload"
        name="file_upload"
        accept=".pdf"
        onChange={handleUpload}
      />
      <div className="webviewer" ref={viewer} style={{ height: "30vh" }}></div>
    </div>
  );
};

export default RecodingPPT;
