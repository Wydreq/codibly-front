import {Component, OnInit} from '@angular/core';
import {HomeService} from "../home.service";
import {MatTableModule} from "@angular/material/table";
import {IForecastItem} from "../../shared/interfaces/forecast.interface";
import {CommonModule} from "@angular/common";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LeafletMapComponent} from "../../shared/components/leaflet-map/leaflet-map.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatProgressSpinnerModule, LeafletMapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  protected forecasts: IForecastItem[] | null = null;
  protected columnNames = ['date', 'weatherCode', 'minTemperature', 'maxTemperature', 'estimatedGeneratedEnergy']

  ngOnInit() {
    this.homeService.forecasts$.subscribe((data) => {this.forecasts = data});
  this.homeService.fetchForecast();
  }

  getIconName(weatherCode: number) : string {
    const sunny = [0,1];
    const cloudy = [2,3,45,48];
    const rainy = [51,53,55,56,57,61,63,65,66,67,80,81,82];
    const snowy = [71,73,75,77,85,86];
    const thunder = [95,96,99];

    if(sunny.includes(weatherCode)){
      return 'sun.svg'
    } else if(cloudy.includes(weatherCode)){
      return 'cloud.svg'
    } else if(rainy.includes(weatherCode)){
      return 'rain.svg'
    } else if(snowy.includes(weatherCode)){
      return 'snow.svg'
    } else if(thunder.includes(weatherCode)){
      return 'thunder.svg'
    } else {
      return 'question.svg'
    }
  }
}
