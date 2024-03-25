import { Car, SpeedCar } from '../utils/interfaces';
import { HexColor } from '../utils/types';

class Api {
  port: string;

  constructor(port: string) {
    this.port = port;
  }

  private async fetchWithOptions(url: string, options: RequestInit, errorMessage: string): Promise<Response> {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Ошибка HTTP: ' + response.status);
      }
      return response;
    } catch (error) {
      console.error(errorMessage, error.message);
    }
  }

  public async getCar(id: number): Promise<Car> {
    const pathUrl: string = '/garage/';
    const fullUrl: string = this.port + pathUrl + String(id);
    const options = {
      method: 'GET',
    };
    const response = await this.fetchWithOptions(fullUrl, options, 'Error getting car: ');
    return (await response.json()) as Car;
  }

  public async getCars(page?: number, limit?: number): Promise<Car[]> {
    const pathUrl: string = '/garage/';
    let fullUrl: string = this.port + pathUrl;
    if (page || limit) fullUrl = fullUrl + '?';
    if (page) fullUrl = fullUrl + '_page=' + String(page);
    if (limit) fullUrl = page ? fullUrl + '&_limit=' + String(limit) : fullUrl + '_limit=' + String(limit);
    const options = {
      method: 'GET',
    };
    const response = await this.fetchWithOptions(fullUrl, options, 'Error getting cars: ');
    return (await response.json()) as Car[];
  }

  public async createCar(name: string, color: HexColor): Promise<Car> {
    const pathUrl: string = '/garage';
    let fullUrl: string = this.port + pathUrl;
    const carData = {
      name: name,
      color: color,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData),
    };
    const response = await this.fetchWithOptions(fullUrl, options, 'Error creating car: ');
    return (await response.json()) as Car;
  }

  public async deleteCar(id: number): Promise<void> {
    const pathUrl: string = '/garage/';
    const options = {
      method: 'DELETE',
    };
    const fullUrl: string = this.port + pathUrl + String(id);
    await this.fetchWithOptions(fullUrl, options, 'Error deleting car: ');
  }

  public async updateCar(id: number, name: string, color: HexColor): Promise<Car> {
    const pathUrl: string = '/garage/';
    const fullUrl: string = this.port + pathUrl + String(id);
    const carData = {
      name: name,
      color: color,
    };
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData),
    };
    const response = await this.fetchWithOptions(fullUrl, options, 'Error updating car: ');
    return (await response.json()) as Car;
  }

  public async startOrStopCar(id: number, status: 'started' | 'stopped') {
    const pathUrl: string = '/engine';
    const fullUrl: string = this.port + pathUrl + '?id=' + String(id) + '&status=' + status;

    const options = {
      method: 'PATCH',
    };
    const response = await this.fetchWithOptions(fullUrl, options, 'Error start or stop car: ');
    return (await response.json()) as SpeedCar;
  }

  public async switchCarToDriveMode(id: number) {
    const pathUrl: string = '/engine';
    const fullUrl: string = this.port + pathUrl + '?id=' + String(id) + '&status=' + 'drive';

    const options = {
      method: 'PATCH',
    };
    try {
      const response = await fetch(fullUrl, options);
      if (!response.ok) {
        if (response.status === 404) {
          console.error(
            'Engine parameters for car with such id was not found in the garage. Have you tried to set engine status to "started" before?'
          );
        } else if (response.status === 429) {
          console.error(
            "Drive already in progress. You can't run drive for the same car twice while it's not stopped."
          );
        } else if (response.status === 500) {
          console.error("Car has been stopped suddenly. It's engine was broken down.");
        } else {
          console.error('Wrong parameters:', await response.text());
        }
        return undefined;
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.error('Error:', error.message);
      return undefined;
    }
  }
}
export default Api;
