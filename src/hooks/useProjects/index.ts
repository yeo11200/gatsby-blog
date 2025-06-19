import { useMemo, useState } from "react";
import PresidentialDetail from "../../components/modal-type/presidential-detail";
import GitHubDetail from "../../components/modal-type/github-detail/github-detail";

const useProjects = () => {
  const projects = useMemo(
    () => [
      {
        title: "GitHub 활동 분석 & AI 이력서 요약 서비스 (github-person)",
        period: "개인 프로젝트, 2025.06",
        description: [
          "GitHub 사용자의 활동 데이터를 수집하여 정량화 및 시각화하는 분석 플랫폼 기획 및 개발",
          "React 기반 SPA 아키텍처 설계, Styled-components + module SCSS로 디자인 시스템 직접 구축",
          "Chart.js 기반 커밋 히트맵, 언어 통계, 프로젝트 기여도 시각화 기능 구현",
          "GitHub REST API 데이터 파싱 → LLM 기반 이력서 요약 자동 생성 및 Markdown 다운로드 기능 개발",
          "AI 모델 연동: OpenAI 및 LangChain 구조 기반 요약 모델 적용",
          "향후 성장 그래프, 유사 개발자 비교, 면접 대비 자동 요약 등 기능 확장 계획 수립",
        ],
        link: "https://github-person.vercel.app/",
        modal: GitHubDetail,
      },
      {
        title: "대한민국 2025 대선 공약 시각화 플랫폼",
        period: "개인 프로젝트, 2025.05",
        description: [
          "유권자에게 정책 공약을 효과적으로 전달하기 위한 인터랙티브 웹 플랫폼 기획 및 개발",
          "Next.js 기반 카드형 정책 UI 구현, Fastify 백엔드로 투표 API 설계",
          "OpenAI + Google Gemma 기반 뉴스 요약/감성 분석 탭 구현",
          "퍼포먼스 최적화를 고려한 Vercel + Render 배포 및 트래픽 분석",
        ],
        link: "https://presidential-election-six.vercel.app/",
        modal: PresidentialDetail,
      },
      {
        title: "Speak-to-Transact",
        period: "개인 프로젝트, 해커톤, 2025.03",
        description: [
          "자연어로 XRPL 트랜잭션을 처리하는 AI 기반 블록체인 에이전트 개발",
          "React + Framer Motion 기반의 인터랙티브 UI 구현",
          "음성 인식 및 자연어 처리 기반 트랜잭션 처리 시스템 구축",
          "안전한 지갑 관리 및 실시간 트랜잭션 모니터링 기능 구현",
        ],
        link: "https://nft-front-git-master-jacobs-projects-de764ef2.vercel.app/",
        // modal: TransactionDetail
      },
      // 다른 프로젝트도 여기에 추가 가능
    ],
    []
  );

  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  const handleOpenModal = (content?: () => JSX.Element) => {
    setOpenModal(!!content);
    if (content) {
      setModalContent(content);
    }
  };

  return {
    openModal,
    modalContent,
    handleOpenModal,
    projects,
  };
};

export default useProjects;
