'use client';

import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import { Circle, Fill, Stroke, Style, Text } from 'ol/style';
import { useEffect, useRef, useState } from 'react';

import { PanelBig } from '@/components/ui/custom/PanelBig';
import { getIconEmoji } from '@/shared/lib/utils/iconMap';
import { useMapCustomerStore } from '@/stores/useMapCustomerStore';

const CustomerMapRegion = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<Map | null>(null);
  const [isMapReady, setIsMapReady] = useState(false);
  const { data, fetchCustomerMapData } = useMapCustomerStore();

  useEffect(() => {
    fetchCustomerMapData();
  }, [fetchCustomerMapData]);

  useEffect(() => {
    if (!data) return;
    if (!mapRef.current) return;

    const markerFeatures = data?.locations.map((location) => {
      if (
        !location ||
        !Array.isArray(location.coordinates) ||
        location.coordinates.length !== 2 ||
        typeof location.coordinates[0] !== 'number' ||
        typeof location.coordinates[1] !== 'number'
      ) {
      }
      const feature = new Feature<Point>({
        geometry: new Point(fromLonLat(location.coordinates)),
        name: location.name,
      });

      feature.setStyle(
        new Style({
          image: new Circle({
            radius: 14,
            fill: new Fill({ color: '#ffffff' }),
            stroke: new Stroke({ color: location?.color, width: 2 }),
          }),
          text: new Text({
            text: getIconEmoji(location?.icon || 'map-pin'),
            fill: new Fill({ color: '#ffffff' }),
            font: 'bold 16px sans-serif',
            offsetY: 0,
            textAlign: 'center',
            textBaseline: 'middle',
          }),
        })
      );

      return feature;
    });

    const vectorSource = new VectorSource({
      features: markerFeatures,
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat(data?.center || [-47.9292, -15.7801]),
        zoom: data?.zoom || 12,
      }),
    });

    mapInstanceRef.current = map;

    const timeoutId = setTimeout(() => {
      setIsMapReady(true);
    }, 0);

    map.on('click', (event) => {
      map.forEachFeatureAtPixel(event.pixel, (feature) => {
        const name = feature.get('name') as string;
        alert(`${name}\n`);
      });
    });

    map.on('pointermove', (event) => {
      const pixel = map.getEventPixel(event.originalEvent);
      const hit = map.hasFeatureAtPixel(pixel);
      if (mapRef.current) {
        mapRef.current.style.cursor = hit ? 'pointer' : '';
      }
    });

    return () => {
      clearTimeout(timeoutId);
      map.setTarget(undefined);
    };
  }, [data]);

  return (
    <PanelBig
      title="Mapa de Clientes por Região"
      className="w-[852px] h-[466px] gap-16 opacity-100 pt-8 pr-6 pb-6 pl-6 rounded-3xl"
      contentClassName="py-6"
    >
      <div className="w-full h-75 relative">
        <div
          ref={mapRef}
          className="w-full h-full rounded-lg overflow-hidden"
        />
        {!isMapReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-lg">
            <div className="text-white">Carregando mapa...</div>
          </div>
        )}
      </div>
    </PanelBig>
  );
};

export default CustomerMapRegion;
