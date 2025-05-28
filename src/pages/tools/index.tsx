import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import PackageCard from '../../components/PackageCard';
import { ToastProvider } from '../../components/Toast';
import './tools.scss';
import useTools from './useTools';

const ToolsPage = () => {
  const { toolsData } = useTools();
  return (
    <Layout>
      <ToastProvider>
        <div className="tools-page">
          <div className="tools-page__grid">
            {toolsData.map((tool, index) => (
              <div key={index} className="tools-page__grid-item">
                <PackageCard
                  name={tool.name}
                  description={tool.description}
                  technologies={tool.technologies}
                  installCommand={tool.installCommand}
                  links={tool.links}
                />
              </div>
            ))}
          </div>
        </div>
      </ToastProvider>
    </Layout>
  );
};

export default ToolsPage;

// Optional: If using MDX or other data sourcing in Gatsby
export const query = graphql`
  query ToolsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    # Add any other data queries you need here
  }
`;
