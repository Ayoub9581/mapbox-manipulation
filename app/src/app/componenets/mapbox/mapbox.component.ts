import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MapboxService } from '../../services/mapbox.service';
import * as mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import * as turf from '@turf/turf';
import { Geometry } from 'geojson';

// import simplify from 'simplify-geojson';
// import * as simplify from 'simplify-geojson';
// npm install --save @types/simplify-geojson

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Plot } from 'src/app/Plot';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss'],
})
export class MapboxComponent implements OnInit {
  data: GeoJSON.FeatureCollection<GeoJSON.Point>;
  @Input() map: mapboxgl.Map;
  @Input() plot: Plot;
  center: [];
  draw: MapboxDraw;
  style = 'mapbox://styles/mapbox/satellite-v9';
  // style = 'mapbox://styles/mapbox/streets-v11';
  lat = 35.75;
  lng = -5.75;
  title: string = 'Map Sowit';
  @Output() onDrawPlot = new EventEmitter();
  @Output() updateArea = new EventEmitter();
  @Output() draw_ = new EventEmitter();
  constructor(private mapboxService: MapboxService) {}

  ngOnInit(): void {
    if (this.plot.isDraw) this.draw_.emit();
  }

  ngOnChanges() {
    console.log('map updated', this.map);
  }
}
