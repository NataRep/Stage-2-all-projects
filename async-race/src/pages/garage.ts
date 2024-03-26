import App from '../app/app';
import { State } from '../app/state';
import Form from '../components/form/form';
import Page from './page';
//import Button from '../components/button/button';

class GaragePageView extends Page {
  constructor(state: State, app: App) {
    super(app);

    const forms = document.createElement('div');
    forms.className = 'forms-wrapper';
    const formCreateCar = Form.create(
      app.state.inputCreateValue,
      app.state.inputCreateColor,
      'form_create-car',
      'Create',
      ['button_create'],
      () => console.log('создаю машинку')
    );
    const formUpdateCar = Form.create(
      app.state.inputUpdateValue,
      app.state.inputUpdateColor,
      'form_update-car',
      'Update',
      ['button_update'],
      () => console.log('изменяю машинку')
    );

    forms.append(formCreateCar);
    forms.append(formUpdateCar);
    this.mainContent.appendChild(forms);

    const description = document.createElement('p');
    description.textContent = 'Это пример минимального контента';
    this.mainContent.appendChild(description);
  }
}

export default GaragePageView;
