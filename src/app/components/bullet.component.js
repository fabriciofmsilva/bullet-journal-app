const CLASS = {
  BULLET: 'bullet',
}

const KEYCODE = {
  ENTER: 13,
};

const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    display: block;
  }

  :host([type="task"]) .bullet:before {
    content: "●";
  }

  :host([type="note"]) .bullet:before {
    content: "-";
  }

  :host([type="event"]) .bullet:before {
    content: "○";
  }

  .bullet {
    list-style: none;
  }

  .bullet:before {
    display: inline-block;
    width: 1rem;
    margin-right: .5rem;
    text-align: center;
  }
</style>
<li class="${CLASS.BULLET}"></li>
`

export class Bullet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this._setLabel();
    this._setEvents();
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector(`.${CLASS.BULLET}`)
      .removeEventListener('click', this._onBulletClick);
    this.shadowRoot.querySelector(`.${CLASS.BULLET}`)
      .removeEventListener('keydown', this._onBulletKeydown);
  }

  _onBulletClick(event) {
    event.target.setAttribute('contentEditable', true);
  }

  _onBulletKeydown(event) {
    if (event.keyCode === KEYCODE.ENTER) {
      event.preventDefault();
      event.target.blur();
    }
  }

  _setEvents() {
    this.shadowRoot.querySelector(`.${CLASS.BULLET}`)
      .addEventListener('click', this._onBulletClick);
    this.shadowRoot.querySelector(`.${CLASS.BULLET}`)
      .addEventListener('keydown', this._onBulletKeydown);
  }

  _setLabel() {
    const bullet = this.shadowRoot.querySelector(`.${CLASS.BULLET}`);
    bullet.innerHTML = this.getAttribute('label');
  }
}
