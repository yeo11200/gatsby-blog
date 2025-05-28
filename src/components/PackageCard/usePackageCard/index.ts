import { useCallback } from "react";
import { useToast } from "../../Toast";

const usePackageCard = () => {
    const { showToast } = useToast();

    const copyToClipboard = useCallback((installCommand: string) => {
      navigator.clipboard.writeText(installCommand)
        .then(() => {
          showToast('클립보드에 복사되었습니다!');
        })
        .catch((error) => {
          console.error('Failed to copy text: ', error);
        });
    }, [showToast]);

    return { copyToClipboard };
};

export default usePackageCard;