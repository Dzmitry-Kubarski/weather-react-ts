// core
import React, { FC } from 'react';

// icons
import NoDataSvg from './SVG/NoDataSvg';

// ts
interface AlertProps {
  message: string;
  onClose: () => void
}


const Alert: FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__background" onClick={onClose}></div>

      <div className="modal__card">
        <header className="modal__header">
          <p className="modal__title">{message}</p>
        </header>

        <footer className="modal__footer">
          <NoDataSvg />

          <button className="modal__button" onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
}

export default Alert;