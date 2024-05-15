import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IForecastItem} from "../shared/interfaces/forecast.interface";
import {BehaviorSubject} from "rxjs";
import {LatLng} from "leaflet";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  forecasts$ = new BehaviorSubject<IForecastItem[] | null>(null);

  constructor(private http: HttpClient) { }

  fetchForecast() {
    navigator.geolocation.getCurrentPosition(position => {
      const params = new HttpParams()
        .set('latitude', position.coords.latitude.toString())
        .set('longitude', position.coords.longitude.toString());
     this.http.get<IForecastItem[]>(environment.apiUrl, {params}).subscribe(res => this.forecasts$.next(res));
    })
  }

  fetchForecastByCoords(latlng: LatLng) {
    const params = new HttpParams()
      .set('latitude', latlng.lat)
      .set('longitude', latlng.lng);
    this.http.get<IForecastItem[]>(environment.apiUrl, {params}).subscribe(res => this.forecasts$.next(res));
  }
}
