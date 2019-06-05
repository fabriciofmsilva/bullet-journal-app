const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    display: block;
  }
</style>
<div>Daily Log Works!</div>
<app-daily date="2019-06-05">
<app-bullets>
  <app-bullet label="I'm a task!" type="task"></app-bullet>
  <app-bullet label="I'm a done task!" type="done"></app-bullet>
  <app-bullet label="I'm a migrated task!" type="task" status="migrated"></app-bullet>
  <app-bullet label="I'm a scheduled task!" type="task" status="scheduled"></app-bullet>
  <app-bullet label="I'm a irrelevant task!" type="task" status="irrelevant"></app-bullet>
  <app-bullet label="I'm a note!" type="note"></app-bullet>
  <app-bullet label="I'm a priority note!" type="note" signifier="priority"></app-bullet>
  <app-bullet label="I'm an inspiration note!" type="note" signifier="inspiration"></app-bullet>
  <app-bullet label="I'm a event!" type="event"></app-bullet>
  <app-bullets>
    <app-bullet label="I'm a task!" type="task"></app-bullet>
    <app-bullet label="I'm a priority task!" type="task" signifier="priority"></app-bullet>
    <app-bullets>
      <app-bullet label="I'm a task!" type="task"></app-bullet>
      <app-bullet label="I'm a priority task!" type="task" signifier="priority"></app-bullet>
    </app-bullets>
  </app-bullets>
</app-bullets>
</app-daily>
`

export class DailyLog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
