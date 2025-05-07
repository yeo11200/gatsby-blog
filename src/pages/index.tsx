// src/pages/index.tsx
import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  const techStack: string[] = ["React", "TypeScript", "Gatsby", "Sass"];

  return (
    <Layout>
      <div className="home-content">
        <h2>안녕하세요! 👋</h2>
        <p>
          저는 <b>신진섭</b>입니다.
          <br />
          심플함과 효율을 추구하는 프론트엔드 개발자입니다.
        </p>
        <div className="tech-stack">
          <span>주요 기술:</span>
          <ul>
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <a className="about-link" href="/about">
          👉 About Me 보러가기
        </a>
        <div className="signature">by JinSeop Shin</div>
      </div>
    </Layout>
  );
};

export default Home;
