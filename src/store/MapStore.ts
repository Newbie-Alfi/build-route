import { makeAutoObservable } from 'mobx';
import { Map as olMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const initialLayers = [
  new TileLayer({
    source: new OSM(),
  }),
];

const defaultView = new View({
  zoom: 5,
  center: [945, 945],
  projection: 'EPSG:4326',
});

export class MapStore {
  readonly map: olMap;
  _target: HTMLDivElement | undefined;

  constructor() {
    makeAutoObservable(this);

    this.map = new olMap({
      target: this._target,
      layers: initialLayers,
      view: defaultView,
    });
  }
}
