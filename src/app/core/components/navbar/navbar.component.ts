import {Component, HostBinding, OnInit} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatSlideToggleModule, MatSlideToggleModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  switchTheme = new FormControl(false);
  @HostBinding('class') className = ''
  darkClass = `theme-dark`;
  lightClass = `theme-light`;

  constructor(private overlay: OverlayContainer) {
  }

  ngOnInit() {
    this.switchTheme.valueChanges.subscribe(currentMode => {
      this.className = currentMode ? this.darkClass : this.lightClass;
      if(currentMode) {
        this.overlay.getContainerElement().classList.add(this.darkClass);
      } else {
        this.overlay.getContainerElement().classList.remove(this.darkClass);
      }
    })
  }
}
