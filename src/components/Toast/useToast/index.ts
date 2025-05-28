import { useEffect } from "react";

const useToast = (isVisible: boolean, onClose: () => void, duration: number) => {
    useEffect(() => {
        if (isVisible) {
          const timer = setTimeout(() => {
            onClose();
          }, duration);
          
          return () => clearTimeout(timer);
        }
      }, [isVisible, onClose, duration]);
    
};

export default useToast;