# PROsentation
PROsentation는 사용자의 발표를 AI가 종합적으로 분석하여 피드백을 제공해주는 서비스 입니다.

# PROsentation-Frontend
위 레포지토리는 PROsentation 프론트 개발을 위한 레포지토리 입니다.

## Installation
- git clone
```
    git clone https://github.com/joi0104/PROsentation-Web.git
```
- install package
```
    yarn
    npm install
```

## Usage
- project build
```
    yarn build
    npm build
```
- project start
```
    yarn start
    npm start
```

## Stack
- `react`
- `react-saga`
- `sass` `css module`
- `contextAPI`
- `webRTC`
- `recordRTC`
- `PDFtron`

## Project Setting
- `CRA`
- `eslint`,`prettier`,`commitlint`,`husky`

## Wireframe
- [Figma 이용](https://www.figma.com/file/VMrRCqwbti0cibct0bKTbO/%ED%94%84%EB%A1%9C%EC%A0%A0%ED%85%8C%EC%9D%B4%EC%85%98-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84-ver.0.1)

<img width="1087" alt="image" src="https://user-images.githubusercontent.com/28296417/102232388-65935080-3f32-11eb-8f65-1e757c78427c.png">

<img width="1087" alt="image" src="https://user-images.githubusercontent.com/28296417/102232463-7e9c0180-3f32-11eb-8520-7cb23c874435.png">


## Workflow
- 작업할 이슈를 `Doing` 칸반보드에 옮긴다.
- `git checkout -b feature/기능이름` 으로 브렌치 생성 및 체크아웃한다.
- 해당 이슈를 작업한다.
- `git push origin feature/기능이름`으로 원격저장소에 푸쉬한다.
- `origin/feature/기능이름` -> `origin/develop`을으로 merge requests 요청한다. (issue auto close)
- self review 이후 approve시, Squash and Merge한다.

## branch strategy
- git flow 전략 사용
    - `master` -> 배포가 이뤄지는 최종브렌치
    - `develop` -> 작업내역들이 합쳐지는 브렌치
    - `feature` -> 기능단위의 작업 브렌치 -> 로컬단에서는 `feature/기능` 으로 관리
    - `hotfix` -> 버그 수정 브렌치
    
## Support
- [SW마에스트로](http://swmaestro.org/user/main.do)
