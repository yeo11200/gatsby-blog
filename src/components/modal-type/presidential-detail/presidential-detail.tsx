import React from "react";

const PresidentialDetail = () => {
  return (
    <div>
      <h2>🔧 사이드 프로젝트 이력서 정리 – 대선 정책 시각화 플랫폼</h2>
      <hr />
      <h3>📌 프로젝트명</h3>
      <p>
        <b>대한민국 2025 대선 공약 시각화 플랫폼</b>
      </p>
      <h3>🗓️ 프로젝트 기간</h3>
      <p>2025년 5월 초 ~ 5월 중순 (약 2주 집중 개발)</p>
      <h3>🎯 프로젝트 목적</h3>
      <ul>
        <li>정책 공약을 시각화하여 유권자의 정보 접근성을 높임</li>
        <li>정치적 편향 없이 재미와 데이터를 결합한 대중 콘텐츠 제공</li>
        <li>AI 기반 뉴스 요약 및 감성 분석을 결합한 인터랙티브 경험 구현</li>
      </ul>
      <h3>🔨 사용 기술 스택</h3>
      <b>Frontend</b>
      <ul>
        <li>React(19), Tailwind CSS, Recharts, TypeScript, Vercel 배포</li>
      </ul>
      <b>Backend</b>
      <ul>
        <li>
          Fastify (Node.js), RESTful API, UUID 기반 사용자 식별, Cloudtype 배포
        </li>
      </ul>
      <b>AI / Data</b>
      <ul>
        <li>OpenAI ChatGPT API, Google Gemma 3-27B It, PDF 공약 카드화</li>
        <li>SupaBase</li>
      </ul>
      <h3>📊 구현 주요 기능</h3>
      <ul>
        <li>
          정책 카드 시각화, 정책별/후보별 투표, 뉴스 요약 및 감성 분석, 반응형
          UX/UI
        </li>
      </ul>
      <h3>📈 성과 지표</h3>
      <ul>
        <li>런칭 이틀 만에 페이지뷰 12,971회</li>
        <li>Vercel Analytics 기준 Bounce Rate: 85%</li>
      </ul>
      <h3>🧘‍♂️ 프로젝트 종료 선언</h3>
      <ul>
        <li>후보자 투표 기능 종료, 이후 관찰/분석에 집중</li>
      </ul>
      <h3>📁 코드 저장소</h3>
      <ul>
        <li>
          Frontend:{" "}
          <a
            href="https://github.com/yeo11200/presidential-election/tree/main/src"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          Backend:{" "}
          <a
            href="https://github.com/yeo11200/portfolio-backend/tree/main/src"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
      <h3>📌 본 프로젝트를 통해 다룬 역량</h3>
      <ul>
        <li>
          시각적 정보 설계, Fastify 백엔드, LLM 서비스 활용, 대중 콘텐츠 기획력
        </li>
      </ul>
    </div>
  );
};

export default PresidentialDetail;
