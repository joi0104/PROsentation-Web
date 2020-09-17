import React, { useRef, useState } from 'react'
import WebViewer from '@pdftron/webviewer'
import classNames from 'classnames/bind'

import style from './PPTUpload.scss'

const cx = classNames.bind(style)

const PPTUpload = ({ setPPTUploadOK }) => {
  const viewer = useRef()
  const [uploadOK, setUploadOK] = useState(false)

  const handleUpload = () => {
    WebViewer(
      {
        path: '/lib',
        initialDoc:
          'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
      viewer.current
    ).then((instance) => {
      try {
        const file = document.getElementById('file_upload').files[0]
        instance.loadDocument(file, { filename: file.name })
      } catch {
        handleError(Error('다른 파일을 업로드해주세요.'))
      }
      handleSuccess(instance)
    })
  }

  const handleSuccess = (instance) => {
    instance.disableFeatures([
      'Measurement',
      'Annotations',
      'Ribbons',
      'Download',
      'FilePicker',
      'LocalStorage',
      'NotesPanel',
      'Print',
      'Redaction',
      'TextSelection',
      'TouchScrollLock',
      'Copy',
      'MultipleViewerMerging',
      'ThumbnailMerging',
      'ThumbnailReordering',
      'PageNavigation',
      'MouseWheelZoom',
    ])
    instance.disableElements([
      'header',
      'leftPanel',
      'searchPanel',
      'viewControlsOverlay',
      'menuOverlay',
      'pageNavOverlay',
      'toolsOverlay',
      'searchOverlay',
      'annotationPopup',
      'annotationStylePopup',
      'toolStylePopup',
      'stylePopup',
      'textPopup',
      'contextMenuPopup',
      'signatureModal',
      'printModal',
      'loadingModal',
      'errorModal',
      'passwordModal',
    ])
    setUploadOK(true)
  }

  const handleError = (error) => {
    alert(error.message)
  }

  const goNext = () => {
    if (uploadOK) {
      setPPTUploadOK(true)
    } else {
      alert('발표자료를 업로드 해주세요!')
    }
  }

  return (
    <div className={cx('PPTUpload')}>
      <input
        type="file"
        id="file_upload"
        name="file_upload"
        accept=".pdf"
        onChange={handleUpload}
      />
      <div className="webviewer" ref={viewer} style={{ height: '30vh' }}></div>
      <p>{uploadOK ? '업로드 완료!' : '업로드 필요!'}</p>
      <button onClick={goNext}>다음</button>
    </div>
  )
}

export default PPTUpload
