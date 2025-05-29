---
title: "진섭 신 (JinSeop Shin)"
date: 2025-04-21
lang: ko
---

# 진섭 신 (JinSeop Shin)

**Front-End Engineer** · 만 6년차 · INTJ/ISTJ

### Skills

- TypeScript, JavaScript, Vue 3, React, Next.js
- Rollup, Webpack, Turborepo, Tailwind CSS, Module scss
- Docker, Monorepo, AWS (S3, CloudFront, Lambda@Edge, Amplify), Vercel
- 리더쉽, 팀문화, 개발문화

---

## 저는 \_\_\_\_\_ 엔지니어입니다

### 💡 제품 중심

제품의 방향성과 사용자 경험에 영향을 줄 수 있는 변화를 먼저 고민하는 엔지니어입니다.

### 🌱 문화 중심

기술을 통한 성장이 개인과 조직 모두에게 스며드는 개발 문화를 만들고 싶어하는 엔지니어입니다.

### 🤝 사람 중심

채용, 협업, 피드백을 통해 '사람이 일하는 방식'에도 깊은 관심을 갖는 엔지니어입니다.

## 저는 \_\_\_\_\_ 조직을 선호합니다

### 🧭 투명한 의사결정

의사결정이 투명하게 이루어지고, 그 배경과 맥락이 구성원 모두에게 수평적으로 공유되는 조직을 선호합니다.

### 🎯 공감하는 동료

단순한 업무 분담을 넘어, 비전과 목표를 함께 그려나가며 공감할 수 있는 동료들과 일하는 조직을 선호합니다.

---

## Contact

- GitHub: [Jinseop Shin](https://github.com/yeo11200)
- LinkedIn: https://www.linkedin.com/in/진섭-신-03a782185/
- Rocketpunch: https://www.rocketpunch.com/@yeo11200
- Email: yeo11200@hanmail.net

---

## Experiences

### Funble (펀블) - 2024 우수사원

<table>
  <thead>
    <tr>
      <th align="right"></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="right"><strong>period</strong></td>
      <td>2024.10 ~ 현재 (8개월)</td>
    </tr>
    <tr>
      <td align="right"><strong>position</strong></td>
      <td>프론트엔드 개발자</td>
    </tr>
    <tr>
      <td align="right"><strong>projects</strong></td>
      <td>수시채용 플랫폼, 홈페이지 고도화, 디자인 시스템 구축, 다국어 프로젝트 등</td>
    </tr>
    <tr>
      <td align="right"><strong>tech</strong></td>
      <td>Next.js, React.js, Vue3, TypeScript, Rollup, Verdaccio, pnpm, Amplify</td>
    </tr>
  </tbody>
</table>

### 🧩 React → Web Component 변환 및 Vue 통합 리팩토링

#### 🔄 프로젝트 개요

기존 Vue 기반 프로젝트에 React로 개발된 신규 UI를 도입하기 위해, React 컴포넌트를 Web Component 형태로 래핑하여 Vue 내에 자연스럽게 통합함. 이를 통해 리팩토링을 병렬로 수행하며 유지보수성과 확장성을 동시에 확보.

#### 🔧 기술 전략

- **React 컴포넌트를 Web Component로 변환**

  - `react-dom` + `customElements.define()` 조합으로 마운팅
  - Props/Attributes 양방향 데이터 바인딩 구현
  - 이벤트 디스패치(`CustomEvent`)를 통해 Vue와 통신

- **Vue에서 Web Component를 직접 사용**

  - Vue 템플릿에서 `<custom-react-button>` 형태로 사용
  - 기존 Vuex/Pinia 상태관리와 자연스럽게 연동되도록 설계

- **점진적 리팩토링**
  - Web Component로 먼저 이식 → 이후 완전한 React 컴포넌트 마이그레이션
  - Style encapsulation을 유지하면서 공통 CSS 충돌 방지

#### 🏗 사내 UI 라이브러리 개발

- Web Component로 전환된 React UI 컴포넌트를 공통 패키지로 분리
- 내부 전용 npm registry (ex: Verdaccio)로 패키징 및 배포 자동화
- 컴포넌트마다 문서화 + 테스트 코드 포함 (`Storybook`, `Jest`)

> ✅ 결과: 새로운 프로젝트에서는 해당 UI 컴포넌트를 공통으로 불러 사용 가능

#### 🧠 MFE (Micro Frontend) 사고 기반 설계

- 시스템 전체를 단일 SPA가 아닌 **독립된 모듈 단위**로 분리하는 구조 도입
- `Web Component`는 MFE 기법에서 각 팀이 기술 스택을 자유롭게 선택할 수 있도록 하는 핵심 요소로 활용됨
- React + Web Component + Vue 통합이 MFE 전략을 **기술적으로 실현한 첫 사례**

### 신규 사업 런칭 – 수시채용 플랫폼

- React로 보일러플레이트 기반 플랫폼 개발 주도
- 유지/백오피스 프로젝트 분리 및 보일러 구성
- 반응형 UI 컴포넌트 및 소셜 로그인 연동
- local에서 http2 기능 설정 및 테스트 구성
- PDF 다운로드 custom hook 개발 (htmlcanvas, jspdf 활용)
- AWS Amplify 배포 구성 (dev, qa, prod 환경 분리)

### 홈페이지 고도화 (HTML → Next15, TypeScript)

- 모노레포 구조(pnpm workspace)로 아키텍처 설계
- 기존 프로젝트 Next15 + TypeScript로 마이그레이션
- 공통 axios 통합 모듈 구성
- Dokcer 기반 배포 구조 설계 및 전환 진행

### 다국어 프로젝트 (Next15, Vue3)

- Notion API를 활용한 다국어 내문서 파일 자동 생성
- vue-i18n 기반 다국어 관리 구성
- 공통 커스텀 hook 설정 및 로직 통합 → 번역 자동화
- nextjs api router를 활용해서 api 개발
  - api를 활용해서 내부에 있는 다국어 생성한 파일 호출하는 로직 추가

### 디자인 시스템 구축 (React, TypeScript)

- 브랜드 일관성을 고려한 UI 토큰/컴포넌트 구조 수립
- 재사용 가능한 컴포넌트 설계 및 도입
- Rollup으로 배포/번들링 자동화 구성
- Verdaccio를 통해 내부 레지스트리 운영 → 사내 배포 효율화
- Figma 기반 협업, 개발자-디자이너 간 문서 정리 및 리뷰 프로세스 관리

### 운영업무

- 어드민 권한 설정 작업
- 어드민 하드코딩 영역 컴포넌트 화
- 앱 캐싱으로 인한 배포시 css 깨지는 현상 수정 -> hash값으로 js, css 파일명으로 수정
- nextjs web shared page 생성
- 앱 관련 유지보수
  - webview aos 스크롤 늘어나는 현상
  - health connect, health kit 연동

### API Mocking 시스템 구축 (Express + MSW)

#### 🔄 프로젝트 개요

기존 API 서버와의 호환성 문제로 인해 MSW 도입이 어려운 상황에서, Express 서버와 프록시 미들웨어를 활용한 하이브리드 Mocking 시스템을 설계 및 구현. 이를 통해 개발 환경에서 안정적인 API 테스트가 가능하도록 구성.

#### 🔧 기술 전략

- **Express 서버 + 프록시 미들웨어 구성**

  - 실제 API 서버로 요청 전달 및 응답 처리
  - 404 응답 감지 시 자동으로 Mock 데이터로 폴백
  - MSW를 통한 브라우저 환경 Mocking 지원

- **유연한 Mocking 구조 설계**
  - 실제 API 응답 우선, 실패 시 Mock 데이터 자동 주입
  - 협의 주문 수 등 실제 API 응답을 안전하게 제공
  - 외부 API 장애 상황에서도 개발/테스트 가능한 환경 구성

> ✅ 결과: 개발 환경에서 안정적인 API 테스트 환경 구축 및 외부 API 의존성 최소화

### 팀문화/프로세스 정비

- 업무 프로세스 정립 및 문서화
- 온보딩 매뉴얼 및 코드 리뷰 가이드 작성
- 브랜치 전략 및 커밋 플로우 정리
- 면접 질문 템플릿 및 채용 프로세스 개선

### 보유기술

- **프레임워크**: Next.js, React.js, Vue3
- **언어**: TypeScript, JavaScript
- **설계**: 모노레포, Feature-Sliced Design
- **툴링**: Rollup, Verdaccio, pnpm, Amplify, Docker

### 🎯 포지션 확대

- 2025.01 ~ 현재: 프론트엔드 파트 리드
  - 프로젝트 관리, 프론트엔드 기술 설계, 채용 기여

---

### 한샘 - 본부 우수사원 후보 추천

<table>
  <thead>
    <tr>
      <th align="right"></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="right"><strong>period</strong></td>
      <td>2023.07 ~ 2024.09 (1년 3개월)</td>
    </tr>
    <tr>
      <td align="right"><strong>position</strong></td>
      <td>프론트엔드 개발자 (정규직)</td>
    </tr>
    <tr>
      <td align="right"><strong>projects</strong></td>
      <td>스토어 고도화, 리모델링, 전시 모바일 개발(PL), 전시 PC 개발(PL)</td>
    </tr>
    <tr>
      <td align="right"><strong>tech</strong></td>
      <td>React, Next.js, JSP, rollup.js, Feature-Sliced Design, BFF, Webhooks</td>
    </tr>
  </tbody>
</table>

### 스토어 상품 상세 고도화 (3개월)

- 기존 JSP에서 React, Next.js 기반으로 전환
- UI 리팩토링 및 API 호출 개선 → 데이터 추적 용이성 증가

### 리모델링 운영 (~2024.01)

- 성능 개선 (캐싱, bottom-up 렌더링)
  - HTTP2 도입
  - 컴포넌트 단위 lazy load, SSR 최적화
  - lodash → `lodash-es` 전환 (트리 쉐이킹)
  - 다중 API 호출을 `Promise.all`로 최적화
- 스도트(최대): 5 → 50(ms), 스도트(최소): 14 → 49(ms)

### 전시 모바일 개발 (2024.02 ~ 2024.06)

- **PL 역할 + 개발**
- `rollup.js` 기반 라이브러리 개발 및 적용
- 백엔드 데이터와 UI 연결 구성 → 컴포넌트 제공
- 총 6가지 환경 설계
- Feature-Sliced Design 아키텍처 도입
- 클린 아키텍처: 공통 UI 분리 및 API 모듈화
- API 2개 데이터를 하나로 통합하여 화면 구성
- BFF 방식 활용 (Backend For Frontend)
- 1:N 관계 데이터 전송, 페이지 내 동기화 대응
- 마케팅/기획화면 구성 + 미래 생성형 UI 환경 구현

### 전시 PC 개발 (2024.07 ~ 2024.09)

- **PL 역할 + 개발**
- 전시 모바일 개발과 동일한 설계 방향
- 롤업 기반 라이브러리 개발 및 적용
- 전시 PC 용 컴포넌트 구성 및 데이터 렌더링 환경 구축
- 사용자 정의 이벤트 및 상태 공유 로직 개선

### 프로젝트 외 기타

- 잔다 커스터머 웹훅(Webhooks) 개발
- Webhook 트리거 정의 및 요청/응답 상태 로그 추적

### 보유기술

- **Frameworks**: React.js, Next.js
- **Frontend**: Typescript, Feature-Sliced Design, Rollup.js
- **API 연동**: BFF, REST 기반 설계
- **기타**: PL 경험, UI 설계, 퍼포먼스 최적화, 코드 분리/설계/리팩토링

---

### Bithumb (빗썸) - 우수사원

<table>
  <thead>
    <tr>
      <th align="right"></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="right"><strong>period</strong></td>
      <td>2021.05 ~ 2023.06 (2년 2개월)</td>
    </tr>
    <tr>
      <td align="right"><strong>position</strong></td>
      <td>프론트엔드 개발자 (정규직)</td>
    </tr>
    <tr>
      <td align="right"><strong>projects</strong></td>
      <td>거래소 리뉴얼, 규제 대응, 재이행, 트래블룰, Native 플랫폼 대응 등</td>
    </tr>
    <tr>
      <td align="right"><strong>tech</strong></td>
      <td>React, TypeScript, JavaScript, PHP, React Native, framer motion, react-spring, Jest</td>
    </tr>
  </tbody>
</table>

#### 🔧 프론트엔드 UI 고도화

- 사이트 전반 고도화 (React + TypeScript)
- 모바일 신규 서비스 고도화 및 실시간 UI 변경 (webSocket)
- `Any` → 각 타입별 `Type` 전환, 타입 체계 개선
- 함수의 반환 타입 규격화, `return type` 명시
- `D3.js`, `Circle Chart` 활용한 데이터 시각화 및 퍼센트 계산 시각화

#### 규제 대응 프로젝트

- 트래블룰 송금 대응 (PHP, JavaScript)
- 송금등록주소 페이지, 코드 연동 솔루션 등 구현
- 거래소 리뉴얼, 출금 UI 수정 및 대응

#### 고객 확인 재이행

- 인증 재처리 프로세스 리팩토링 (PHP, JavaScript)

#### 협업 문화 개선

- Jira 기반 Bottom-up Project 운영
- 팀 내 협업 이슈 및 상하 수직 구조 개선 발표
- 조직 내 공유 및 발표 리딩
- 협업히어로 (대외활동)
  - 공통의 목표를 가지고 사일로 문화를 파괴

#### Native 플랫폼 대응

- PHP + React + JavaScript 기반 hybrid platform 대응
- Webview Native 대응 (aos/ios)
- 인터페이스 문서화, 정책 문서 제작
- Web + App 전환시 공통 소스 구조 설계

#### 간편투자 UI/UX 개선

- M/W App 관련 컴포넌트 개발 및 리팩토링
- 기존 UI의 사용성 개선 + 인터랙션 강화
- `framer motion`, `react-spring` 도입
- `animation` 도입 시 성능 개선

#### 지갑 & 개인지갑

- `wallet connect` 연동 기능 구현
- 부리또 월렛, 도시별 지갑 주소 UI 추가

#### 테스트 및 코드 개선

- `Jest` 기반 테스트 코드 도입
- 성능 개선을 위한 `useMemo`, `useCallback` 적용
- 스크립트/에러 로깅 시스템 정비 및 예외 처리

---

## 에듀서브

<table>
  <thead>
    <tr>
      <th align="right"></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="right"><strong>period</strong></td>
      <td>2019.07 ~ 2021.01 (1년 7개월)</td>
    </tr>
    <tr>
      <td align="right"><strong>position</strong></td>
      <td>Front-End Developer (사원)</td>
    </tr>
    <tr>
      <td align="right"><strong>projects</strong></td>
      <td>커뮤니티 고도화, 강사 UI 고도화, Socket 서버 구축, 홈페이지 유지보수</td>
    </tr>
    <tr>
      <td align="right"><strong>tech</strong></td>
      <td>AngularJS, JavaScript, jQuery, PHP, Node.js, Chart.js, Git </td>
    </tr>
  </tbody>
</table>

### 커뮤니티 고도화 프로젝트 (2020.01 ~ 2020.10)

- AngularJS 1.x와 `ui-router`를 사용하여 SPA 구조로 프론트 화면 구성
- `fetch API`를 활용한 서버 통신 및 커뮤니티 동작 구현
- Angular 템플릿 구조를 활용한 UI 요소 다변화 및 유지보수 용이성 개선
- 외부 라이브러리(jQuery)의 오류를 lazyload 방식으로 최소화
- Summernote, Datepicker 등 다양한 라이브러리 커스터마이징 적용
- 반복 구조, 정규식, 변수 등을 통일하는 **공통 리팩토링 작업**

### 강사 UI 고도화 프로젝트 (2020.10 ~ 2020.11)

- `scroll` 데이터 기반의 인터랙션 설계 및 구현
- 날짜별 조건에 따라 자동 적용되는 라이브러리 설계
- 소스 공통화 및 컴포넌트 단위 리팩토링

### Socket 기반 실시간 서버 구축 (Node.js)

- `express`, `socket.io` 기반의 Node 서버 구축
- 강의 알림 등 실시간 event 발송 기능 구현

### 홈페이지 유지보수 및 통계 대시보드 (PHP + JavaScript)

- 직접 구현한 `utm` 기반 로그 수집으로 방문자 추적 기능 개발
- 출석 시스템 및 통계 기반 스크립트 작성
- Chart.js 기반 대시보드: 유입, 출석, 지역별 활동 데이터 시각화

## 발표 및 공유 경험

- `SQL index란 무엇인가`
- `Git 협업 방식 정리 및 적용`
- `크로스 플랫폼 프레임워크를 고려한 아키텍처 전략`

## 기술 스택

- **Frontend**: AngularJS (1.x), JavaScript, jQuery
- **Backend**: PHP, CodeIgniter, Node.js (Express, Socket.io)
- **Infra & Tooling**: Git, Chart.js, Summernote

---

## Awards History

### 삼성전자 S/W 인력양성 프로그램(SCSC-C) 장학금

**삼성전자** (2015년)

- 우수 수료생으로 선발되어 장학금 150만원 수령
- 타 학생에게 도움을 준 공로로 추가 장학금 50만원 수령
- 총 200만원 수상, 학업 및 협업 태도 모두에서 우수 평가 획득

### 우수사원 선정 (2024.12)

**펀블 / Front-End Developer**

- 연말 평가에서 기술적 기여도와 협업 능력을 인정받아 우수사원으로 선정
- 주요 기여: 디자인 시스템 구축, 홈페이지 고도화, Git 전략 도입
- 팀 내 코드 리뷰/온보딩 정착 기여로 동료 추천 수 다수 확보

### 본부 우수사원 후보 추천 (2024년 상반기)

**한샘 / Front-End Developer**

- 전시 프로젝트의 UI/UX 구조 설계 및 팀 기술 방향 주도
- 기획·디자인·백엔드 협업을 조율하며 일정 및 품질을 안정적으로 리딩
- 부서 내 실무 성과와 협업 리더십을 인정받아 **본부장 추천 우수사원 후보** 선정

---

## Community

- **자스웹개발자컴컴 Node.js 커뮤니티 리더 (2024.03 ~ 진행 중)**
  - Node.js, 프론트엔드, 백엔드 개발자들이 모인 기술 커뮤니티 운영 (~170명 규모)
  - 실무 이슈, 개발 트렌드, 라이브러리 선택, 아키텍처 구성 등 다양한 주제로 논의 리딩
  - 커뮤니티 내 공유 자료 아카이빙 및 피드백 중심 구조 설계
  - 기술적 고민을 안전하게 공유하고 성장하는 문화 구축에 기여

---

## External Activities

<table>
  <thead>
    <tr>
      <th align="right"></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="right"><strong>title</strong></td>
      <td>XRPL KOREA 블록체인 해커톤: DE-BUTHON 참가확인증</td>
    </tr>
    <tr>
      <td align="right"><strong>issuer</strong></td>
      <td>Kolleges</td>
    </tr>
    <tr>
      <td align="right"><strong>date</strong></td>
      <td>2025년 4월</td>
    </tr>
    <tr>
      <td align="right"><strong>cert. ID</strong></td>
      <td>XRPLK-202504-qp7254</td>
    </tr>
    <tr>
      <td align="right"><strong>skills</strong></td>
      <td>Front-end 개발, LLM 응용, 블록체인 기술</td>
    </tr>
    <tr>
      <td align="right"><strong>link</strong></td>
      <td><a href="https://www.kolleges.net/ko/xrplkorea/achievement/4505" target="_blank">인증서 보기</a></td>
    </tr>
  </tbody>
</table>

<br/>

<table>
  <thead>
    <tr>
      <th align="right"></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="right"><strong>title</strong></td>
      <td>수상인증서 (DE-BUTHON 해커톤)</td>
    </tr>
    <tr>
      <td align="right"><strong>issuer</strong></td>
      <td>Kolleges</td>
    </tr>
    <tr>
      <td align="right"><strong>date</strong></td>
      <td>2025년 4월</td>
    </tr>
    <tr>
      <td align="right"><strong>cert. ID</strong></td>
      <td>XRPLK-202504-h10ujv</td>
    </tr>
    <tr>
      <td align="right"><strong>notes</strong></td>
      <td>XRPL 기반 프로젝트 수상</td>
    </tr>
    <tr>
    </tr>
  </tbody>
</table>

---

## Education

### React 과정

**이젠아카데미코리아** (2019.11 ~ 2020.02)

- React Class Life Cycle
- Axios Default 설정
- React를 활용한 컴포넌트 기반 UI 구성 실습

### Vue.js 과정

**한국소프트웨어인재개발원** (2019.10 ~ 2019.10)

- Vue의 기초 개념 및 fetch API를 이용한 서버 통신 실습
- SPA 구조의 기본 설계 및 단방향 데이터 흐름 이해

### 응용프로그램 및 웹 개발자 양성

**경영기술개발원 교육센터** (2018.05 ~ 2018.11)

- Java, Oracle DB, JSP, Servlet, Spring, Python, R 등 다수 언어 기반 학습
- 총 3개의 팀 프로젝트 수행 및 팀 리더 경험
  1. 의류 코디 추천 웹사이트
  2. 유기묘/견 보호소 정보 공유 사이트
  3. 도서 추천 웹 애플리케이션
