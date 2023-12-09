import { storageGetItem } from "./storage.js";

export default function TodoCount({ $target }) {
  if (!new.target) {
    throw new Error("컴포넌트를 생성자 함수로 호출해주세요");
  }

  const $count = document.createElement("div");
  $target.appendChild($count);

  this.render = () => {
    let todos = storageGetItem("todos");
    if (todos) {
      const lenAll = todos.length;
      const lenCompleted = todos.filter((todo) => todo.isCompleted).length;

      $count.innerHTML = lenAll
        ? `You did ${lenCompleted} out of ${lenAll} !`
        : "";
    }
  };
  this.render();
}
