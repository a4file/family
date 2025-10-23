# 🎨 우리가족 동화책

AI가 만들어주는 우리 가족만의 특별한 동화책

## 📖 소개

이 프로젝트는 Google Gemini AI를 활용하여 가족 맞춤형 동화를 생성하고, 아름다운 일러스트와 함께 동화책으로 만들어주는 데스크톱 애플리케이션입니다.

### 주요 기능

- 🤖 **AI 스토리 생성**: Google Gemini를 활용한 맞춤형 동화 생성
- 🎨 **AI 이미지 생성**: 동화에 어울리는 일러스트 자동 생성
- 📚 **동화책 뷰어**: 실제 책처럼 넘겨볼 수 있는 인터랙티브 UI
- 💾 **로컬 저장**: Electron을 통한 데스크톱 앱 지원
- 🎯 **직관적 UI**: 어린이도 쉽게 사용할 수 있는 친숙한 인터페이스

## 🚀 시작하기

### 필수 요구사항

- Node.js (v18 이상 권장)
- npm 또는 yarn

### 설치

1. 저장소를 클론합니다:
```bash
git clone https://github.com/a4file/family.git
cd family
```

2. 의존성을 설치합니다:
```bash
npm install
```

3. 환경변수를 설정합니다:
- `env.example` 파일을 `.env`로 복사하고 Google Gemini API 키를 추가합니다:
```bash
cp env.example .env
```
- `.env` 파일을 열어서 실제 API 키로 수정합니다:
```
VITE_GEMINI_API_KEY=your_actual_api_key_here
```
- API 키는 https://aistudio.google.com/app/apikey 에서 발급받을 수 있습니다

### 실행

#### 웹 개발 모드
```bash
npm run dev
```
브라우저에서 `http://localhost:3000`으로 접속합니다.

#### Electron 데스크톱 앱 실행
```bash
npm run electron:dev
```

#### 프로덕션 빌드
```bash
npm run build
```

#### Electron 앱 빌드
```bash
npm run electron:build
```

## 🛠️ 기술 스택

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Desktop**: Electron
- **AI**: Google Gemini API

## 📂 프로젝트 구조

```
our-family-storybook/
├── components/          # React 컴포넌트
│   ├── Header.tsx
│   ├── StoryInput.tsx
│   ├── ImageUploader.tsx
│   ├── StorybookPage.tsx
│   └── ...
├── services/           # API 서비스
│   └── geminiService.ts
├── App.tsx            # 메인 앱 컴포넌트
├── index.tsx          # 엔트리 포인트
├── electron.cjs       # Electron 메인 프로세스
└── vite.config.ts     # Vite 설정
```

## 🎯 사용 방법

1. **동화 주제 입력**: 원하는 동화의 주제나 키워드를 입력합니다
2. **AI 생성**: AI가 맞춤형 동화와 일러스트를 생성합니다
3. **확인 및 편집**: 생성된 동화를 확인하고 필요시 수정합니다
4. **저장 및 공유**: 완성된 동화책을 저장하고 가족과 함께 감상합니다

## 📝 라이선스

이 프로젝트는 개인 사용을 위한 프로젝트입니다.

## 👨‍👩‍👧‍👦 만든이

가족의 소중한 추억을 담는 동화책을 만들기 위해 시작되었습니다.

---

**Made with ❤️ for families**
