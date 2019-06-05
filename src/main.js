import './main.css';
import './app/route';
import { Index, DailyLog } from './app/containers';
import { BulletsComponent, BulletComponent, DailyComponent } from './app/components';

window.customElements.define('app-index', Index);
window.customElements.define('app-daily-log', DailyLog);

window.customElements.define('app-bullets', BulletsComponent);
window.customElements.define('app-bullet', BulletComponent);
window.customElements.define('app-daily', DailyComponent);
