import axios from 'axios';
import { Coordinate } from 'ol/coordinate';

import { Feature, Map as olMap, View } from 'ol';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { STYLE } from '../constants';
import LineString from 'ol/geom/LineString';

type valueAddress = {
  order: number;
  id: string;
  name: string;
  point: string;
};

export const getRoute = async (address?: valueAddress[]) => {
  let points = '&point=49.932707,11.588051&point=50.3404,11.64705';
  // address.sort((a, b) => a.order - b.order);
  // address.forEach((adds) => {
  //   points += `&point=${adds.point}`;
  // });
  const key = '&key=0c52cda2-aa24-4773-9fcb-9b562fd50c88';
  const host = 'https://graphhopper.com/api/1/route?';
  const vehicle = `vehicle=car`; // transport
  const locale = '&locale=ru-Ru';
  const points_encoded = '&points_encoded=false';

  return await axios.get(
    `${host}${vehicle}${locale}${points_encoded}${key}${points}`
  );
};

export const createRouteFeature = (coords: Coordinate[]) => {
  const route = new LineString(coords);

  const routeFeature = new Feature({
    type: 'route',
    geometry: route,
  });

  const vector = new VectorLayer({
    source: new VectorSource({
      features: [routeFeature],
    }),
    style: [STYLE.CAR_ROUTE, STYLE.CAR, STYLE.NOT_FOUND],
  });
  vector.setZIndex(10);
  return vector;
};
