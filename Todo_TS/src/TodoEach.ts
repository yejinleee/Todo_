import { createTodoElement } from './createElement';

export function TodoEach(
  this: any,
  { $target, state, handleComplete, handleDelete, rendering }: any,
) {
  this.render = () => {
    const $todo = document.createElement('ul');
    $target.appendChild($todo);
    console.log('?', state);
    state &&
      state.map(({ text, isCompleted, idx }: any) => {
        const todoDiv = document.createElement('div');
        todoDiv.className = 'list_div';

        // prettier-ignore
        const todoLi = createTodoElement({$target: todoDiv,element: "li",idx,text});
        if (isCompleted) {
          todoLi.className = 'done';
        }
        todoLi.addEventListener('click', (e: any) => {
          const idx = e.target.dataset.idx;
          handleComplete(parseInt(idx));
          rendering;
        });

        // prettier-ignore
        const newTodoBtn = createTodoElement({$target: todoDiv, element:"button", idx, text:"🗑️"})
        newTodoBtn.addEventListener('click', (e: any) => {
          const idx = e.target.dataset.idx;
          handleDelete(parseInt(idx));
          rendering;
        });

        $todo.appendChild(todoDiv);
      });
  };
  this.render();
}
