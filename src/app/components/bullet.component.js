const BULLET = {
  TASK: '●',
  DONE: 'x',
  MIGRATED: '>',
  SCHEDULED: '<',
  IRRELEVANT: '',
  NOTE: '―',
  EVENT: '○',
};

const CLASS = {
  BULLET: 'bullet',
  LABEL: 'label',
  ITEM: 'item',
  SIGNIFIER: 'signifier',
};

const KEYCODE = {
  ENTER: 13,
};

const SIGNIFIER = {
  PRIORITY: '*',
  INSPIRATION: '!',
};

const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    display: block;
  }

  :host([type="irrelevant"]) .${CLASS.ITEM} {
    text-decoration: line-through;
  }

  .${CLASS.ITEM} {
    list-style: none;
  }

  .${CLASS.SIGNIFIER} {
    display: inline-block;
    width: .5rem;
    margin-left: -1rem;
    text-align: center;
  }

  .${CLASS.BULLET} {
    display: inline-block;
    width: 1rem;
    margin-right: .5rem;
    text-align: center;
  }
</style>
<li class="${CLASS.ITEM}">
  <span class="${CLASS.SIGNIFIER}"></span>
  <span class="${CLASS.BULLET}"></span>
  <span class="${CLASS.LABEL}"></span>
</li>
`

export class Bullet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this._setBullet(this.getAttribute('type'), this.getAttribute('status'));
    this._setLabel(this.getAttribute('label'));
    this._setSignifier(this.getAttribute('signifier'));
    this._setEvents();
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector(`.${CLASS.LABEL}`)
      .removeEventListener('click', this._onBulletClick);
    this.shadowRoot.querySelector(`.${CLASS.LABEL}`)
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
    this.shadowRoot.querySelector(`.${CLASS.LABEL}`)
      .addEventListener('click', this._onBulletClick);
    this.shadowRoot.querySelector(`.${CLASS.LABEL}`)
      .addEventListener('keydown', this._onBulletKeydown);
  }

  _setBullet(type, status) {
    if (type) {
      const bulletEl = this.shadowRoot.querySelector(`.${CLASS.BULLET}`);
      bulletEl.innerHTML = status ? BULLET[status.toUpperCase()] : BULLET[type.toUpperCase()];
    }
  }

  _setLabel(label) {
    if (label) {
      const labelEl = this.shadowRoot.querySelector(`.${CLASS.LABEL}`);
      labelEl.innerHTML = label;
    }
  }

  _setSignifier(signifier) {
    if (signifier) {
      const signifierEl = this.shadowRoot.querySelector(`.${CLASS.SIGNIFIER}`);
      signifierEl.innerHTML = SIGNIFIER[signifier.toUpperCase()];
    }
  }
}
