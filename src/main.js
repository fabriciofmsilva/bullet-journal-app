import './main.css';
import { Index } from './app/containers';
import { Bullets, Bullet, DailyLog } from './app/components';
import './app/route';

window.customElements.define('app-index', Index);

window.customElements.define('app-bullets', Bullets);
window.customElements.define('app-bullet', Bullet);
window.customElements.define('app-daily-log', DailyLog);
