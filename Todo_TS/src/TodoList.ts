import { ITodoList, ITodo, ICreateTodo } from '../types/todoTypes';

export default function TodoList({
  $target,
  initialState,
  handleComplete,
  handleDelete,
}: ITodoList) {
  const $listWrap = document.createElement('ul');
  $target && $target.appendChild($listWrap);

  const createTodoElement = ({ $target, element, idx, text }: ICreateTodo) => {
    const $element: any = document.createElement(element);
    ////// :HTMLElement 를 주면 Type 'number' is not assignable to type 'string'.ts(2322)
    $element.dataset.idx = idx;
    $element.innerHTML = text;
    $target && $target.appendChild($element);

    return $element;
  };

  let state = initialState;
  let isInit = false;

  const setState = (nextState: any) => {
    // console.log('TodoList에서 nextState', nextState);
    state = nextState;

    if (!isInit) {
      $listWrap.innerHTML = '';
    }

    state &&
      state.map(({ text, isCompleted, idx }: ITodo) => {
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
        });

        // prettier-ignore
        const newTodoBtn = createTodoElement({$target: todoDiv, element:"button", idx, text:"🗑️"})
        newTodoBtn.addEventListener('click', (e: any) => {
          const idx = e.target.dataset.idx;
          handleDelete(parseInt(idx));
        });

        $listWrap && $listWrap.appendChild(todoDiv);
      });
    // $target && $target.appendChild($listWrap);
    $listWrap && $listWrap.before($listWrap);
    // console.log(state);
  };

  setState(initialState);

  return { state, setState };
}
