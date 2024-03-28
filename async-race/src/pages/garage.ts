import App from '../app/app';
import { State } from '../app/state';
import Form from '../components/form/form';
import RaceTable from '../components/race-table.ts/race-table';
import Page from './page';
import Button from '../components/button/button';

class GaragePageView extends Page {
  app: App;

  constructor(app: App) {
    super(app);
    this.app = app;

    const formWrapper = this.createForm();
    const toolButtonsRow = this.createToolButtonsRow();
    this.mainContent.append(formWrapper);
    this.mainContent.append(toolButtonsRow);

    const description = document.createElement('p');
    description.textContent = 'Это пример минимального контента';
    this.mainContent.appendChild(description);
  }

  private createForm(): HTMLElement {
    const formWrapper = document.createElement('div');
    formWrapper.className = 'form-wrapper';
    const formCreateCar = Form.create(
      this.app.state.inputCreateValue,
      this.app.state.inputCreateColor,
      'form_create-car',
      'Create',
      ['button_create', 'button_blue'],
      () => console.log('создаю машинку')
    );
    const formUpdateCar = Form.create(
      this.app.state.inputUpdateValue,
      this.app.state.inputUpdateColor,
      'form_update-car',
      'Update',
      ['button_update', 'button_blue'],
      () => console.log('изменяю машинку')
    );

    formWrapper.append(formCreateCar);
    formWrapper.append(formUpdateCar);
    return formWrapper;
  }

  private createToolButtonsRow(): HTMLElement {
    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.className = 'tool-buttons';

    const buttonRace = Button.create('Race', ['button_race', 'button_green'], () => console.log('начинаем гонку'));
    const buttonReset = Button.create('Reset', ['button_reset', 'button_green'], () =>
      console.log('возвращаем на исходные позиции')
    );
    const buttonGenerate = Button.create('Generate', ['button_generate', 'button_blue'], () =>
      console.log('создаем 100 машинок')
    );
    buttonsWrapper.append(buttonRace);
    buttonsWrapper.append(buttonReset);
    buttonsWrapper.append(buttonGenerate);

    return buttonsWrapper;
  }
}

export default GaragePageView;
