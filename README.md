# PROsentation-Frontend
PROsentation 프론트 개발을 위한 레포지토리 입니다.


## Installation
- git clone
```
    git clone https://git.swmgit.org/swmaestro/PROsentation-Frontend.git
```
- install package
```
    yarn
    npm install
```

## Usage
- project build
```
    yarn run build
    npm build
```
- project start
```
    yarn run start
    npm start
```

## Progess
- [Issue](https://13.125.91.162/swmaestro/PROsentation-Frontend/issues) 및 [Boards](https://13.125.91.162/swmaestro/PROsentation-Frontend/-/boards) 로 관리

## Development goal
- [Milestones](https://13.125.91.162/swmaestro/PROsentation-Frontend/-/milestones) 로 관리

## Workflow
- 작업할 이슈를 `Doing` 칸반보드에 옮긴다.
- `git checkout -b feature/기능이름` 으로 브렌치 생성 및 체크아웃한다.
- 해당 이슈를 작업한다.
- `git push origin feature`으로 원격저장소에 푸쉬한다.
- `origin/feature` -> `origin/develip`을으로 merge requests 요청한다.
- self review 이후 approve시, merge한다.
 
## branch strategy
- git flow 전략 사용
    - `master` -> 배포가 이뤄지는 최종브렌치
    - `develop` -> 작업내역들이 합쳐지는 브렌치
    - `feature` -> 기능단위의 작업 브렌치 -> 로컬단에서는 `feature/기능` 으로 관리
    - `hotfix` -> 버그 수정 브렌치

## Template
- [Commit message Template](https://13.125.91.162/swmaestro/PROsentation-Frontend/-/wikis/Commit-message-Template)
- [Isssue Template](https://13.125.91.162/swmaestro/PROsentation-Frontend/-/wikis/Issue-Template)
- [Merge requests Template](https://13.125.91.162/swmaestro/PROsentation-Frontend/-/wikis/Merge-requests-Template)