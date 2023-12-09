import { createTodoElement } from "./createElement.js";

export function TodoEach({
  $target,
  state,
  handleComplete,
  handleDelete,
  rendering,
}) {
  this.render = () => {
    const $todo = document.createElement("ul");
    $target.appendChild($todo);
    state.map(({ text, isCompleted, idx }) => {
      const todoDiv = document.createElement("div");
      todoDiv.className = "list_div";

      // prettier-ignore
      const todoLi = createTodoElement({$target: todoDiv,element: "li",idx,text});
      if (isCompleted) {
        todoLi.className = "done";
      }
      todoLi.addEventListener("click", (e) => {
        const idx = e.target.dataset.idx;
        handleComplete(parseInt(idx));
        rendering;
      });

      // prettier-ignore
      const newTodoBtn = createTodoElement({$target: todoDiv, element:"button", idx, text:"🗑️"})
      newTodoBtn.addEventListener("click", (e) => {
        const idx = e.target.dataset.idx;
        handleDelete(parseInt(idx));
        rendering;
      });

      $todo.appendChild(todoDiv);
    });
  };
  this.render();
}
