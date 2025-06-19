import React from "react";

const GitHubDetail = () => {
  return (
    <div>
      <h2>🤖 사이드 프로젝트 – GitHub 저장소 AI 분석 플랫폼</h2>
      <hr />
      <h3>📌 프로젝트명</h3>
      <p>
        <b>GitHub Person - AI 기반 저장소 분석 도구</b>
      </p>
      <h3>🗓️ 프로젝트 기간</h3>
      <p>2025년 개발 진행 중</p>
      <h3>🎯 프로젝트 목적</h3>
      <ul>
        <li>
          GitHub 저장소를 자동으로 분석하여 개발자의 기술 스택과 역량을 시각화
        </li>
        <li>AI를 활용한 코드 품질 및 프로젝트 구조 분석 제공</li>
        <li>개발자 포트폴리오 자동 생성 및 인사이트 도출</li>
      </ul>
      <h3>🔨 사용 기술 스택</h3>
      <b>Frontend</b>
      <ul>
        <li>TypeScript (46.9%), SCSS (46.7%), CSS (5.0%)</li>
        <li>Vite 기반 개발 환경, Vercel 배포</li>
      </ul>
      <b>Backend</b>
      <ul>
        <li>TypeScript (100%), Node.js 기반 API 서버</li>
        <li>GitHub API 연동, AI 분석 엔진 통합</li>
      </ul>
      <h3>📊 구현 주요 기능</h3>
      <ul>
        <li>GitHub 저장소 자동 크롤링 및 데이터 수집</li>
        <li>AI 기반 코드 분석 및 기술 스택 탐지</li>
        <li>개발자 역량 시각화 대시보드</li>
        <li>프로젝트 구조 및 코드 품질 인사이트 제공</li>
      </ul>
      <h3>🏗️ 아키텍처 특징</h3>
      <ul>
        <li>프론트엔드와 백엔드 분리 구조로 확장성 확보</li>
        <li>GitHub API Rate Limit 최적화 전략 구현</li>
        <li>AI 분석 결과 캐싱을 통한 성능 최적화</li>
      </ul>
      <h3>📁 코드 저장소</h3>
      <ul>
        <li>
          Frontend:{" "}
          <a
            href="https://github.com/yeo11200/github-person"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          Backend:{" "}
          <a
            href="https://github.com/yeo11200/portfolio-backend/tree/master"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          Live Demo:{" "}
          <a
            href="https://github-person.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            github-person.vercel.app
          </a>
        </li>
      </ul>
      <h3>📌 본 프로젝트를 통해 다룬 역량</h3>
      <ul>
        <li>GitHub API 활용, AI 서비스 통합, 데이터 시각화, 풀스택 개발</li>
      </ul>
    </div>
  );
};

export default GitHubDetail;
