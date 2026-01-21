export type Location = {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number];
  category: string;
  address: string;
  icon: string;
  color: string;
};

export type MapData = {
  center: [number, number];
  zoom: number;
  locations: Location[];
};

export type MapCustomerResponse = {
  data: MapData;
};

