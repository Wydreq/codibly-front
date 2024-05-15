import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  standalone: true,
  imports: [],
  templateUrl: './weather-icon.component.html',
  styleUrl: './weather-icon.component.scss'
})
export class WeatherIconComponent {
  @Input({required: true}) weatherCode!: number;

  getIconName() : string {
    const sunny = [0,1];
    const cloudy = [2,3,45,48];
    const rainy = [51,53,55,56,57,61,63,65,66,67,80,81,82];
    const snowy = [71,73,75,77,85,86];
    const thunder = [95,96,99];

    if(sunny.includes(this.weatherCode)){
      return 'sun.svg'
    } else if(cloudy.includes(this.weatherCode)){
      return 'cloud.svg'
    } else if(rainy.includes(this.weatherCode)){
      return 'rain.svg'
    } else if(snowy.includes(this.weatherCode)){
      return 'snow.svg'
    } else if(thunder.includes(this.weatherCode)){
      return 'thunder.svg'
    } else {
      return 'question.svg'
    }
  }
}
