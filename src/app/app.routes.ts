import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home-page/home.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
];

