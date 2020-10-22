import React, { useEffect, useRef, useContext } from 'react'
import classNames from 'classnames/bind'
import WebViewer from '@pdftron/webviewer'

import style from './PPTView.scss'
import UserContext from 'contexts/user.js'

const cx = classNames.bind(style)

const PPTView = () => {
  const { state } = useContext(UserContext)
  const PPT = state.PPT
  const viewerRef = useRef(null)

  useEffect(() => {
    ;(async () => {
      try {
        const instance = await WebViewer(
          {
            path: '/lib',
            initialDoc: null,
          },
          viewerRef.current
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

  return <div className={cx('PPTView')} ref={viewerRef} />
}

export default PPTView
