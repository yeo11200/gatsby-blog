import React from "react";
import "./Layout.scss";

export interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => (
  <>
    <header className="site-header">
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a>
      </nav>
    </header>
    <div className="layout-page">
      <div className="layout">
        <main>{children}</main>
      </div>
      <footer>© 2025 JinSeop Shin</footer>
    </div>
  </>
);

export default Layout;
