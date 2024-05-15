import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IForecastItem} from "../shared/interfaces/forecast.interface";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  forecasts$ = new BehaviorSubject<IForecastItem[] | null>(null);

  constructor(private http: HttpClient) { }

  fetchForecast() {
    navigator.geolocation.getCurrentPosition(position => {
     this.http.get<IForecastItem[]>(`http://localhost:5285/api/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`).subscribe(res => this.forecasts$.next(res));
    })
  }
}
