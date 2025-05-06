// src/components/Layout/Layout.tsx
import React from "react";
import Logo from "../../images/js-profile.png";
import "./Layout.scss";

export interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => (
  <>
    <header className="site-header">
      <div className="header-container">
        {/* 로고 영역 */}
        <a href="/" className="logo">
          {/* 로고 이미지는 public 폴더에 logo.svg 또는 logo.png로 저장하세요 */}
          <img src={Logo} alt="JinSeop's Logo" />
          <span>JinSeop</span>
        </a>

        {/* 네비게이션 */}
        <nav className="site-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>

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

export default Layout;
