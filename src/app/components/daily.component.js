import { WEEKDAY } from '../constants';

const CLASS = {
  DAILY: 'daily-log',
  TIME: 'time',
};

const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    display: block;
  }
</style>
<section class="${CLASS.DAILY}">
<h2><time class="${CLASS.TIME}"></time></h2>
<slot></slot>
</section>
`

export class DailyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this._setDate(this.getAttribute('date'));
  }

  _formatDate(date) {
    const _date = new Date(date);
    return `${_date.getUTCDate()}.${_date.getMonth() + 1}. ${WEEKDAY[_date.getUTCDay()].substr(0, 3)}`;
  }

  _setDate(date) {
    if (date) {
      const dateEl = this.shadowRoot.querySelector(`.${CLASS.TIME}`);
      dateEl.innerHTML = this._formatDate(date);
    }
  }
}
