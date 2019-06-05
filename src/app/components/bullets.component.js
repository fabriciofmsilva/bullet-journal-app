const CLASS = {
  LIST: 'list',
};

const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    display: block;
  }

  .${CLASS.LIST} {
    padding-left: 1rem;
  }
</style>
<ul class="${CLASS.LIST}">
<slot></slot>
</ul>
`

export class Bullets extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
