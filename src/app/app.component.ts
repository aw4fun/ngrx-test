import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-test';

  counter = 0;
  updatedAt?: number;

  get cannotDecrease(): boolean {
    return this.counter <= 0;
  }

  increase(): void {
    this.updatedAt = Date.now();
    this.counter++;
  }

  decrease(): void {
    this.updatedAt = Date.now();
    this.counter--;
  }

  reset(): void {
    this.updatedAt = Date.now();
    this.counter = 0;
  }
}
