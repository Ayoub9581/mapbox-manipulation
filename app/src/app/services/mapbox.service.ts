import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '..//../environments/environment';
import { Overlay } from '@angular/cdk/overlay';
import { Plot } from '../Plot';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

export interface MapBox {
  overlay?: any;
  lon: string;
  lat: string;
  zoom: string;
  width?: string;
  height?: string;
  geojson?: any;
}

@Injectable({
  providedIn: 'root',
})
export class MapboxService {
  private apiUrl = `https://api.mapbox.com/styles/v1/${environment.username}`;
  private apiURL = environment.API_URL;
  constructor(private http: HttpClient) {}

  getStaticImageApi({
    overlay,
    lon,
    lat,
    zoom,
    width,
    height,
    geojson,
  }: {
    overlay: any;
    lon: any;
    lat: any;
    zoom: any;
    width: any;
    height: any;
    geojson: any;
  }): string {
    let newUrlApi = `${
      this.apiUrl
    }/cktnncr560gaq17lwo7uid3no/static/geojson(${encodeURIComponent(
      geojson
    )})/`;
    if (overlay) newUrlApi += `${overlay}`;
    newUrlApi += `${lon},${lat},${zoom}/${width}x${height}@2x?access_token=${environment.mapbox}`;

    return newUrlApi;
  }

  getPlots(): Observable<Plot[]> {
    return this.http.get<Plot[]>(`${this.apiURL}/plots/`);
  }

  addPlot(plot: Plot): Observable<Plot> {
    console.log('POST TO', this.apiURL, plot);
    return this.http.post<Plot>(`${this.apiURL}/plots/`, plot, httpOption);
  }
}
