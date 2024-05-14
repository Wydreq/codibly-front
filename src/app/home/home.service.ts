import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  fetchForecast() {
    navigator.geolocation.getCurrentPosition(position => {
     this.http.get(`http://localhost:5285/api/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`).subscribe(res => console.log(res))
    })
  }
}
