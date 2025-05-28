import { useMemo, useState } from "react";
import PresidentialDetail from "../../../components/modal-type/presidential-detail";

const useProjects = () => {

const projects = useMemo(() => [
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
      "Next.js + Framer Motion 기반의 인터랙티브 UI 구현",
      "음성 인식 및 자연어 처리 기반 트랜잭션 처리 시스템 구축",
      "안전한 지갑 관리 및 실시간 트랜잭션 모니터링 기능 구현",
    ],
    link: "https://nft-front-git-master-jacobs-projects-de764ef2.vercel.app/",
    // modal: TransactionDetail
    },
  // 다른 프로젝트도 여기에 추가 가능
], []);
    
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
