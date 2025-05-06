import React from "react";
import Layout from "../components/Layout";
import "./AboutTemplate.scss";

export interface AboutTemplateProps {
  pageContext: {
    html: string;
    title: string;
    date: string;
  };
}

// 이력서 템플릿 컴포넌트
const AboutTemplate: React.FC<AboutTemplateProps> = ({ pageContext }) => {
  const { html, title, date } = pageContext;

  return (
    <Layout pageTitle={title}>
      <div className="about-content">
        <div
          className="about-html"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export default AboutTemplate;
