import { MapStore } from './MapStore';

class RootStore {
  map: MapStore;
  constructor() {
    this.map = new MapStore();
  }
}

export const store = new RootStore();
