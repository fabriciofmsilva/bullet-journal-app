const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    display: block;
  }
</style>
<div>Index Works!</div>
<a href="/#/daily-log">Daily Log</a>
`

export class Index extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
