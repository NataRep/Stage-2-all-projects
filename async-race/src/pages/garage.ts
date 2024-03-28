import './garage.scss';
import App from '../app/app';
import Form from '../components/form/form';
import RaceTable from '../components/race-table.ts/race-table';
import Page from './page';
import { Car } from '../utils/interfaces';
import Button from '../components/button/button';

class GaragePageView extends Page {
  constructor(app: App) {
    super(app);

    const formWrapper = this.createForm(app);
    const toolButtonsRow = this.createToolButtonsRow();
    this.mainContent.append(formWrapper);
    this.mainContent.append(toolButtonsRow);

    const description = document.createElement('p');
    description.textContent = 'Это пример минимального контента';
    this.mainContent.appendChild(description);
  }

  private createForm(app: App): HTMLElement {
    const formWrapper = document.createElement('div');
    formWrapper.className = 'form-wrapper';
    const formCreateCar = Form.create(
      app.state.inputCreateValue,
      app.state.inputCreateColor,
      'form_create-car',
      'Create',
      ['button_create', 'button_blue'],
      () => console.log('создаю машинку')
    );
    const formUpdateCar = Form.create(
      app.state.inputUpdateValue,
      app.state.inputUpdateColor,
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

  public addRaceTable(app: App, cars: Car[]) {
    app.raceTable = new RaceTable();
    const table = app.raceTable.createTable(cars);
    this.mainContent.append(table);
  }
}

export default GaragePageView;
