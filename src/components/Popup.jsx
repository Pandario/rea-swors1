import React from 'react'
import '../assets/popup.css'

const Popup  = ({open, onClose}) => {
  if (!open) return null;
  return (
    <div className="popUp">
      <div className="close">
        <p className="closeBtn" onClick={onClose}>X</p>
      </div>
      <div className="submitBtn">
        <button className='submit'>
          <span>JOIN</span>
        </button>
      </div>
    </div>
  )
}

export default Popup