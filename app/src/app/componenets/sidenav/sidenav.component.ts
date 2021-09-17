import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { MapboxService } from '../../services/mapbox.service';

import { environment } from '../../../environments/environment';

import { FormdialogComponent } from '../formdialog/formdialog.component';
import { Plot } from '../../Plot';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  plots: Plot[] = [];
  fakedata: any;
  plot: Plot = { isDraw: false, name: '' };
  name: string;
  map: mapboxgl.Map;
  draw: MapboxDraw;
  style = 'mapbox://styles/mapbox/satellite-v9';
  zoom: number = 10;
  lat = 35.75;
  lng = -5.75;
  title: string = 'Map Sowit';

  constructor(
    private dialog: MatDialog,
    private mapboxService: MapboxService
  ) {}

  ngOnInit(): void {
    this.mapboxService.getPlots().subscribe((plots) => (this.plots = plots));

    (mapboxgl as any).accessToken = environment.mapbox;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
    });

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  openDialog() {
    let dialogRef = this.dialog.open(FormdialogComponent, {
      data: { name: 'ayoub' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('result', result);
      if (result.name) {
        this.plot = result;
        console.log('plot filled', this.plot);
        this.plots.push(this.plot);
        this.draw_();
        console.log(this.plots);
      }
    });
  }

  draw_(): void {
    // if (this.draw.getAll().features.length > 0) this.draw.deleteAll();
    this.draw = new MapboxDraw({
      displayControlsDefault: true,
      controls: {
        polygon: true,
        trash: true,
      },
      defaultMode: 'draw_polygon',
    });
    this.map.addControl(this.draw, 'top-left');

    this.map.on('draw.create', this.updateArea);
    this.map.on('draw.delete', this.updateArea);
    this.map.on('draw.update', this.updateArea);
    this.map.on('draw.selectionchange', this.stuff);
    this.map.on('draw.click', this.stuff);
  }

  stuff(event: any) {
    console.log('this.draw', this.draw);
  }

  updateArea = (e: any) => {
    console.log('e', this.draw);
    if (e.features.length > 1) {
      setTimeout(() => {
        this.draw.deleteAll();
      }, 3000);
    }
    const type_ = e.features[0]?.geometry?.type;
    const { lng: lon, lat } = e.target.transform._center;

    const zoom = e.target.transform.tileZoom;

    switch (type_) {
      case 'Polygon':
        const geo = turf.polygon([e.features[0].geometry.coordinates[0]]);
        const options = { tolerance: 0.01, highQuality: false };
        const simplified = turf.simplify(geo, options);
        const rounded_area =
          Math.round(turf.area(simplified) * 100) / 100 / 1000;

        const url = this.mapboxService.getStaticImageApi({
          lon: simplified.geometry.coordinates[0][0][0],
          lat: simplified.geometry.coordinates[0][
            simplified.geometry.coordinates.length - 1
          ][1],
          zoom: zoom,
          overlay: null,
          width: '600',
          height: '500',
          geojson: JSON.stringify(simplified),
        });
        this.lng = lon;
        this.lat = lat;
        if (this.plot.name) {
          const obj = {
            name: this.plot.name,
            isDraw: false,
            area: rounded_area.toFixed(2),
            image_url_plot: url,
            geojson: simplified,
          };
          this.addPlot_(obj);
          this.plots.pop();
          this.plot.isDraw = false;
          this.plots.push(obj);
          console.log(this.plots);
        }

        break;
      case 'Feature':
        console.log('this is a feature');
        break;
      default:
        console.log('is not a polygon');
    }
  };

  setToDefault = () => {
    this.plot = { isDraw: false, name: '' };
    this.map.removeControl(this.draw);
    this.map.remove();
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 10,
      center: [this.lng, this.lat],
    });
    this.map.addControl(new mapboxgl.NavigationControl());

    this.draw = this.draw = new MapboxDraw({
      displayControlsDefault: true,
      controls: {
        polygon: true,
        trash: false,
      },
      defaultMode: 'draw_polygon',
    });
  };

  onDrawPlot = (plot: Plot) => {
    console.log('yes my nigga', plot);
    this.plot = plot;
    console.log('this is plot', this.plot);
  };

  addPlot_(plot: Plot) {
    this.mapboxService.addPlot(plot).subscribe((data) => this.setToDefault());
    this.plots.push(plot);
  }
}
