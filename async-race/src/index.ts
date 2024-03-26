import Api from './app/api';

//api.createCar('ford nata', '#000000').then((result) => console.log(result));
Api.getCars().then((result) => console.log(result));

Api.updateWinner(1, 2, 4.2)
  .then(() => Api.getWinners())
  .then((result) => console.log(result));
//  .startOrStopCar(2, 'started')
//  .then((result) => console.log(result))
//  .then(() => api.startOrStopCar(2, 'stopped'))
//  .then((result) => console.log(result));
