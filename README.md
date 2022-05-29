# Business Card Maker

## Description
✔️ Business Card Maker : 명함 프로젝트<br>
✔️ Firebase를 연동해 OAuth 로그인으로 명함을 만들고 볼 수 있는 프로젝트

## Link
https://ena-business-card-maker.netlify.app/

## Tech Stack
<div>
  <img src="https://img.shields.io/badge/Javascript-ffca26?style=flat-square&logo=javascript&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/React-08D5FF?style=flat-square&logo=React&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/PostCSS-f55354?style=flat-square&logo=postCSS&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white"/></a>&nbsp
</div>

## 담당한 기능(Web Front)
- React Hook을 사용한 UI 및 개발
- PostCSS로 컴포넌트별 퍼블리싱
- Firebase SDK를 이용해 Google, GitHub 소셜 로그인 구현
- Firebase Database를 연결한 명함 CRUD API 연동
- useCallback과 memo를 활용한 성능 향상
- Netlify를 이용한 사이트 배포

## 성취 역량
- React Hook을 사용해 코드의 재사용 성과 가독성을 높이고, state 관리 및 라이프사이클 API 활용
- PostCSS로 컴포넌트별 퍼블리싱을 담당해 모듈화로 편의성을 높임
- useCallback과 memo를 활용해 React의 불필요한 컴포넌트 re-rendering을 없앰
- Firebase 사이트를 Netlify를 통해 배포할 때 생기는 오류를 해결함
  - authentication 문제 해결을 위해 Netlify에서 환경 변수를 설정
  - Firebase 내에서 승인된 도메인 링크 등록


## Directory Structure

``` js
root
└─src // app, index
  ├─ service // auth, card, firebase, image
  ├─ common // colors, size
  └─ components // file -> jsx, module.css(PostCSS)
```

## Prerequisites
```python
npm -> 6.14.13
node -> 14.17.0
yarn -> 1.22.5
```

## Install
```python
# npm install
$ yarn install
```

## Running the app
```python
# npm start
$ yarn start
```
