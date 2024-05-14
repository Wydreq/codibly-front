import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HomeService} from "../home.service";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  this.homeService.fetchForecast();
  }

}
