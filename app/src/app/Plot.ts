export interface Plot {
  id?: number;
  name: string;
  geojson?: object;
  image_url_plot?: string;
  isDraw?: boolean;
  area?: string | number;
}
