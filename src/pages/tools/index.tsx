import React, { useMemo } from 'react';
import Layout from '../../components/Layout';
import PackageCard from '../../components/PackageCard';
import { ToastProvider } from '../../components/Toast';
import './tools.scss';
import useTools from './useTools';

  const ToolsPage = () => {
 // Sample data - replace with your actual data or fetch from an API/CMS
 const toolsData = useMemo(() => [
  {
    name: "webhooks-simpleing",
    description: "Slack & JANDI Webhook 도구",
    technologies: ["TypeScript", "Node.js"],
    installCommand: "npm i webhooks-simpleing",
    links: {
      github: "https://github.com/yeo11200/webhooks-simpleing",
      npm: "https://www.npmjs.com/package/webhooks-simpleing",
    }
  },
  {
    name: "file-usage-analyzer",
    description: "파일 사용 중이지 않는 분석 도구",
    technologies: ["TypeScript", "Node.js", "Javascript"],
    installCommand: "npm i file-usage-analyzer",
    links: {
      github: "https://github.com/yeo11200/file-usage-analyzer",
      npm: "https://www.npmjs.com/package/file-usage-analyzer"
    }
  },
  {
    name: "find-to-use",
    description: "파일 시스템을 검색하여 특정 문자열의 사용 위치를 찾고, 결과를 마크다운 문서화",
    technologies: ["TypeScript", "Node.js"],
    installCommand: "npm i find-to-use",
    links: {
      github: "https://github.com/yeo11200/find-to-use",
      npm: "https://www.npmjs.com/package/find-to-use",
    }
  },
  // Add more tools as needed
], []);
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