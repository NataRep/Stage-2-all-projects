import { Car, CarsData, SpeedCar, Winner } from '../utils/interfaces';

const PORT = 'http://127.0.0.1:3000';
class Api {
  static async fetchWithOptions(url: string, options: RequestInit, errorMessage: string): Promise<Response> {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Error HTTP: ' + response.status);
      }
      return response;
    } catch (error) {
      console.error(errorMessage, error.message);
    }
  }

  static async getCar(id: number): Promise<Car> {
    const pathUrl: string = '/garage/';
    const fullUrl: string = PORT + pathUrl + String(id);
    const options = {
      method: 'GET',
    };
    const response = await Api.fetchWithOptions(fullUrl, options, 'Error getting car: ');
    return (await response.json()) as Car;
  }

  static async getCars(page?: number, limit?: number): Promise<CarsData | undefined> {
    const pathUrl: string = '/garage/';
    let fullUrl: string = PORT + pathUrl;
    if (page || limit) fullUrl = fullUrl + '?';
    if (page) fullUrl = fullUrl + '_page=' + String(page);
    if (limit) fullUrl = page ? fullUrl + '&_limit=' + String(limit) : fullUrl + '_limit=' + String(limit);
    const options = {
      method: 'GET',
    };
    try {
      const response = await fetch(fullUrl, options);
      if (!response.ok) {
        console.error('Error:', response.statusText);
        return undefined;
      }
      const totalCount = response.headers.get('X-Total-Count');
      const data = (await response.json()) as Car[];
      return { cars: data, totalCount };
    } catch (error) {
      console.error('Error:', error.message);
      return undefined;
    }
  }

  static async createCar(name: string, color: string): Promise<Car> {
    const pathUrl: string = '/garage';
    const fullUrl: string = PORT + pathUrl;
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
    const response = await Api.fetchWithOptions(fullUrl, options, 'Error creating car: ');
    return (await response.json()) as Car;
  }

  static async deleteCar(id: number): Promise<void> {
    const pathUrl: string = '/garage/';
    const options = {
      method: 'DELETE',
    };
    const fullUrl: string = PORT + pathUrl + String(id);
    await Api.fetchWithOptions(fullUrl, options, 'Error deleting car: ');
  }

  static async updateCar(id: number, name: string, color: string): Promise<Car> {
    const pathUrl: string = '/garage/';
    const fullUrl: string = PORT + pathUrl + String(id);
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
    const response = await Api.fetchWithOptions(fullUrl, options, 'Error updating car: ');
    return (await response.json()) as Car;
  }

  static async startOrStopCar(id: number, status: 'started' | 'stopped') {
    const pathUrl: string = '/engine';
    const fullUrl: string = PORT + pathUrl + '?id=' + String(id) + '&status=' + status;

    const options = {
      method: 'PATCH',
    };
    const response = await Api.fetchWithOptions(fullUrl, options, 'Error start or stop car: ');
    return (await response.json()) as SpeedCar;
  }

  static async switchCarToDriveMode(id: number) {
    const pathUrl: string = '/engine';
    const fullUrl: string = PORT + pathUrl + '?id=' + String(id) + '&status=' + 'drive';

    const options = {
      method: 'PATCH',
    };
    try {
      const response = await fetch(fullUrl, options);
      if (!response.ok) {
        if (response.status === 404) {
          console.error('Engine parameters for car with such id was not found in the garage.');
        } else if (response.status === 429) {
          console.error('Drive already in progress.');
        }
        // Ошибка, промис отклонен
        throw new Error('Request failed with status: ' + response.status);
      } else {
        const json = await response.json();
        return json;
      }
    } catch (error) {
      // Ошибка, промис отклонен
      throw error;
    }
  }

  static async getWinners(
    page?: number,
    limit?: number,
    sort?: 'id' | 'wins' | 'time',
    order?: 'ASC' | 'DESC'
  ): Promise<{ winners: Winner[]; totalCount?: string } | undefined> {
    const pathUrl: string = '/winners';
    let fullUrl: string = PORT + pathUrl;
    if (page || limit || sort || order) fullUrl += '?';
    if (page) fullUrl += `_page=${page}&`;
    if (limit) fullUrl += `_limit=${limit}&`;
    if (sort) fullUrl += `_sort=${sort}&`;
    if (order) fullUrl += `_order=${order}`;
    const options = {
      method: 'GET',
    };
    try {
      const response = await fetch(fullUrl, options);
      if (!response.ok) {
        console.error('Error:', response.statusText);
        return undefined;
      }
      const totalCount = response.headers.get('X-Total-Count');
      const data = (await response.json()) as Winner[];
      return { winners: data, totalCount };
    } catch (error) {
      console.error('Error:', error.message);
      return undefined;
    }
  }

  static async getWinner(id: number): Promise<Winner> {
    const pathUrl: string = '/winners/';
    const fullUrl: string = PORT + pathUrl + String(id);
    const options = {
      method: 'GET',
    };
    const response = await Api.fetchWithOptions(fullUrl, options, 'Error getting winner: ');
    return (await response.json()) as Winner;
  }

  static async createWinner(id: number, wins: number, time: number): Promise<Winner> {
    const pathUrl: string = '/winners';
    const fullUrl: string = PORT + pathUrl;
    const winnerData: Winner = {
      id: id,
      wins: wins,
      time: time,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(winnerData),
    };
    const response = await Api.fetchWithOptions(fullUrl, options, 'Error creating winner: ');
    return (await response.json()) as Winner;
  }

  static async deleteWinner(id: number): Promise<void> {
    const pathUrl: string = '/winners/';
    const fullUrl: string = PORT + pathUrl + String(id);
    const options = {
      method: 'DELETE',
    };
    try {
      await Api.fetchWithOptions(fullUrl, options, 'Error deleting winner: ');
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  static async updateWinner(id: number, wins: number, time: number): Promise<Winner> {
    const pathUrl: string = '/winners/';
    const fullUrl: string = PORT + pathUrl + String(id);
    const winnerData = {
      wins: wins,
      time: time,
    };
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(winnerData),
    };
    try {
      const response = await Api.fetchWithOptions(fullUrl, options, 'Error updating winner: ');
      return (await response.json()) as Winner;
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
}
export default Api;
