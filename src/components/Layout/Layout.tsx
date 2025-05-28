// src/components/Layout/Layout.tsx
import React from "react";
import Logo from "../../images/js-profile.png";
import "./Layout.scss";
import useLayout from "./useLayout";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isMenuOpen, toggleMenu } = useLayout();

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          {/* 로고 영역 */}
          <a href="/" className="logo">
            {/* 로고 이미지는 public 폴더에 logo.svg 또는 logo.png로 저장하세요 */}
            <img src={Logo} alt="JinSeop's Logo" />
            <span>JinSeop</span>
          </a>

          {/* 햄버거 메뉴 아이콘 */}
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>

          {/* 네비게이션 */}
          <nav className={`site-nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/tools">Tools</a>
          </nav>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu} />}

      <div className="layout-page">
        <div className="layout">
          <main>{children}</main>
        </div>

        <footer>
          <div className="footer-content">
            <div className="copyright">© 2025 JinSeop Shin</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
