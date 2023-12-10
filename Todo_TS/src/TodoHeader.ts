export default function TodoHeader(this: any, { $target, text }: any) {
  const $header = document.createElement('h1');

  $target.appendChild($header);

  this.render = () => {
    $header.textContent = text;
  };
  this.render();
}
