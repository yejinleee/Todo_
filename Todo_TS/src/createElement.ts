export const createTodoElement = ({ $target, element, idx, text }: any) => {
  const $element = document.createElement(element);

  $element.dataset.idx = idx;
  $element.innerHTML = text;
  $target.appendChild($element);
  return $element;
};
