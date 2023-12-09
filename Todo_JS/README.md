# Todo_VanillaJS

## 실행

```
npx serve -s
```

<br/>

## 📌 프로젝트 설명

- **VanillaJS**로 구현한 간단 Todo App

<br/>

## 👩‍💻 구현 사항

- [x] 컴포넌트에 new를 붙이지 않고 쓸 경우 에러가 나도록 방어코드
      -> 컴포넌트 내부에 `new.target` 검사
- [x] state를 갖는 컴포넌트의 경우, initialState를 받는 부분과 setState 함수에서 nextState를 받는 부분에서 state에 대한 validation을 추가
      -> `validationCheck.js`에서 todos의 배열 타입 확인, 각 todo의 키값 확인

### TodoList

- To do의 값의 isCompleted라는 값을 추가하여 TodoList의 Todo를 클릭하면 해당 값 토글
- Todo 값 삭제 이벤트 `handleDelete`

### TodoCount

- 완료된 Todo의 갯수 / 전제 Todo 갯수 표시

### TodoEach

- TodoList에서 그리는 각 투두 컴포넌트 분리

<img width = "50%" src="https://github.com/yejinleee/FEDC_code/assets/81412212/03641373-d254-478e-80af-f845c6c778d5"/>
