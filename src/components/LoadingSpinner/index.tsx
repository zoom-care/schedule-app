import React from 'react'
import style from './style.module.scss'

const LoadingSpinner = function (): React.ReactElement {
  return (
    <div className={style.container}>
      <i className="fa-solid fa-circle-notch"></i>
    </div>
  )
}

export default LoadingSpinner
