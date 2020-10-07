import React, { useEffect, useRef } from 'react'
import classNames from 'classnames/bind'
import WebViewer from '@pdftron/webviewer'

import style from './PPTView.scss'

const cx = classNames.bind(style)

const PPTView = ({ PPT }) => {
  const viewer = useRef(null)

  useEffect(() => {
    ;(async () => {
      try {
        const instance = await WebViewer(
          {
            path: '/lib',
            initialDoc: null,
          },
          viewer.current
        )
        instance.loadDocument(PPT, { filename: PPT.filename })
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
      } catch (err) {
        console.log(err)
      }
    })()
  }, [PPT])

  return (
    <div className={cx('PPTView')}>
      <div className="webviewer" ref={viewer} style={{ height: '30vh' }} />
    </div>
  )
}

export default PPTView
