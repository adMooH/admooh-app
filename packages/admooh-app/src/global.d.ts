import IAdmoohApp from './interfaces/IAdmoohApp';

export {}; // this file needs to be a module
declare global {
  interface Window {
    admoohApp: IAdmoohApp;
  }
}
