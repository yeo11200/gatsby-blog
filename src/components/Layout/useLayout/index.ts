import { useState } from "react";

const useLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return {
        isMenuOpen,
        toggleMenu,
    }
}

export default useLayout;