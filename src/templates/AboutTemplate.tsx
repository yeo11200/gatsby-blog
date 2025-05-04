import React from "react";
import Layout from "../components/Layout";

interface AboutTemplateProps {
  pageContext: {
    html: string;
    title: string;
    date: string;
  };
}

const AboutTemplate: React.FC<AboutTemplateProps> = ({ pageContext }) => {
  const { html, title, date } = pageContext;

  return (
    <Layout pageTitle={title}>
      <div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export default AboutTemplate;
