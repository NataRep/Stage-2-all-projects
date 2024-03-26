import App from '../app/app';
import { State } from '../app/state';
import Page from './page';

class WinnersPageView extends Page {
  constructor(state: State, app: App) {
    super(app);
  }
}

export default WinnersPageView;
