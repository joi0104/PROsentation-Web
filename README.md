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

## commit convention
- conventional commit 사용
```
<타입>(!): #<이슈 번호>. <제목>

# ---
# 제목은 한글로
# 제목은 명령문으로
# 제목 끝에 마침표(.) 금지
# 제목과 본문을 한 줄 띄워 분리하기
# 본문은 "어떻게" 보다 "무엇을", "왜"를 설명하기.
# 본문에 여러줄의 메시지를 작성할 땐 "-"로 구분
# 제목은 최대 30글자 까지 작성
# 본문은 한 줄에 최대 72글자 까지 작성합니다.
# ---

# ----
# <타입> 리스트
# feat : 새로운 기능
# fix : 버그 수정
# refactor : 코드 리팩터링 (코드 스타일 변경도 포함, 비즈니스 로직에 변경 없음 )
# docs : 문서 추가, 수정, 삭제
# test : 테스트 코드 추가, 수정, 삭제 (비즈니스 로직에 변경 없음 )
# chore : 기타 변경사항 (스크립트 수정 등)
# BREAKING CHANGE가 필요할 땐 타입 옆에 느낌표를 넣어주세요.
# ---
```

## issue template
<img width="927" alt="image" src="https://user-images.githubusercontent.com/28296417/89192871-1f230200-d5e0-11ea-96ef-279cbe0ba64a.png">
<img width="1001" alt="image" src="https://user-images.githubusercontent.com/28296417/89192794-03b7f700-d5e0-11ea-8b2b-193934299460.png">


## pull request template
<img width="1176" alt="image" src="https://user-images.githubusercontent.com/28296417/89194834-dc165e00-d5e2-11ea-8892-a055cc873670.png">

