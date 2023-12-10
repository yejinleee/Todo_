export default function TodoForm(this: any, { $target, onSubmit }: any) {
  const $form = document.createElement('form');
  $target.appendChild($form);

  let isInit = false;

  this.render = () => {
    $form.innerHTML = `
      <input type = "text" name = "todo"/>
      <button>➕</button>`;
    if (!isInit) {
      $form.addEventListener('submit', (e) => {
        e.preventDefault();

        const $input = <HTMLInputElement>(
          $form.querySelector('input[name=todo]')
        );
        const text = $input.value;
        if (text.length > 1) {
          $input.value = '';

          onSubmit(text);
        }
      });
    }
    isInit = !isInit;
  };
  this.render();
}
