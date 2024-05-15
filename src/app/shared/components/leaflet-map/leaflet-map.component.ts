import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './leaflet-map.component.html',
  styleUrl: './leaflet-map.component.scss'
})
export class LeafletMapComponent implements AfterViewInit {
  @Output() mapClick = new EventEmitter<L.LatLng>();
  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 50.86670430013982, 20.601599431828305 ],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.map.on("click", (e: any) => {
      this.mapClick.emit(e.latlng);
    });
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
