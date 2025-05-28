import React, { createContext, useContext, useState, ReactNode } from 'react';
import Toast from './Toast';

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  const showToast = (msg: string) => {
    setMessage(msg);
    setIsVisible(true);
  };

  const hideToast = () => {
    setIsVisible(false);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        message={message}
        isVisible={isVisible}
        onClose={hideToast}
        duration={2000}
      />
    </ToastContext.Provider>
  );
}; 