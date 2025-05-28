import React from 'react';
import './Toast.scss';
import useToast from './useToast';

export interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast = ({ 
  message, 
  isVisible, 
  onClose,
  duration = 2000 
}:ToastProps) => {
  useToast(isVisible, onClose, duration);

  return (
    <div className={`toast ${isVisible ? 'toast--visible' : ''}`}>
      <div className="toast__content">
        <span className="toast__message">{message}</span>
      </div>
    </div>
  );
};

export default Toast; 