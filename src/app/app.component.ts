import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  whatHappened = 'nothing';

  first() {
    this.whatHappened = 'First was pressed';
  }

  second() {
    this.whatHappened = 'Second was pressed';
  }

  third() {
    this.whatHappened = 'Third was pressed';
  }
}
