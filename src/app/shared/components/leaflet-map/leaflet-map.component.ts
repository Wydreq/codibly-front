import {Component} from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {latLng, tileLayer} from "leaflet";

@Component({
  selector: 'app-leaflet-map',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './leaflet-map.component.html',
  styleUrl: './leaflet-map.component.scss'
})
export class LeafletMapComponent {

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 10,
    center: latLng(50.86681956914699, 20.621396179070363)
  };

  mapClickHandler() {
    console.log();
  }
}
