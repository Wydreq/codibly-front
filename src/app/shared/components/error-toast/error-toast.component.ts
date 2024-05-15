import {Component, OnInit} from '@angular/core';
import {ErrorToastService} from "./error-toast.service";

@Component({
  selector: 'app-error-toast',
  standalone: true,
  imports: [],
  templateUrl: './error-toast.component.html',
  styleUrl: './error-toast.component.scss'
})
export class ErrorToastComponent implements OnInit {

  protected message: string | null = null;

  constructor(private errorToastService: ErrorToastService) {}

  ngOnInit(): void {
    this.errorToastService.message$.subscribe(res => this.message = res);
  }
}
