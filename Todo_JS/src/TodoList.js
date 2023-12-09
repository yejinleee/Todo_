import validationCheck from "./validationCheck.js";
import { TodoEach } from "./TodoEach.js";

export function TodoList({
  $target,
  initialState,
  handleComplete,
  handleDelete,
}) {
  if (!new.target) {
    throw new Error("컴포넌트를 생성자 함수로 호출해주세요");
  }
  const $listWrap = document.createElement("div");
  $target.appendChild($listWrap);

  if (validationCheck(initialState)) {
    this.state = initialState;
  } else {
    throw new Error("입력값 형식이 잘못되었습니다");
  }

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  let isInit = false;

  this.render = () => {
    const rendering = this.render;
    if (!isInit) {
      $listWrap.innerHTML = "";
    }
    new TodoEach({
      $target: $listWrap,
      state: this.state,
      handleComplete,
      handleDelete,
      rendering,
    });
  };

  this.render();
}
