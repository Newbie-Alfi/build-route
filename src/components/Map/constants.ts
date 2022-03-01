import { LineString, MultiPoint } from 'ol/geom';
import { Fill, Icon, Stroke, Style } from 'ol/style';
import CircleStyle from 'ol/style/Circle';
import routeStart from '../../assets/images/route-staert.svg';

export const STYLE = {
  CAR_ROUTE: new Style({
    stroke: new Stroke({
      color: '#874ee7',
      width: 3,
    }),
  }),

  CAR: new Style({
    // image: new Icon({
    //   src: routeStart,
    // }),
    image: new CircleStyle({
      radius: 10,
      stroke: new Stroke({
        color: '#f25130',
        width: 7,
      }),
      fill: new Fill({
        color: 'white',
      }),
    }),
    geometry: (f) => {
      const geom = f.getGeometry();
      if (geom instanceof LineString) {
        const coordinates = geom.getCoordinates();
        return new MultiPoint([
          coordinates[0],
          coordinates[coordinates.length - 1],
        ]);
      }
    },
  }),

  NOT_FOUND: new Style({
    stroke: new Stroke({
      color: '#888b8d',
      width: 3,
      lineDash: [20, 10],
      miterLimit: 100,
      lineCap: 'round',
    }),
    geometry: (f) => {
      const geom = f.getGeometry();
      if (geom instanceof LineString) {
        const coordinates = geom.getCoordinates();
        return new LineString([coordinates[0], coordinates[1]]);
      }
    },
  }),
};
