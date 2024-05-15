import {Component, OnInit} from '@angular/core';
import {HomeService} from "../home.service";
import {MatTableModule} from "@angular/material/table";
import {IForecastItem} from "../../shared/interfaces/forecast.interface";
import {CommonModule} from "@angular/common";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LeafletMapComponent} from "../../shared/components/leaflet-map/leaflet-map.component";
import {MatButtonModule} from '@angular/material/button';
import {LatLng} from "leaflet";
import {WeatherIconComponent} from "../../shared/components/weather-icon/weather-icon.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatProgressSpinnerModule, LeafletMapComponent, MatButtonModule, WeatherIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  protected forecasts: IForecastItem[] | null = null;
  protected latlng: LatLng | null = null;
  protected columnNames = ['date', 'weatherCode', 'minTemperature', 'maxTemperature', 'estimatedGeneratedEnergy']

  ngOnInit() {
    this.homeService.forecasts$.subscribe((data) => {this.forecasts = data});
  this.homeService.fetchForecast();
  }

  handleMapClick(latlng: LatLng) {
    this.latlng = latlng;
  }

  searchForCoords(){
    if(this.latlng){
      this.homeService.fetchForecastByCoords(this.latlng);
    }
  }
}
