const template = document.createElement('template');

template.innerHTML = `
<style>
  :host {
    display: block;
  }

  :host([type="task"]):before {
    content: "●";
  }

  :host([type="note"]):before {
    content: "-";
  }

  :host([type="event"]):before {
    content: "○";
  }
</style>
<slot></slot>
`

export class Bullet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
