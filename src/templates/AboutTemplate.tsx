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
const AboutTemplate = ({ pageContext }: AboutTemplateProps) => {
  const { html } = pageContext;

  return (
    <Layout>
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
