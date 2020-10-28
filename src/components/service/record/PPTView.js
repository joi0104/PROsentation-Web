import React, { useEffect, useRef, useContext } from 'react'
import classNames from 'classnames/bind'
import WebViewer from '@pdftron/webviewer'

import style from './PPTView.scss'
import UserContext from 'contexts/user.js'
import AmountContext from 'contexts/amount.js'

const cx = classNames.bind(style)

var runClock = null
let instance = null
let counter = 0

const PPTView = ({ recordingON, recordingOK }) => {
  const { state } = useContext(UserContext)
  const { actions } = useContext(AmountContext)
  const PPT = state.PPT
  const addAmount = actions.addAmount
  const addLastAmount = actions.addLastAmount
  const viewerRef = useRef()

  useEffect(() => {
    if (instance) {
      instance.docViewer.on('pageComplete', (pageNumber, canvas) => {
        if (recordingON) {
          addAmount(pageNumber - 1, counter)
        }
        counter = 0
      })
    }

    if (recordingOK) {
      addLastAmount(counter)
    }
  }, [recordingON, recordingOK])

  useEffect(() => {
    if (recordingON) {
      runClock = setInterval(() => {
        counter++
      }, 1000)
    } else {
      if (runClock) {
        clearInterval(runClock)
      }
      counter = 0
    }
  }, [recordingON])

  useEffect(() => {
    ;(async () => {
      try {
        instance = await WebViewer(
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
          'PageNavigation',
          'ThumbnailReordering',
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
  }, [])

  return <div className={cx('PPTView')} ref={viewerRef} />
}

export default PPTView
