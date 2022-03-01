import { useEffect } from 'react';
import Map from './Map';
import { getRoute } from './Map/utils/route';
import { MapMenu } from './MapMenu/MapMenu';

export function App() {
  return (
    <>
      <Map />
      <MapMenu />
    </>
  );
}
