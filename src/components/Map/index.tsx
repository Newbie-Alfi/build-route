import { Component, createRef, ReactNode } from 'react';
import { Feature, Map as olMap, View } from 'ol';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { createRouteFeature, getRoute } from './utils/route';
import { observer } from 'mobx-react-lite';
import { Icon, Style } from 'ol/style';
import location from '../../assets/images/location.svg';

import './style.css';

export default observer(() => <Map />);

class Map extends Component {
  private mapRef = createRef<HTMLDivElement>();

  componentDidMount() {
    if (!this.mapRef.current) throw new Error('');

    const map = new olMap({
      target: this.mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        zoom: 11,
        center: [11.58906, 49.932663],
        projection: 'EPSG:4326',
      }),
      controls: [],
    });

    map.on('dblclick', (event) => {
      const coords = event.coordinate;

      const startPoint = new Feature({
        geometry: new Point(coords),
        style: new Style({
          image: new Icon({
            src: location,
          }),
        }),
      });

      map.addLayer(
        new VectorLayer({
          source: new VectorSource({
            features: [startPoint],
          }),
        })
      );
    });

    getRoute().then((res) => {
      const vector = createRouteFeature(res.data.paths[0].points.coordinates);
      map.addLayer(vector);
    });
  }
  render(): ReactNode {
    return <div ref={this.mapRef} className="map"></div>;
  }
}
